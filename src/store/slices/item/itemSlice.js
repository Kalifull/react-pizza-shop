import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const itemSlice = createSlice({
  name: 'itemsInfo',
  initialState,
  reducers: {
    setItems(state, { payload: { items } }) {
      state.items = items;
    },
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
