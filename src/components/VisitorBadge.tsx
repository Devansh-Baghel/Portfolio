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
    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const distanceFromBottom = documentHeight - scrollY - windowHeight;

            const isInMiddleSection = scrollY > 800 && distanceFromBottom > 100;
            setIsScrolled(isInMiddleSection);
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (loading) {
        return (
            <div className="fixed right-6 top-6 z-50 animate-pulse">
                <div className="rounded-3xl bg-white p-3">
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
            <div className="group rounded-3xl bg-white shadow-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1">
                {/* Collapsed view - Icon only in middle section */}
                <div className={`flex items-center gap-3 p-3 ${isExpanded ? 'hidden' : 'flex'}`}>
                    {isScrolled ? (
                        <FaEye className="h-4 w-4 text-lime-500" />
                    ) : (
                            <div className="flex items-center gap-2">
                                <FaEye className="h-4 w-4 text-lime-500" />
                                <span className="text-sm font-bold text-slate-900">
                                    {data.totalPageviews.toLocaleString()}
                                </span>
                            </div>
                    )}
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
