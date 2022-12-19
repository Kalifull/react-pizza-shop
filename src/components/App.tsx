import { Routes, Route } from 'react-router-dom';

import Layout from '../layouts';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';
import ProductInfo from '../pages/ProductInfo';

import routes from '../routes';

const App: React.FC = () => (
  <Routes>
    <Route path="" element={<Layout />}>
      <Route path={routes.HomePathPage()} element={<Home />} />
      <Route path={routes.CartPathPage()} element={<Cart />} />
      <Route path={routes.ProductInfoPage()} element={<ProductInfo />} />
      <Route path={routes.NotFoundPage()} element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
