import { CartSliceState, TCartItem } from '../store/slices/cart/types';

export const findCurrentItem = ({ items }: CartSliceState, item: TCartItem) =>
  items.find(({ id, type, size }) => id === item.id && type === item.type && size === item.size);

export default findCurrentItem;
