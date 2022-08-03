import { configure } from 'mobx';
import ReactDOM from 'react-dom/client';
import App from './App';

configure({ enforceActions: 'observed' });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
