"use client";

import { useEffect, useRef } from "react";

export function FaviconAnimator() {
  const rotationRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
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

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Could not get canvas context");
      return;
    }

    const img = new Image();

    let faviconUrl = faviconLink.href;
    if (faviconUrl.endsWith('.ico')) {
      faviconUrl = faviconUrl.replace('favicon.ico', 'favicon-32x32.png');
    }

    img.onload = () => {
      canvas.width = img.width || 32;
      canvas.height = img.height || 32;

      const rotateFavicon = () => {
        if (!ctx || !img || !canvas) return;

        rotationRef.current = (rotationRef.current + 5) % 360;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotationRef.current * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        ctx.restore();

        const rotatedDataUrl = canvas.toDataURL("image/png");

        const allFavicons = document.querySelectorAll('link[rel*="icon"]');
        allFavicons.forEach((link) => {
          (link as HTMLLinkElement).href = rotatedDataUrl;
        });

        setTimeout(() => {
          animationFrameRef.current = requestAnimationFrame(rotateFavicon);
        }, 100);
      };

      rotateFavicon();
    };

    img.onerror = (error) => {
      console.error("Failed to load favicon image:", error);
    };

    img.src = faviconUrl;

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return null;
}
