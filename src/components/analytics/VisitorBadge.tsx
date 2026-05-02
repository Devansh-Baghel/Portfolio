'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { FaEye, FaUsers } from 'react-icons/fa';

interface AnalyticsData {
    totalPageviews: number;
    uniqueVisitors: number;
}

export default function VisitorBadge() {
    const pathname = usePathname();
    const [data, setData] = useState<AnalyticsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isBlogPostRoute = /^\/blog\/[^/]+\/?$/.test(pathname);

    useEffect(() => {
        if (isBlogPostRoute) return;

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
    }, [isBlogPostRoute]);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const isInMiddleSection = scrollY > 800;
            setIsScrolled(isInMiddleSection);
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isBlogPostRoute) return null;

    if (loading) {
        return (
            <div className="fixed right-6 top-6 z-50 animate-pulse hidden lg:block">
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
            <motion.div
                layout
                className="group rounded-3xl bg-white shadow-sm"
                transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {isExpanded ? (
                        <motion.div
                            key="expanded"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15, ease: [0.2, 0, 0, 1] }}
                            className="flex flex-col gap-3 p-4"
                        >
                            <div className="flex items-center gap-2">
                                <FaEye className="h-4 w-4 text-lime-500" />
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-600">Total Views</span>
                                    <span className="text-lg font-bold text-slate-900">
                                        {data.totalPageviews.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <div className="h-[1px] w-full bg-slate-900/10" />
                            <div className="flex items-center gap-2">
                                <FaUsers className="h-4 w-4 text-lime-500" />
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-600">Unique Visitors</span>
                                    <span className="text-lg font-bold text-slate-900">
                                        {data.uniqueVisitors.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="collapsed"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15, ease: [0.2, 0, 0, 1] }}
                            className="flex items-center gap-3 p-3"
                        >
                            {isScrolled ? (
                                <FaEye className="h-4 w-4 text-lime-500 animate-eye-blink" />
                            ) : (
                                <div className="flex items-center gap-2">
                                    <FaEye className="h-4 w-4 text-lime-500 animate-eye-blink" />
                                    <span className="text-sm font-bold text-slate-900">
                                        {data.totalPageviews.toLocaleString()}
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
