import { ICartSliceState, TCartItem } from '../../store/reducers/cart/types';

export const filterItems = ({ items }: ICartSliceState, currentItem: TCartItem) =>
  items.filter(
    ({ id, type, size }) =>
      !(id === currentItem.id && type === currentItem.type && size === currentItem.size)
  );

export default filterItems;
