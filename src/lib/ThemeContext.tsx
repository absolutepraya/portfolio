import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

function getInitialTheme(): string {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return 'light';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(getInitialTheme);

  const applyTheme = useCallback((t: string) => {
    const root = document.documentElement;
    root.classList.toggle('dark', t === 'dark');
    root.style.colorScheme = t;
    const meta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    );
    if (meta) meta.content = t === 'dark' ? '#03020F' : '#f5f5f7';
  }, []);

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.classList.add('theme-transitioning');
    localStorage.setItem('theme', next);
    applyTheme(next);
    setTheme(next);
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
  }, [applyTheme, theme]);

  useEffect(() => {
    applyTheme(theme);
  }, [applyTheme, theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const handler = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('theme')) return;
      const next = e.matches ? 'light' : 'dark';
      setTheme(next);
      applyTheme(next);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [applyTheme]);

  const value = useMemo(
    () => ({ theme, toggleTheme, isDark: theme === 'dark' }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
