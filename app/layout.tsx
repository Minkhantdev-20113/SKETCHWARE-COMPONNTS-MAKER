<<<<<<< HEAD
import '../styles/globals.css';
import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import UIProvider from '../store/uiContext';

/*
  App layout: wraps the entire application.
  Why: central place to provide theme, global context, and layout shell.
  We keep this file minimal; platform-specific logic lives in providers.
*/
export const metadata = {
  title: 'SketchWebGen',
  description: 'Mobile-first Android UI code generator',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/icon.svg' },
    { rel: 'apple-touch-icon', url: '/icon.svg' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ThemeProvider is a client component that manages light/dark mode */}
        <ThemeProvider>
          {/* UIProvider holds simulator/device and editor model state */}
          <UIProvider>
            <div className="min-h-screen flex flex-col">{children}</div>
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
=======
import '../styles/globals.css';
import React from 'react';
import ThemeProvider from '../components/ThemeProvider';
import UIProvider from '../store/uiContext';

/*
  App layout: wraps the entire application.
  Why: central place to provide theme, global context, and layout shell.
  We keep this file minimal; platform-specific logic lives in providers.
*/
export const metadata = {
  title: 'SketchWebGen',
  description: 'Mobile-first Android UI code generator',
  themeColor: '#0f172a',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/icon.svg' },
    { rel: 'apple-touch-icon', url: '/icon.svg' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* ThemeProvider is a client component that manages light/dark mode */}
        <ThemeProvider>
          {/* UIProvider holds simulator/device and editor model state */}
          <UIProvider>
            <div className="min-h-screen flex flex-col">{children}</div>
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
