<<<<<<< HEAD
"use client";
import React, { useMemo } from 'react';
import { useUI } from '../store/uiContext';
import { generateJava } from '../lib/codegen';

/*
  CodePanel computes generated Java code from the current `StyleModel`
  available in the UI context. It provides basic actions like copy and
  download. Keeping generation here simplifies reactivity: whenever the
  model changes, the generated string updates automatically.
*/
export default function CodePanel() {
  const ui = useUI();

  const code = useMemo(() => {
    try {
      return generateJava(ui.model);
    } catch (e) {
      return `// Code generation error: ${(e as Error).message}`;
    }
  }, [ui.model]);

  function copy() {
    try {
      navigator.clipboard.writeText(code);
    } catch (e) {
      console.error('Copy failed', e);
    }
  }

  function download() {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${ui.model.id || 'component'}.java`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-800">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">Generated Java</h3>
        <div className="flex gap-2">
          <button onClick={copy} className="px-2 py-1 border rounded text-sm">Copy</button>
          <button onClick={download} className="px-2 py-1 border rounded text-sm">Download</button>
        </div>
      </div>
      <pre className="text-xs overflow-auto max-h-60 bg-white dark:bg-slate-800 p-2 rounded">
        <code>{code ?? '// Generated code appears here'}</code>
      </pre>
    </div>
  );
}

=======
"use client";
import React, { useMemo } from 'react';
import { useUI } from '../store/uiContext';
import { generateJava } from '../lib/codegen';

/*
  CodePanel computes generated Java code from the current `StyleModel`
  available in the UI context. It provides basic actions like copy and
  download. Keeping generation here simplifies reactivity: whenever the
  model changes, the generated string updates automatically.
*/
export default function CodePanel() {
  const ui = useUI();

  const code = useMemo(() => {
    try {
      return generateJava(ui.model);
    } catch (e) {
      return `// Code generation error: ${(e as Error).message}`;
    }
  }, [ui.model]);

  function copy() {
    try {
      navigator.clipboard.writeText(code);
    } catch (e) {
      console.error('Copy failed', e);
    }
  }

  function download() {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${ui.model.id || 'component'}.java`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-800">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium">Generated Java</h3>
        <div className="flex gap-2">
          <button onClick={copy} className="px-2 py-1 border rounded text-sm">Copy</button>
          <button onClick={download} className="px-2 py-1 border rounded text-sm">Download</button>
        </div>
      </div>
      <pre className="text-xs overflow-auto max-h-60 bg-white dark:bg-slate-800 p-2 rounded">
        <code>{code ?? '// Generated code appears here'}</code>
      </pre>
    </div>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
