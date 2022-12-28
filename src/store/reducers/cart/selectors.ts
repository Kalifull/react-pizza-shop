import { createSelector } from '@reduxjs/toolkit';

import { TypeRootState } from '../..';
import { TCartItem } from './types';

export const selectItemsCart = (state: TypeRootState) => state.cartInfo.items;

export const selectTotalPrice = (state: TypeRootState) => state.cartInfo.totalPrice;

export const selectCountOfItems = createSelector([selectItemsCart], (itemsState) =>
  itemsState.reduce((sum, { count }) => sum + count, 0)
);

export const selectCurrentCountOfItems = (item: TCartItem) =>
  createSelector([selectItemsCart], (itemsState) => {
    const count = itemsState.find(
      ({ id, type, size }) => id === item.id && type === item.type && size === item.size
    )?.count;

    return count ?? 0;
  });
