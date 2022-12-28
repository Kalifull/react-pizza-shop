import { IStateItems } from '../../store/reducers/item/types';

const calcCurrentItem = (items: IStateItems[], itemsPerPage: number, pageNumber: number) => {
  const endOffset = pageNumber * itemsPerPage;
  const itemOffset = endOffset - itemsPerPage;
  return items.slice(itemOffset, endOffset);
};

export default calcCurrentItem;
