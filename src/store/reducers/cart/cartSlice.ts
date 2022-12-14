import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TPayloadItem, ICartSliceState } from './types';
import { findCurrentItem, calcTotalPrice, filterItems } from '../../../utils';

const initialState: ICartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cartInfo',
  initialState,
  reducers: {
    addOneItem(state, { payload: { item } }: PayloadAction<TPayloadItem>) {
      const currentItem = findCurrentItem(state, item);
      if (!currentItem) {
        state.items.unshift({ ...item, count: 1 });
        state.totalPrice = calcTotalPrice(state);
      } else {
        currentItem.count += 1;
        state.totalPrice += currentItem.price;
      }
    },
    deleteOneItem(state, { payload: { item } }: PayloadAction<TPayloadItem>) {
      const currentItem = findCurrentItem(state, item)!;
      if (currentItem.count > 1) {
        currentItem.count -= 1;
        state.totalPrice -= currentItem.price;
      } else {
        state.totalPrice -= currentItem.price;
        state.items = filterItems(state, currentItem);
      }
    },
    removeItems(state, { payload: { item } }: PayloadAction<TPayloadItem>) {
      const currentItem = findCurrentItem(state, item)!;
      state.totalPrice -= currentItem.price * currentItem.count;
      state.items = filterItems(state, currentItem);
    },
    clearAllItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
