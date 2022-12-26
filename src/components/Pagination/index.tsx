import ReactPaginate from 'react-paginate';

import { useActions, useAppSelector } from '../../hooks';
import { selectItemsState } from '../../store/slices/item/selectors';
import { selectPageNumber } from '../../store/slices/filter/selectors';

import { calcPageCount } from '../../utils';
import { itemsPerPage } from '../../constants';

import styles from './Pagination.module.scss';

const Pagination: React.FC = () => {
  const { setPageCount } = useActions();

  const { items } = useAppSelector(selectItemsState);
  const pageNumber = useAppSelector(selectPageNumber);

  const pageCount = calcPageCount(items, itemsPerPage);

  const handlePageChange = (pageId: number) => {
    setPageCount({ page: pageId + 1 });
  };

  return (
    <ReactPaginate
      className={styles.root}
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
      onPageChange={({ selected }) => handlePageChange(selected)}
      pageRangeDisplayed={itemsPerPage}
      pageCount={pageCount}
      forcePage={pageNumber - 1}
      renderOnZeroPageCount={() => null}
    />
  );
};

export default Pagination;
