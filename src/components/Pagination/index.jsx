import { useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { setPageCount } from '../../store/slices/filter/filterSlice';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useDispatch();

  const handleChoosePage = (pageNumber) => {
    dispatch(setPageCount({ pageNumber }));
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
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
