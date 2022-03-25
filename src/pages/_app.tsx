import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import '@Styles/App.css';
import { AppStoreProvider } from '@Lib/context/app-store.context';
import Spinner from '@Components/generic/Spinner';

const LazyHome = lazy(() => import('@Components/Home'));

const App: FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <AppStoreProvider>
        <div className="App">
          <LazyHome />
        </div>
      </AppStoreProvider>
    </Suspense>
  );
};

export default App;
