"use client";

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";

interface CommitData {
    message: string;
    date: string;
    totalCommits: number;
}

export default function LatestCommit() {
    const [commitData, setCommitData] = useState<CommitData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchLatestCommit() {
            try {
                // Fetch latest commit
                const commitResponse = await fetch(
                    "https://api.github.com/repos/Devansh-Baghel/Portfolio/commits?per_page=1"
                );
                const commits = await commitResponse.json();

                // Fetch total commits count
                const repoResponse = await fetch(
                    "https://api.github.com/repos/Devansh-Baghel/Portfolio"
                );
                const repoData = await repoResponse.json();

                if (commits && commits[0]) {
                    const latestCommit = commits[0];
                    setCommitData({
                        message: latestCommit.commit.message.split('\n')[0], // Get first line only
                        date: latestCommit.commit.author.date,
                        totalCommits: repoData.network_count || 0
                    });
                }
            } catch (error) {
                console.error("Error fetching commit data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchLatestCommit();
    }, []);

    if (loading) {
        return (
            <div className="wrapper animate-pulse rounded-20px border-2 border-slate-900 bg-slate-50 p-3 shadow-2px2px0px0px1e293b">
                <div className="h-4 w-32 rounded bg-slate-200"></div>
            </div>
        );
    }

    if (!commitData) return null;

    const timeAgo = formatDistanceToNow(new Date(commitData.date), {
        addSuffix: true,
    });

    return (
        <a
            href="https://github.com/Devansh-Baghel/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
        >
            <div className="wrapper rounded-20px border-2 border-slate-900 bg-white p-3 shadow-2px2px0px0px1e293b transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <div className="flex items-start gap-2">
                    <FaGithub className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-700" />
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="font-medium">Latest commit</span>
                            <span>•</span>
                            <span>{timeAgo}</span>
                        </div>
                        <p className="mt-1 truncate text-sm font-medium text-slate-900">
                            {commitData.message}
                        </p>
                        <div className="mt-1 text-xs text-slate-500">
                            {commitData.totalCommits} commits
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
}
