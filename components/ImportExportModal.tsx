<<<<<<< HEAD
"use client";
import React, { useState } from 'react';
import { exportAll, importAll } from '../lib/sharedPrefs';

/*
  ImportExportModal
  Simple modal UI to export current localStorage data (scoped to app) and
  import JSON. The modal provides three ways to import: paste JSON, upload
  a file, or replace from text. Import is validated by sharedPrefs.importAll
*/

export default function ImportExportModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [importText, setImportText] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  if (!open) return null;

  function handleExport() {
    const data = exportAll();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sketchwebgen-export-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage('Export started');
  }

  function handleImportPaste() {
    try {
      importAll(importText);
      setMessage('Import successful');
    } catch (e) {
      setMessage('Import failed: ' + (e as Error).message);
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const txt = String(reader.result || '');
        importAll(txt);
        setMessage('Import successful');
      } catch (err) {
        setMessage('Import failed: ' + (err as Error).message);
      }
    };
    reader.readAsText(f);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" role="dialog">
      <div className="bg-white dark:bg-slate-900 p-4 rounded shadow max-w-2xl w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Import / Export</h3>
          <button onClick={onClose} aria-label="Close" className="px-2 py-1">✕</button>
        </div>

        <div className="mt-3">
          <button onClick={handleExport} className="px-3 py-2 bg-primary text-white rounded">Export JSON</button>
          <div className="mt-2">
            <label className="block text-sm font-medium">Import from file</label>
            <input type="file" accept="application/json" onChange={handleFile} className="mt-1" />
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium">Import from text</label>
            <textarea value={importText} onChange={(e) => setImportText(e.target.value)} rows={6} className="w-full mt-1 p-2 border rounded text-sm" />
            <div className="flex gap-2 mt-2">
              <button onClick={handleImportPaste} className="px-3 py-2 border rounded">Import</button>
              <button onClick={() => { setImportText(''); setMessage(null); }} className="px-3 py-2 border rounded">Clear</button>
            </div>
          </div>

          {message ? <div className="mt-3 text-sm text-slate-600">{message}</div> : null}
        </div>
      </div>
    </div>
  );
}
=======
"use client";
import React, { useState } from 'react';
import { exportAll, importAll } from '../lib/sharedPrefs';

/*
  ImportExportModal
  Simple modal UI to export current localStorage data (scoped to app) and
  import JSON. The modal provides three ways to import: paste JSON, upload
  a file, or replace from text. Import is validated by sharedPrefs.importAll
*/

export default function ImportExportModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [importText, setImportText] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  if (!open) return null;

  function handleExport() {
    const data = exportAll();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sketchwebgen-export-${new Date().toISOString()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMessage('Export started');
  }

  function handleImportPaste() {
    try {
      importAll(importText);
      setMessage('Import successful');
    } catch (e) {
      setMessage('Import failed: ' + (e as Error).message);
    }
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const txt = String(reader.result || '');
        importAll(txt);
        setMessage('Import successful');
      } catch (err) {
        setMessage('Import failed: ' + (err as Error).message);
      }
    };
    reader.readAsText(f);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" role="dialog">
      <div className="bg-white dark:bg-slate-900 p-4 rounded shadow max-w-2xl w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Import / Export</h3>
          <button onClick={onClose} aria-label="Close" className="px-2 py-1">✕</button>
        </div>

        <div className="mt-3">
          <button onClick={handleExport} className="px-3 py-2 bg-primary text-white rounded">Export JSON</button>
          <div className="mt-2">
            <label className="block text-sm font-medium">Import from file</label>
            <input type="file" accept="application/json" onChange={handleFile} className="mt-1" />
          </div>

          <div className="mt-3">
            <label className="block text-sm font-medium">Import from text</label>
            <textarea value={importText} onChange={(e) => setImportText(e.target.value)} rows={6} className="w-full mt-1 p-2 border rounded text-sm" />
            <div className="flex gap-2 mt-2">
              <button onClick={handleImportPaste} className="px-3 py-2 border rounded">Import</button>
              <button onClick={() => { setImportText(''); setMessage(null); }} className="px-3 py-2 border rounded">Clear</button>
            </div>
          </div>

          {message ? <div className="mt-3 text-sm text-slate-600">{message}</div> : null}
        </div>
      </div>
    </div>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
