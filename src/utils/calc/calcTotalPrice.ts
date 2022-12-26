import { ICartSliceState } from '../../store/slices/cart/types';

export const calcTotalPrice = ({ items }: ICartSliceState) =>
  items.reduce((sum, { price, count }) => sum + price * count, 0);

export default calcTotalPrice;
