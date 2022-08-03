import { Suspense, useState } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './router';

function App() {
  const [s, set] = useState(false);
  return (
    <div className="App">
      <div>{s}</div>
      <Suspense fallback={<div>loading...</div>}>
        <HashRouter>
          <AppRouter />
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default observer(App);
