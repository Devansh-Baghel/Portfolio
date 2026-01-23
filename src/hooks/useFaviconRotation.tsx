// src/hooks/useFaviconRotation.tsx
"use client";

import { useEffect, useRef } from "react";

export function useFaviconRotation() {
    const rotationRef = useRef(0);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        // Find all possible favicon links
        let faviconLink = document.querySelector(
            'link[rel="icon"][sizes="32x32"]'
        ) as HTMLLinkElement;

        if (!faviconLink) {
            faviconLink = document.querySelector(
                'link[rel="icon"]'
            ) as HTMLLinkElement;
        }

        if (!faviconLink) {
            console.error("No favicon link found");
            return;
        }

        // console.log("Found favicon:", faviconLink.href);

        // Create canvas for drawing rotated favicon
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
            console.error("Could not get canvas context");
            return;
        }

        // Load the original favicon - use PNG version for better canvas support
        const img = new Image();

        // Try to use PNG version if .ico
        let faviconUrl = faviconLink.href;
        if (faviconUrl.endsWith('.ico')) {
            // Try to use 32x32 PNG instead
            faviconUrl = faviconUrl.replace('favicon.ico', 'favicon-32x32.png');
            console.log("Using PNG version:", faviconUrl);
        }

        img.onload = () => {
            // console.log("Favicon loaded successfully, starting animation...");
            canvas.width = img.width || 32;
            canvas.height = img.height || 32;

            // Start the rotation animation
            const rotateFavicon = () => {
                if (!ctx || !img || !canvas) return;

                // Increment rotation by 30 degrees each frame
                rotationRef.current = (rotationRef.current + 5) % 360;

                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Save context state
                ctx.save();

                // Move to center of canvas
                ctx.translate(canvas.width / 2, canvas.height / 2);

                // Rotate by current angle (convert to radians)
                ctx.rotate((rotationRef.current * Math.PI) / 180);

                // Draw image centered
                ctx.drawImage(img, -img.width / 2, -img.height / 2);

                // Restore context state
                ctx.restore();

                // Convert canvas to data URL
                const rotatedDataUrl = canvas.toDataURL("image/png");

                // Update ALL favicon links
                const allFavicons = document.querySelectorAll('link[rel*="icon"]');
                allFavicons.forEach((link) => {
                    (link as HTMLLinkElement).href = rotatedDataUrl;
                });

                // Continue animation after a delay (adjust speed here)
                setTimeout(() => {
                    animationFrameRef.current = requestAnimationFrame(rotateFavicon);
                }, 100); // 100ms delay = slower animation, reduce for faster
            };

            // Start the animation loop
            rotateFavicon();
        };

        img.onerror = (error) => {
            console.error("Failed to load favicon image:", error);
            console.log("Tried to load:", faviconUrl);
        };

        // Load the favicon image
        img.src = faviconUrl;

        // Cleanup function
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);
}
