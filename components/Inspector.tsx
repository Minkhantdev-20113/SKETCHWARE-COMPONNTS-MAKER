<<<<<<< HEAD
"use client";
import React from 'react';
import { useUI } from '../store/uiContext';
import IDManager from './IDManager';
import ColorPicker from './ColorPicker';
import { isHexColor, isValidId, normalizeHexInput, clampNumber } from '../lib/validators';

/*
  Inspector: provides a minimal set of controls to edit the active `StyleModel`.
  - Edits are applied to the UI context's model via `setModel`.
  - Basic validation is performed inline; errors are displayed next to inputs.
  - All mutations are wrapped in try-catch to avoid breaking the app.
*/
export default function Inspector() {
  const ui = useUI();
  const model = ui.model;

  function set<K extends keyof typeof model>(k: K, v: any) {
    try {
      ui.setModel({ ...model, [k]: v });
    } catch (e) {
      console.error('Failed to set model field', k, e);
    }
  }

  return (
    <aside className="p-4 bg-white dark:bg-slate-900 border-l dark:border-slate-800 w-full md:w-96">
      <h2 className="text-lg font-semibold">Inspector</h2>

      <div className="mt-3">
        <label className="block text-sm font-medium">ID</label>
        <IDManager
          value={model.id}
          onChange={(v) => {
            if (!isValidId(v)) return;
            set('id', v);
          }}
        />
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium">Background</label>
        <ColorPicker
          color={model.color}
          onChange={(hex) => {
            if (!isHexColor(hex)) return;
            set('color', normalizeHexInput(hex));
          }}
        />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Width</label>
          <input
            type="text"
            value={model.width?.toString() ?? 'match_parent'}
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'match_parent' || value === 'wrap') {
                set('width', value);
              } else {
                set('width', clampNumber(Number(value), 20, 800));
              }
            }}
            placeholder="match_parent / wrap / px"
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Height</label>
          <input
            type="text"
            value={model.height?.toString() ?? 'wrap'}
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'match_parent' || value === 'wrap') {
                set('height', value);
              } else {
                set('height', clampNumber(Number(value), 20, 800));
              }
            }}
            placeholder="wrap / match_parent / px"
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Stroke width</label>
          <input
            type="number"
            value={model.stroke?.width ?? 0}
            onChange={(e) => set('stroke', { ...(model.stroke ?? { width: 0, color: '#000000' }), width: clampNumber(Number(e.target.value), 0, 20) })}
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Stroke color</label>
          <input
            type="color"
            value={model.stroke?.color ?? '#000000'}
            onChange={(e) => set('stroke', { ...(model.stroke ?? { width: 0, color: '#000000' }), color: normalizeHexInput(e.target.value) })}
            className="mt-1 w-full h-10 p-0 border rounded"
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Corner Radius</label>
          <input
            type="number"
            value={model.cornerRadius ?? 0}
            onChange={(e) => set('cornerRadius', clampNumber(Number(e.target.value), 0, 200))}
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Elevation</label>
          <input
            type="number"
            value={model.elevation ?? 0}
            onChange={(e) => set('elevation', clampNumber(Number(e.target.value), 0, 50))}
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium">Ripple</label>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={model.ripple?.enabled ?? false}
              onChange={(e) => set('ripple', { ...(model.ripple ?? { enabled: false, color: '#E0E0E0' }), enabled: e.target.checked })}
            />
            <span className="text-sm">Enabled</span>
          </label>
          <input
            type="color"
            value={model.ripple?.color ?? '#E0E0E0'}
            onChange={(e) => set('ripple', { ...(model.ripple ?? { enabled: false, color: '#E0E0E0' }), color: normalizeHexInput(e.target.value) })}
            className="w-10 h-10 p-0 border rounded"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={model.clickable}
            onChange={(e) => set('clickable', e.target.checked)}
          />
          <span className="text-sm">Clickable</span>
        </label>
      </div>
    </aside>
  );
}
=======
"use client";
import React from 'react';
import { useUI } from '../store/uiContext';
import IDManager from './IDManager';
import ColorPicker from './ColorPicker';
import { isHexColor, isValidId, normalizeHexInput, clampNumber } from '../lib/validators';

