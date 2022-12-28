import { IStateItems } from '../../store/reducers/item/types';

const calcPageCount = (items: IStateItems[], itemsPerPage: number) =>
  Math.ceil(items.length / itemsPerPage);

export default calcPageCount;
