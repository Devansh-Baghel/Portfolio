// app/providers.tsx
'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

const POSTHOG_IDLE_INIT_MS = 1500;

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const init = () => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        defaults: '2025-05-24',
        disable_session_recording: true,
        disable_surveys: true,
        capture_dead_clicks: false,
      });
    };

    if (typeof window.requestIdleCallback === 'function') {
      const handle = window.requestIdleCallback(init, {
        timeout: POSTHOG_IDLE_INIT_MS,
      });
      return () => window.cancelIdleCallback(handle);
    }

    const timeout = setTimeout(init, POSTHOG_IDLE_INIT_MS);
    return () => clearTimeout(timeout);
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