/*
  Inspector: provides a minimal set of controls to edit the active `StyleModel`.
  - Edits are applied to the UI context's model via `setModel`.
  - Basic validation is performed inline; errors are displayed next to inputs.
  - All mutations are wrapped in try-catch to avoid breaking the app.
*/
export default function Inspector() {
  const ui = useUI();
  const model = ui.model;

  function set<K extends keyof typeof model>(k: K, v: any) {
    try {
      ui.setModel({ ...model, [k]: v });
    } catch (e) {
      console.error('Failed to set model field', k, e);
    }
  }

  return (
    <aside className="p-4 bg-white dark:bg-slate-900 border-l dark:border-slate-800 w-full md:w-96">
      <h2 className="text-lg font-semibold">Inspector</h2>

      <div className="mt-3">
        <label className="block text-sm font-medium">ID</label>
        <IDManager
          value={model.id}
          onChange={(v) => {
            if (!isValidId(v)) return;
            set('id', v);
          }}
        />
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium">Background</label>
        <ColorPicker
          color={model.color}
          onChange={(hex) => {
            if (!isHexColor(hex)) return;
            set('color', normalizeHexInput(hex));
          }}
        />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Width</label>
          <input
            type="text"
            value={model.width?.toString() ?? 'match_parent'}
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'match_parent' || value === 'wrap') {
                set('width', value);
              } else {
                set('width', clampNumber(Number(value), 20, 800));
              }
            }}
            placeholder="match_parent / wrap / px"
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Height</label>
          <input
            type="text"
            value={model.height?.toString() ?? 'wrap'}
            onChange={(e) => {
              const value = e.target.value;
              if (value === 'match_parent' || value === 'wrap') {
                set('height', value);
              } else {
                set('height', clampNumber(Number(value), 20, 800));
              }
            }}
            placeholder="wrap / match_parent / px"
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Stroke width</label>
          <input
            type="number"
            value={model.stroke?.width ?? 0}
            onChange={(e) => set('stroke', { ...(model.stroke ?? { width: 0, color: '#000000' }), width: clampNumber(Number(e.target.value), 0, 20) })}
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Stroke color</label>
          <input
            type="color"
            value={model.stroke?.color ?? '#000000'}
            onChange={(e) => set('stroke', { ...(model.stroke ?? { width: 0, color: '#000000' }), color: normalizeHexInput(e.target.value) })}
            className="mt-1 w-full h-10 p-0 border rounded"
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium">Corner Radius</label>
          <input
            type="number"
            value={model.cornerRadius ?? 0}
            onChange={(e) => set('cornerRadius', clampNumber(Number(e.target.value), 0, 200))}
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Elevation</label>
          <input
            type="number"
            value={model.elevation ?? 0}
            onChange={(e) => set('elevation', clampNumber(Number(e.target.value), 0, 50))}
            className="mt-1 px-2 py-1 border rounded w-full"
          />
        </div>
      </div>

      <div className="mt-3">
        <label className="block text-sm font-medium">Ripple</label>
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={model.ripple?.enabled ?? false}
              onChange={(e) => set('ripple', { ...(model.ripple ?? { enabled: false, color: '#E0E0E0' }), enabled: e.target.checked })}
            />
            <span className="text-sm">Enabled</span>
          </label>
          <input
            type="color"
            value={model.ripple?.color ?? '#E0E0E0'}
            onChange={(e) => set('ripple', { ...(model.ripple ?? { enabled: false, color: '#E0E0E0' }), color: normalizeHexInput(e.target.value) })}
            className="w-10 h-10 p-0 border rounded"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={model.clickable}
            onChange={(e) => set('clickable', e.target.checked)}
          />
          <span className="text-sm">Clickable</span>
        </label>
      </div>
    </aside>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
