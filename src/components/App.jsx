import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';

import routes from '../routes';

const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path={routes.HomePathPage()} element={<HomePage />} />
          <Route path={routes.CartPathPage()} element={<CartPage />} />
          <Route path={routes.NotFoundPage()} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
