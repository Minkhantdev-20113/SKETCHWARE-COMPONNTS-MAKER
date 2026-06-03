<<<<<<< HEAD
"use client";
import React from 'react';
import CodePanel from './CodePanel';

/*
  BottomSheet stub: this component will become the inspector/navigation sheet
  used in mobile-first UX. For now it renders a minimal persistent bar and
  placeholder content. Later this will be replaced with a fully interactive
  swipeable sheet component.
*/
export default function BottomSheet() {
  return (
    <div className="border-t p-3 bg-white dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 bg-primary text-white rounded">Add</button>
          <button className="px-3 py-2 border rounded">Presets</button>
        </div>
        <div className="text-sm text-slate-500">Inspector: swipe up to open</div>
      </div>
      <div className="max-w-4xl mx-auto mt-3">
        <CodePanel />
      </div>
    </div>
  );
}
=======
"use client";
import React from 'react';
import CodePanel from './CodePanel';

/*
  BottomSheet stub: this component will become the inspector/navigation sheet
  used in mobile-first UX. For now it renders a minimal persistent bar and
  placeholder content. Later this will be replaced with a fully interactive
  swipeable sheet component.
*/
export default function BottomSheet() {
  return (
    <div className="border-t p-3 bg-white dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 bg-primary text-white rounded">Add</button>
          <button className="px-3 py-2 border rounded">Presets</button>
        </div>
        <div className="text-sm text-slate-500">Inspector: swipe up to open</div>
      </div>
      <div className="max-w-4xl mx-auto mt-3">
        <CodePanel />
      </div>
    </div>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
