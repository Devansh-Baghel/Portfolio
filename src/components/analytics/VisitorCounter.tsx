'use client';

import { FaEye, FaUsers } from 'react-icons/fa';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function VisitorCounter() {
  const { data, loading } = useAnalytics();

  if (loading) {
    return (
      <div className="motion-preset-slide-right mt-6 flex flex-col gap-3 animate-blur-in-900 motion-delay-600 lg:hidden">
        <div className="flex items-center gap-2 text-slate-600 animate-pulse">
          <FaEye className="h-5 w-5" />
          <span className="text-lg">Loading analytics...</span>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="motion-preset-slide-right mt-6 flex flex-col gap-3 animate-blur-in-900 motion-delay-600 lg:hidden">
      <div className="flex items-center gap-2 text-slate-900">
        <FaEye className="h-5 w-5 text-lime-500" />
        <span className="text-lg">
          <strong className="text-lime-500">
            {data.totalPageviews.toLocaleString()}
          </strong>{' '}
          pageviews
        </span>
      </div>

      <div className="flex items-center gap-2 text-slate-900">
        <FaUsers className="h-5 w-5 text-lime-500" />
        <span className="text-lg">
          <strong className="text-lime-500">
            {data.uniqueVisitors.toLocaleString()}
          </strong>{' '}
          unique visitors
        </span>
      </div>
    </div>
  );
}
