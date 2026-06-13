import { cn } from '@/lib/utils';

/**
 * Shared Tailwind class strings for the portfolio's design system.
 * Per AGENTS.md: "shared class strings go in src/utils/constants.ts"
 */

/** Card: rounded border, dark shadow, hover shift (no padding — add at call site) */
export const cardBase =
  'rounded-[30px] border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none';

/** Card without hover (for static cards like 404 page, empty states) */
export const cardStatic =
  'rounded-[30px] border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#1e293b]';

/** Filled button: dark bg, green accent shadow */
export const buttonFilled =
  'rounded-[30px] border-[2px] border-slate-900 bg-slate-900 text-white shadow-[2px_2px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none';

/** Outline button: transparent bg, dark shadow */
export const buttonOutline =
  'rounded-[30px] border-[3px] border-slate-900 shadow-[2px_2px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none';

/** Input/textarea: card base + placeholder + focus states */
export const inputBase = cn(
  cardBase,
  'placeholder:text-xl placeholder:text-slate-800 focus:translate-x-1 focus:translate-y-1 focus:shadow-none focus:outline-none',
);
