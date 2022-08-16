import { Suspense } from 'react';
import { observer } from 'mobx-react-lite';
import { HashRouter } from 'react-router-dom';
import AppRouter from './router';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <HashRouter>
          <AppRouter />
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default observer(App);
