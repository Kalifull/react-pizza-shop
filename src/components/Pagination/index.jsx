import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ handleChoose }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    previousLabel="<"
    nextLabel=">"
    onPageChange={({ selected }) => handleChoose(selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    renderOnZeroPageCount={null}
  />
);

export default Pagination;
