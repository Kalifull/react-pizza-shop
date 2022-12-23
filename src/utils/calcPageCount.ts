import { ItemsState } from '../store/slices/item/types';

const calcPageCount = (items: ItemsState[], itemsPerPage: number) =>
  Math.ceil(items.length / itemsPerPage);

export default calcPageCount;
