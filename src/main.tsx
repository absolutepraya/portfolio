import './styles.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './lib/ThemeContext';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}
