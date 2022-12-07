import { createSlice } from '@reduxjs/toolkit';

import { findCurrentItem, calcTotalPrice, filterItems } from '../../../utils';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cartInfo',
  initialState,
  reducers: {
    addItem(state, { payload: { item } }) {
      const currentItem = findCurrentItem(state, item);
      if (!currentItem) {
        state.items.push({ ...item, count: 1 });
      } else {
        currentItem.count += 1;
      }
      state.totalPrice = calcTotalPrice(state);
    },
    deleteItem(state, { payload: { item } }) {
      const currentItem = findCurrentItem(state, item);
      if (currentItem.count > 1) {
        currentItem.count -= 1;
        state.totalPrice -= currentItem.price;
      } else {
        currentItem.count = 0;
        state.totalPrice = calcTotalPrice(state);
        state.items = filterItems(state, currentItem);
      }
    },
    removeItems(state, { payload: { item } }) {
      const currentItem = findCurrentItem(state, item);
      currentItem.count = 0;
      state.totalPrice = calcTotalPrice(state);
      state.items = filterItems(state, currentItem);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem, deleteItem, removeItems, clearItems,
} = cartSlice.actions;

export default cartSlice.reducer;
