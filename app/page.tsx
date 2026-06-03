<<<<<<< HEAD
import React from 'react';
import TopBar from '../components/TopBar';
import PreviewCanvas from '../components/PreviewCanvas';
import BottomSheet from '../components/BottomSheet';
import ErrorBoundary from '../components/ErrorBoundary';
import Inspector from '../components/Inspector';
import PWAHandler from '../components/PWAHandler';

/*
  The main page composes the editor shell: TopBar, Canvas, and BottomSheet.
  This file intentionally stays as a layout-like page; components handle
  the interactive logic in client components.
*/
export default function Page() {
  return (
    <ErrorBoundary>
      <div className="h-screen flex flex-col">
        <TopBar />
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          <main className="flex-1 overflow-auto">
            <PreviewCanvas />
          </main>
          <aside className="hidden md:block w-96">
            <Inspector />
          </aside>
        </div>
        <BottomSheet />
        <PWAHandler />
      </div>
    </ErrorBoundary>
  );
}
=======
import React from 'react';
import TopBar from '../components/TopBar';
import PreviewCanvas from '../components/PreviewCanvas';
import BottomSheet from '../components/BottomSheet';
import ErrorBoundary from '../components/ErrorBoundary';
import Inspector from '../components/Inspector';
import PWAHandler from '../components/PWAHandler';

/*
  The main page composes the editor shell: TopBar, Canvas, and BottomSheet.
  This file intentionally stays as a layout-like page; components handle
  the interactive logic in client components.
*/
export default function Page() {
  return (
    <ErrorBoundary>
      <div className="h-screen flex flex-col">
        <TopBar />
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          <main className="flex-1 overflow-auto">
            <PreviewCanvas />
          </main>
          <aside className="hidden md:block w-96">
            <Inspector />
          </aside>
        </div>
        <BottomSheet />
        <PWAHandler />
      </div>
    </ErrorBoundary>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
