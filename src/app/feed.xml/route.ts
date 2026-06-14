import { getAllBlogPosts } from '@/lib/mdx';

const SITE_URL = 'https://baghel.dev';
const FEED_TITLE = 'Devansh Baghel — Blog';
const FEED_SUBTITLE =
  'Thoughts on web development, programming, and building things on the internet.';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET(): Promise<Response> {
  const posts = await getAllBlogPosts();
  const recent = posts.slice(0, 20);

  const updated = recent[0]
    ? new Date(recent[0].date).toISOString()
    : new Date().toISOString();

  const entries = recent
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const published = new Date(post.date).toISOString();
      return `
  <entry>
    <title>${escapeXml(post.title)}</title>
    <id>${url}</id>
    <link href="${url}" />
    <updated>${published}</updated>
    <published>${published}</published>
    <summary>${escapeXml(post.excerpt)}</summary>
    <author>
      <name>Devansh Baghel</name>
      <uri>${SITE_URL}</uri>
    </author>
  </entry>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(FEED_TITLE)}</title>
  <subtitle>${escapeXml(FEED_SUBTITLE)}</subtitle>
  <id>${SITE_URL}/blog</id>
  <link href="${SITE_URL}/blog" />
  <link href="${SITE_URL}/feed.xml" rel="self" type="application/atom+xml" />
  <updated>${updated}</updated>
  <rights>© ${new Date().getFullYear()} Devansh Baghel</rights>
  ${entries}
</feed>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
