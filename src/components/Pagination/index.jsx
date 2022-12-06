import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';

import { setPageCount } from '../../store/slices/filter/filterSlice';
import { selectFilterState } from '../../store/slices/filter/selectors';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector(selectFilterState);

  const handleChoosePage = (pageId) => {
    dispatch(setPageCount({ page: pageId + 1 }));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={({ selected }) => handleChoosePage(selected)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={pageNumber - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
