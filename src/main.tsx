import { createRoot } from 'react-dom/client';
import { configure } from 'mobx';
import { configurePersistable } from 'mobx-persist-store';
import App from './App';
import '@/assets/styles/index.less';

// config mobx
configure({ enforceActions: 'observed' });
configurePersistable(
  {
    storage: window.localStorage,
    expireIn: 86400000,
    removeOnExpiration: true,
    stringify: true,
    debugMode: false
  },
  {
    delay: 200,
    fireImmediately: false
  }
);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(<App />);
