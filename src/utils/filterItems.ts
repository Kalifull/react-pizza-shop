import { CartSliceState, TCartItem } from '../store/slices/cart/types';

export const filterItems = ({ items }: CartSliceState, currentItem: TCartItem) =>
  items.filter(
    ({ id, type, size }) =>
      !(id === currentItem.id && type === currentItem.type && size === currentItem.size)
  );

export default filterItems;
