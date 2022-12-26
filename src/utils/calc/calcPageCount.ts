import { IStateItems } from '../../store/slices/item/types';

const calcPageCount = (items: IStateItems[], itemsPerPage: number) =>
  Math.ceil(items.length / itemsPerPage);

export default calcPageCount;
