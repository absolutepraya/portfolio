import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext();

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  const applyTheme = useCallback((t) => {
    const root = document.documentElement;
    root.classList.toggle('dark', t === 'dark');
    root.style.colorScheme = t;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = t === 'dark' ? '#03020F' : '#f5f5f7';
  }, []);

  const toggleTheme = useCallback(() => {
    document.documentElement.classList.add('theme-transitioning');
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
      return next;
    });
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
  }, [applyTheme]);

  useEffect(() => {
    applyTheme(theme);
  }, [applyTheme, theme]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const handler = (e) => {
      if (localStorage.getItem('theme')) return;
      const next = e.matches ? 'light' : 'dark';
      setTheme(next);
      applyTheme(next);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [applyTheme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDark: theme === 'dark' }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
