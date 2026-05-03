'use client';

import { useEffect, useState } from 'react';

export interface AnalyticsData {
  totalPageviews: number;
  uniqueVisitors: number;
}

export function useAnalytics(): {
  data: AnalyticsData | null;
  loading: boolean;
} {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        const response = await fetch('/api/analytics');
        const analyticsData = await response.json();
        setData(analyticsData);
      } catch (error) {
        console.error('Failed to fetch analytics:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchAnalytics();
  }, []);

  return { data, loading };
}
