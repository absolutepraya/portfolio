import './styles.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './lib/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
