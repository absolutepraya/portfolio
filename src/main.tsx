import './styles.css';
import { domMax, LazyMotion } from 'framer-motion';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './lib/ThemeContext';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <LazyMotion features={domMax}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LazyMotion>,
  );
}
