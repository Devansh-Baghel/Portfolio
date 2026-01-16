'use client';

import { useEffect, useState } from 'react';
import { FaEye, FaUsers } from 'react-icons/fa';

interface AnalyticsData {
    totalPageviews: number;
    uniqueVisitors: number;
}

export default function VisitorBadge() {
    const [data, setData] = useState<AnalyticsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

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

    if (loading) {
        return (
            <div className="fixed right-6 top-6 z-50 animate-pulse">
                <div className="rounded-30px border-3px border-slate-900 bg-white p-3 shadow-4px4px0px0px1e293b">
                    <div className="flex items-center gap-2">
                        <FaEye className="h-4 w-4 text-slate-400" />
                        <span className="text-sm text-slate-400">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div
            className="fixed right-6 top-6 z-50 animate-fade-in hidden lg:block"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className="group rounded-30px border-3px border-slate-900 bg-white shadow-4px4px0px0px1e293b transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                {/* Collapsed view */}
                <div className={`flex items-center gap-3 p-3 ${isExpanded ? 'hidden' : 'flex'}`}>
                    <div className="flex items-center gap-2">
                        <FaEye className="h-4 w-4 text-lime-500" />
                        <span className="text-sm font-bold text-slate-900">
                            {data.totalPageviews.toLocaleString()}
                        </span>
                    </div>
                </div>

                {/* Expanded view */}
                <div className={`flex-col gap-3 p-4 ${isExpanded ? 'flex' : 'hidden'}`}>
                    {/* Total Pageviews */}
                    <div className="flex items-center gap-2">
                        <FaEye className="h-4 w-4 text-lime-500" />
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-600">Total Views</span>
                            <span className="text-lg font-bold text-slate-900">
                                {data.totalPageviews.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-slate-900/10" />

                    {/* Unique Visitors */}
                    <div className="flex items-center gap-2">
                        <FaUsers className="h-4 w-4 text-lime-500" />
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-600">Unique Visitors</span>
                            <span className="text-lg font-bold text-slate-900">
                                {data.uniqueVisitors.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
