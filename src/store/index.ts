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

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { productApi } from '../services';
import { cartReducer, itemReducer, filterReducer } from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['filterInfo', 'itemsInfo', productApi.reducerPath],
};

const rootReducer = combineReducers({
  cartInfo: cartReducer,
  itemsInfo: itemReducer,
  filterInfo: filterReducer,
  [productApi.reducerPath]: productApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type TypeRootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
