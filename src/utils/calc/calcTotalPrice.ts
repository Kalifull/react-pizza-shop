import { ICartSliceState } from '../../store/reducers/cart/types';

export const calcTotalPrice = ({ items }: ICartSliceState) =>
  items.reduce((sum, { price, count }) => sum + price * count, 0);

export default calcTotalPrice;
