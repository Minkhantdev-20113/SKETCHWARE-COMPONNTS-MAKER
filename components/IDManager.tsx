<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from 'react';
import { isValidId } from '../lib/validators';
import { getPref } from '../lib/sharedPrefs';

/*
  IDManager: lightweight ID input that validates format.
  - Shows an inline error if the ID is invalid.
  - Integration with usage-frequency suggestions will be added later.
*/
export default function IDManager({ value, onChange }: { value?: string; onChange?: (v: string) => void }) {
  const [error, setError] = useState<string | null>(null);

  function handle(v: string) {
    if (!v) {
      setError('ID is required');
      onChange?.(v);
      return;
    }
    if (!isValidId(v)) {
      setError('Invalid ID format (use letters, numbers, underscore; start with letter/_)');
      return;
    }
    setError(null);
    onChange?.(v);
  }

  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    try {
      const counts = getPref<Record<string, number>>('ids:usageCounts', {});
      const items = Object.keys(counts || {}).sort((a, b) => (counts?.[b] || 0) - (counts?.[a] || 0));
      setSuggestions(items.slice(0, 8));
    } catch (e) {
      setSuggestions([]);
    }
  }, []);

  return (
    <div>
      <label className="block text-sm font-medium">ID</label>
      <input
        value={value}
        onChange={(e) => handle(e.target.value)}
        className="mt-1 px-2 py-1 border rounded w-full"
        placeholder="e.g. my_button"
        aria-invalid={!!error}
        aria-describedby={error ? 'id-error' : undefined}
      />
      {error ? <p id="id-error" className="mt-1 text-xs text-red-600">{error}</p> : null}

      {suggestions.length > 0 ? (
        <div className="mt-2 text-xs text-slate-600">
          <div className="font-medium">Suggestions</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => onChange?.(s)}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
=======
"use client";
import React, { useState, useEffect } from 'react';
import { isValidId } from '../lib/validators';
import { getPref } from '../lib/sharedPrefs';

/*
  IDManager: lightweight ID input that validates format.
  - Shows an inline error if the ID is invalid.
  - Integration with usage-frequency suggestions will be added later.
*/
export default function IDManager({ value, onChange }: { value?: string; onChange?: (v: string) => void }) {
  const [error, setError] = useState<string | null>(null);

  function handle(v: string) {
    if (!v) {
      setError('ID is required');
      onChange?.(v);
      return;
    }
    if (!isValidId(v)) {
      setError('Invalid ID format (use letters, numbers, underscore; start with letter/_)');
      return;
    }
    setError(null);
    onChange?.(v);
  }

  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    try {
      const counts = getPref<Record<string, number>>('ids:usageCounts', {});
      const items = Object.keys(counts || {}).sort((a, b) => (counts?.[b] || 0) - (counts?.[a] || 0));
      setSuggestions(items.slice(0, 8));
    } catch (e) {
      setSuggestions([]);
    }
  }, []);

  return (
    <div>
      <label className="block text-sm font-medium">ID</label>
      <input
        value={value}
        onChange={(e) => handle(e.target.value)}
        className="mt-1 px-2 py-1 border rounded w-full"
        placeholder="e.g. my_button"
        aria-invalid={!!error}
        aria-describedby={error ? 'id-error' : undefined}
      />
      {error ? <p id="id-error" className="mt-1 text-xs text-red-600">{error}</p> : null}

      {suggestions.length > 0 ? (
        <div className="mt-2 text-xs text-slate-600">
          <div className="font-medium">Suggestions</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => onChange?.(s)}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
