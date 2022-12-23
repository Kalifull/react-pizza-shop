import { ItemsState } from '../store/slices/item/types';

const calcCurrentItem = (items: ItemsState[], itemsPerPage: number, pageNumber: number) => {
  const endOffset = pageNumber * itemsPerPage;
  const itemOffset = endOffset - itemsPerPage;
  return items.slice(itemOffset, endOffset);
};

export default calcCurrentItem;
