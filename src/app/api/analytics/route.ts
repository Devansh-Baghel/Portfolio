import { NextResponse } from 'next/server';

export const runtime = 'edge';

// Cache for 5 minutes to reduce API calls
export const revalidate = 300;

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID;
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const host = 'https://eu.posthog.com'; // or 'https://eu.posthog.com'

  if (!projectId || !apiKey) {
    console.error('Missing PostHog credentials');
    return NextResponse.json({
      totalPageviews: 0,
      uniqueVisitors: 0
    }, { status: 500 });
  }

  try {
    // Correct structure: query object contains both kind and query
    const requestBody = {
      query: {  // <-- This is the key fix!
        kind: 'HogQLQuery',
        query: `
          SELECT 
            count() as total_pageviews,
            count(DISTINCT person_id) as unique_visitors
          FROM events
          WHERE event = '$pageview'
        `
      }
    };

    const response = await fetch(`${host}/api/projects/${projectId}/query/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('PostHog API error:', response.status, errorText);
      return NextResponse.json({
        totalPageviews: 0,
        uniqueVisitors: 0
      }, { status: 500 });
    }

    const data = await response.json();

    console.log('PostHog response:', data.results);

    // PostHog returns data in results array
    const totalPageviews = data.results?.[0]?.[0] || 0;
    const uniqueVisitors = data.results?.[0]?.[1] || 0;

    return NextResponse.json({
      totalPageviews,
      uniqueVisitors,
    });

  } catch (error) {
    console.error('Error fetching PostHog analytics:', error);
    return NextResponse.json({
      totalPageviews: 0,
      uniqueVisitors: 0
    }, { status: 500 });
  }
}
