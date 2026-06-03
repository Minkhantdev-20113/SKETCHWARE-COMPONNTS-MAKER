<<<<<<< HEAD
/**
 * sharedPrefs.ts
 * A lightweight SharedPreferences-like wrapper over localStorage.
 * Responsibilities:
 *  - Provide get/set/remove helpers
 *  - Namespaced keys and versioning for migration
 *  - Export/import helpers for JSON serialization
 *
 * Why: keeps persistence concerns centralized and easier to test.
 */

export const PREFIX = 'sketchwebgen_v1:';

function key(k: string) {
  return `${PREFIX}${k}`;
}

export function setPref<T>(k: string, value: T) {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key(k), JSON.stringify(value));
  } catch (e) {
    // ignore storage errors (e.g., quota); callers should handle validation
  }
}

export function getPref<T>(k: string, fallback?: T): T | undefined {
  try {
    if (typeof window === 'undefined') return fallback;
    const raw = localStorage.getItem(key(k));
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (e) {
    return fallback;
  }
}

export function removePref(k: string) {
  try {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key(k));
  } catch (e) {}
}

export function exportAll(): string {
  // Exports all keys under this prefix as a JSON string.
  try {
    if (typeof window === 'undefined') return '{}';
    const out: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      if (k.startsWith(PREFIX)) {
        const short = k.substring(PREFIX.length);
        try {
          out[short] = JSON.parse(localStorage.getItem(k) || 'null');
        } catch (e) {
          out[short] = localStorage.getItem(k);
        }
      }
    }
    return JSON.stringify({ meta: { exportedAt: new Date().toISOString() }, data: out }, null, 2);
  } catch (e) {
    return '{}';
  }
}

export function importAll(json: string) {
  try {
    const parsed = JSON.parse(json);
    if (!parsed || typeof parsed !== 'object') return;
    const data = parsed.data || parsed;
    for (const k of Object.keys(data)) {
      setPref(k, data[k]);
    }
  } catch (e) {
    throw new Error('Invalid import JSON');
  }
}
=======
/**
 * sharedPrefs.ts
 * A lightweight SharedPreferences-like wrapper over localStorage.
 * Responsibilities:
 *  - Provide get/set/remove helpers
 *  - Namespaced keys and versioning for migration
 *  - Export/import helpers for JSON serialization
 *
 * Why: keeps persistence concerns centralized and easier to test.
 */

export const PREFIX = 'sketchwebgen_v1:';

function key(k: string) {
  return `${PREFIX}${k}`;
}

export function setPref<T>(k: string, value: T) {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key(k), JSON.stringify(value));
  } catch (e) {
    // ignore storage errors (e.g., quota); callers should handle validation
  }
}

export function getPref<T>(k: string, fallback?: T): T | undefined {
  try {
    if (typeof window === 'undefined') return fallback;
    const raw = localStorage.getItem(key(k));
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (e) {
    return fallback;
  }
}

export function removePref(k: string) {
  try {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key(k));
  } catch (e) {}
}

export function exportAll(): string {
  // Exports all keys under this prefix as a JSON string.
  try {
    if (typeof window === 'undefined') return '{}';
    const out: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k) continue;
      if (k.startsWith(PREFIX)) {
        const short = k.substring(PREFIX.length);
        try {
          out[short] = JSON.parse(localStorage.getItem(k) || 'null');
        } catch (e) {
          out[short] = localStorage.getItem(k);
        }
      }
    }
    return JSON.stringify({ meta: { exportedAt: new Date().toISOString() }, data: out }, null, 2);
  } catch (e) {
    return '{}';
  }
}

export function importAll(json: string) {
  try {
    const parsed = JSON.parse(json);
    if (!parsed || typeof parsed !== 'object') return;
    const data = parsed.data || parsed;
    for (const k of Object.keys(data)) {
      setPref(k, data[k]);
    }
  } catch (e) {
    throw new Error('Invalid import JSON');
  }
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
