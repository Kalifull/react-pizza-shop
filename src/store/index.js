import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './slices/filterSlice';
import sortReducer from './slices/sortSlice';

export default configureStore({
  reducer: {
    filterInfo: filterReducer,
    sortInfo: sortReducer,
  },
});
