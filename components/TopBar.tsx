<<<<<<< HEAD
"use client";
import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import { useUI } from '../store/uiContext';
import ImportExportModal from './ImportExportModal';

/*
  TopBar: simple header with project title, device toggle placeholder, and theme toggle.
  It is intentionally lightweight; full action handlers will be added during feature
  implementation (undo/redo, account, project selection).
*/
export default function TopBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const ui = useUI();
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b dark:border-slate-800">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold">SketchWebGen</h1>
        <span className="text-sm text-slate-500">Mobile UI → Android Java</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          aria-label="Toggle device preview"
          onClick={() => ui.toggleSimulator()}
          title={ui.simulatorOn ? `Simulator: ${ui.device?.name}` : 'Open device simulator'}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700 ${ui.simulatorOn ? 'bg-slate-100 dark:bg-slate-700' : ''}`}
        >
          {ui.simulatorOn ? '📱' : '📱'}
        </button>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
          className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <button
          onClick={() => setOpen(true)}
          aria-label="Import or export JSON"
          className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          ⤓⤒
        </button>
        <ImportExportModal open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}

=======
"use client";
import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';
import { useUI } from '../store/uiContext';
import ImportExportModal from './ImportExportModal';

/*
  TopBar: simple header with project title, device toggle placeholder, and theme toggle.
  It is intentionally lightweight; full action handlers will be added during feature
  implementation (undo/redo, account, project selection).
*/
export default function TopBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const ui = useUI();
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b dark:border-slate-800">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold">SketchWebGen</h1>
        <span className="text-sm text-slate-500">Mobile UI → Android Java</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          aria-label="Toggle device preview"
          onClick={() => ui.toggleSimulator()}
          title={ui.simulatorOn ? `Simulator: ${ui.device?.name}` : 'Open device simulator'}
          className={`p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700 ${ui.simulatorOn ? 'bg-slate-100 dark:bg-slate-700' : ''}`}
        >
          {ui.simulatorOn ? '📱' : '📱'}
        </button>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label="Toggle theme"
          className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
+        <button
+          onClick={() => setOpen(true)}
+          aria-label="Import or export JSON"
+          className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
+        >
+          ⤓⤒
+        </button>
+        <ImportExportModal open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
