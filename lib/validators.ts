<<<<<<< HEAD
/**
 * validators.ts
 * Centralized validation utilities for colors, IDs, and numeric ranges.
 * Keeping validation logic here ensures consistent behavior across components
 * and enables easy unit testing.
 */

export function isHexColor(v?: string): boolean {
  if (!v || typeof v !== 'string') return false;
  const s = v.trim();
  return /^#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(s);
}

export function normalizeHexInput(v: string): string {
  // Normalize to #RRGGBB or #AARRGGBB; fallback to #FFFFFFFF on invalid input
  if (isHexColor(v)) return v.toUpperCase();
  return '#FFFFFFFF';
}

export function isValidId(v?: string): boolean {
  if (!v || typeof v !== 'string') return false;
  return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(v.trim());
}

export function clampNumber(n: number | undefined, min = 0, max = Number.POSITIVE_INFINITY): number {
  if (typeof n !== 'number' || Number.isNaN(n)) return min;
  return Math.min(Math.max(n, min), max);
}
=======
/**
 * validators.ts
 * Centralized validation utilities for colors, IDs, and numeric ranges.
 * Keeping validation logic here ensures consistent behavior across components
 * and enables easy unit testing.
 */

export function isHexColor(v?: string): boolean {
  if (!v || typeof v !== 'string') return false;
  const s = v.trim();
  return /^#(?:[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(s);
}

export function normalizeHexInput(v: string): string {
  // Normalize to #RRGGBB or #AARRGGBB; fallback to #FFFFFFFF on invalid input
  if (isHexColor(v)) return v.toUpperCase();
  return '#FFFFFFFF';
}

export function isValidId(v?: string): boolean {
  if (!v || typeof v !== 'string') return false;
  return /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(v.trim());
}

export function clampNumber(n: number | undefined, min = 0, max = Number.POSITIVE_INFINITY): number {
  if (typeof n !== 'number' || Number.isNaN(n)) return min;
  return Math.min(Math.max(n, min), max);
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
