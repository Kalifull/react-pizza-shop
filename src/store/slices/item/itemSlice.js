import { createSlice } from '@reduxjs/toolkit';

import fetchItems from '../../../services/fetchItems';

const initialState = {
  items: [],
  loadingStatus: false,
  error: null,
};

export const itemSlice = createSlice({
  name: 'itemsInfo',
  initialState,
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
      .addCase(fetchItems.rejected, (state, action) => {
        state.items = [];
        state.loadingStatus = false;
        state.error = action.error;
      });
  },
});

export default itemSlice.reducer;
