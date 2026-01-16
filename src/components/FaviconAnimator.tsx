"use client";

import { useFaviconRotation } from "@/hooks/useFaviconRotation";

export function FaviconAnimator() {
    useFaviconRotation();
    return null; // This component doesn't render anything
}
