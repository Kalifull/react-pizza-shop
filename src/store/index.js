import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cart/cartSlice';
import itemReducer from './slices/item/itemSlice';
import filterReducer from './slices/filter/filterSlice';

export default configureStore({
  reducer: {
    cartInfo: cartReducer,
    itemsInfo: itemReducer,
    filterInfo: filterReducer,
  },
});
