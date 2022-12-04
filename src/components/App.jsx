import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './Header';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import NotFoundPage from '../pages/NotFoundPage';

import routes from '../routes';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path={routes.HomePathPage()} element={<HomePage searchValue={searchValue} />} />
          <Route path={routes.CartPathPage()} element={<CartPage />} />
          <Route path={routes.NotFoundPage()} element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
