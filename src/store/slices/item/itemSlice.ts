import { createSlice } from '@reduxjs/toolkit';

import { ItemSliceState } from './types';
import fetchItems from '../../../services/fetchItems';

const initialState: ItemSliceState = {
  items: [],
  loadingStatus: false,
  error: null,
};

export const itemSlice = createSlice({
  name: 'itemsInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.items = [];
        state.loadingStatus = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loadingStatus = false;
        state.error = null;
      })
      .addCase(fetchItems.rejected, (state, { payload }) => {
        state.items = [];
        state.loadingStatus = false;
        state.error = payload;
      });
  },
});

export default itemSlice.reducer;
