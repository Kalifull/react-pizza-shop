import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filter/filterSlice';
import cartReducer from './slices/cart/cartSlice';

export default configureStore({
  reducer: {
    filterInfo: filterReducer,
    cartInfo: cartReducer,
  },
});
