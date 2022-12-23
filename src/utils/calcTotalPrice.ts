import { CartSliceState } from '../store/slices/cart/types';

export const calcTotalPrice = ({ items }: CartSliceState) =>
  items.reduce((sum, { price, count }) => sum + price * count, 0);

export default calcTotalPrice;
