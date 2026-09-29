import './styles.css';
import { bind } from 'cuelume';
import { domMax, LazyMotion } from 'framer-motion';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './lib/ThemeContext';

const root = document.getElementById('root');
if (root) {
  bind();
  ReactDOM.createRoot(root).render(
    <LazyMotion features={domMax}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LazyMotion>,
  );
}
