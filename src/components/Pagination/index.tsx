import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { selectItemsState } from '../../store/slices/item/selectors';

import { setPageCount } from '../../store/slices/filter/filterSlice';
import { selectFilterState } from '../../store/slices/filter/selectors';

import { calcPageCount } from '../../utils';
import { itemsPerPage } from '../../constants';

import styles from './Pagination.module.scss';

const Pagination: React.FC = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(selectItemsState);
  const { pageNumber } = useSelector(selectFilterState);

  const pageCount = calcPageCount(items, itemsPerPage);

  const handlePageChange = (pageId: number) => {
    dispatch(setPageCount({ page: pageId + 1 }));
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
