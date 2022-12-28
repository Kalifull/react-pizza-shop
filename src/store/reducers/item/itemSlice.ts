import { createSlice } from '@reduxjs/toolkit';

import { ISliceItemState } from './types';
import { itemsApi } from '../../../services';

const initialState: ISliceItemState = {
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
      .addCase(itemsApi.pending, (state) => {
        state.items = [];
        state.loadingStatus = true;
        state.error = null;
      })
      .addCase(itemsApi.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loadingStatus = false;
        state.error = null;
      })
      .addCase(itemsApi.rejected, (state, { payload }) => {
        state.items = [];
        state.loadingStatus = false;
        state.error = payload;
      });
  },
});

export default itemSlice.reducer;
