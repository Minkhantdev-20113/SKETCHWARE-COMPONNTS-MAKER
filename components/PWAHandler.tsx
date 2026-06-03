<<<<<<< HEAD
'use client';

import React, { useEffect, useState } from 'react';

export default function PWAHandler() {
  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [isInstallPromptVisible, setInstallPromptVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((error) => {
          console.error('Service worker registration failed:', error);
        });
      });
    }

    const installHandler = (event: any) => {
      event.preventDefault();
      setPromptEvent(event);
      setInstallPromptVisible(true);
    };

    window.addEventListener('beforeinstallprompt', installHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', installHandler);
    };
  }, []);

  const handleInstall = async () => {
    if (!promptEvent) {
      return;
    }

    promptEvent.prompt();
    const choiceResult = await promptEvent.userChoice;

    if (choiceResult?.outcome === 'accepted') {
      setInstallPromptVisible(false);
    }

    setPromptEvent(null);
  };

  if (!isInstallPromptVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900/95">
      <p className="text-sm text-slate-700 dark:text-slate-200">
        Install SketchWebGen for faster loading and offline access.
      </p>
      <button
        onClick={handleInstall}
        className="mt-2 inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
      >
        Install App
      </button>
    </div>
  );
}
=======
'use client';

import React, { useEffect, useState } from 'react';

export default function PWAHandler() {
  const [promptEvent, setPromptEvent] = useState<any>(null);
  const [isInstallPromptVisible, setInstallPromptVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((error) => {
          console.error('Service worker registration failed:', error);
        });
      });
    }

    const installHandler = (event: any) => {
      event.preventDefault();
      setPromptEvent(event);
      setInstallPromptVisible(true);
    };

    window.addEventListener('beforeinstallprompt', installHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', installHandler);
    };
  }, []);

  const handleInstall = async () => {
    if (!promptEvent) {
      return;
    }

    promptEvent.prompt();
    const choiceResult = await promptEvent.userChoice;

    if (choiceResult?.outcome === 'accepted') {
      setInstallPromptVisible(false);
    }

    setPromptEvent(null);
  };

  if (!isInstallPromptVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900/95">
      <p className="text-sm text-slate-700 dark:text-slate-200">
        Install SketchWebGen for faster loading and offline access.
      </p>
      <button
        onClick={handleInstall}
        className="mt-2 inline-flex rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
      >
        Install App
      </button>
    </div>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
