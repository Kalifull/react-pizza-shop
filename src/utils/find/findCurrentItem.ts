import { ICartSliceState, TCartItem } from '../../store/slices/cart/types';

export const findCurrentItem = ({ items }: ICartSliceState, item: TCartItem) =>
  items.find(({ id, type, size }) => id === item.id && type === item.type && size === item.size);

export default findCurrentItem;
