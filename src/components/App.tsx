import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

import routes from '../routes';

const App: React.FC = () => (
  <Routes>
    <Route path="" element={<Layout />}>
      <Route path={routes.getHomePathPage()} element={<Home />} />
      <Route path={routes.getCartPathPage()} element={<Cart />} />
      <Route path={routes.getProductPathPage()} element={<Product />} />
      <Route path={routes.getNotFoundPathPage()} element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
