import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

import routes from '../routes';

const LazyProduct = lazy(() => import('../pages/Product'));

const App: React.FC = () => (
  <Routes>
    <Route path="" element={<Layout />}>
      <Route path={routes.getHomePathPage()} element={<Home />} />
      <Route path={routes.getCartPathPage()} element={<Cart />} />
      <Route
        path={routes.getProductPathPage()}
        element={
          <Suspense>
            <LazyProduct />
          </Suspense>
        }
      />
      <Route path={routes.getNotFoundPathPage()} element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
