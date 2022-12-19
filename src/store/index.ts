import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cart/cartSlice';
import itemReducer from './slices/item/itemSlice';
import filterReducer from './slices/filter/filterSlice';

const store = configureStore({
  reducer: {
    cartInfo: cartReducer,
    itemsInfo: itemReducer,
    filterInfo: filterReducer,
  },
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
