import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { useDispatch } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import cartReducer from './slices/cart/cartSlice';
import itemReducer from './slices/item/itemSlice';
import filterReducer from './slices/filter/filterSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['filterInfo'],
};

const rootReducer = combineReducers({
  cartInfo: cartReducer,
  itemsInfo: itemReducer,
  filterInfo: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export default store;
