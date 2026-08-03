import './styles.css';
import { domAnimation, LazyMotion } from 'framer-motion';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './lib/ThemeContext';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LazyMotion>,
  );
}
