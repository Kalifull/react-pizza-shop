import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filter/filterSlice';
import itemReducer from './slices/item/itemSlice';
import cartReducer from './slices/cart/cartSlice';

export default configureStore({
  reducer: {
    filterInfo: filterReducer,
    itemsInfo: itemReducer,
    cartInfo: cartReducer,
  },
});
