import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import '@Styles/App.css';
import { AppStoreProvider } from '@Lib/context/app-store.context';
import FallbackLoading from '@Components/generic/FallbackLoading';

const LazyHome = lazy(() => import('@Components/Home'));

const App: FC = () => {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <AppStoreProvider>
        <div className="App">
          <LazyHome />
        </div>
      </AppStoreProvider>
    </Suspense>
  );
};

export default App;
