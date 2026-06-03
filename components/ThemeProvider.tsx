<<<<<<< HEAD
"use client";
import React, { createContext, useEffect, useState } from 'react';

/*
  ThemeProvider handles light/dark mode using a class on document.documentElement.
  Why: using class-based dark mode integrates cleanly with Tailwind's `dark` strategy
  and allows persisting the user's preference to localStorage via sharedPrefs.
*/
type Theme = 'light' | 'dark' | 'system';

export const ThemeContext = createContext({
  theme: 'light' as Theme,
  setTheme: (t: Theme) => {},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'light' || saved === 'dark' || saved === 'system') setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const applied = theme === 'dark' ? 'dark' : '';
    if (applied) root.classList.add('dark'); else root.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
=======
"use client";
import React, { createContext, useEffect, useState } from 'react';

/*
  ThemeProvider handles light/dark mode using a class on document.documentElement.
  Why: using class-based dark mode integrates cleanly with Tailwind's `dark` strategy
  and allows persisting the user's preference to localStorage via sharedPrefs.
*/
type Theme = 'light' | 'dark' | 'system';

export const ThemeContext = createContext({
  theme: 'light' as Theme,
  setTheme: (t: Theme) => {},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'light' || saved === 'dark' || saved === 'system') setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const applied = theme === 'dark' ? 'dark' : '';
    if (applied) root.classList.add('dark'); else root.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
>>>>>>> e0a9267de792070e0a727aa26d900288ed444b96
