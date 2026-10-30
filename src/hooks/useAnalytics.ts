'use client';

import { useEffect, useState } from 'react';

export interface AnalyticsData {
  totalPageviews: number;
  uniqueVisitors: number;
}

let analyticsPromise: Promise<AnalyticsData> | null = null;

async function fetchAnalytics(): Promise<AnalyticsData> {
  analyticsPromise ??= fetch('/api/analytics')
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json() as Promise<AnalyticsData>;
    })
    .catch((error) => {
      console.error('Failed to fetch analytics:', error);
      analyticsPromise = null;
      throw error;
    });

  return analyticsPromise;
}

export function useAnalytics(): {
  data: AnalyticsData | null;
  loading: boolean;
} {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchAnalytics()
      .then((analyticsData) => {
        if (!cancelled) {
          setData(analyticsData);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setData(null);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading };
}
