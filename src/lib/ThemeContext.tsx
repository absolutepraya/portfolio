import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { flushSync } from 'react-dom';

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

interface ThemeContextType {
  theme: string;
  toggleTheme: (e?: { clientX: number; clientY: number }) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

function getInitialTheme(): string {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
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

  const toggleTheme = useCallback(
    (e?: { clientX: number; clientY: number }) => {
      const next = theme === 'dark' ? 'light' : 'dark';
      const flip = () => {
        localStorage.setItem('theme', next);
        applyTheme(next);
        setTheme(next);
      };

      const doc = document as ViewTransitionDocument;
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      // Fallback: simple crossfade when View Transitions are unavailable or
      // the visitor prefers reduced motion.
      if (!doc.startViewTransition || reduceMotion) {
        document.documentElement.classList.add('theme-transitioning');
        flip();
        setTimeout(() => {
          document.documentElement.classList.remove('theme-transitioning');
        }, 300);
        return;
      }

      // Circular reveal expanding from the toggle button.
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? 0;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      const transition = doc.startViewTransition(() => {
        flushSync(flip);
      });
      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 450,
              easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
              pseudoElement: '::view-transition-new(root)',
            },
          );
        })
        .catch(() => {});
    },
    [theme, applyTheme],
  );

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

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDark: theme === 'dark' }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
