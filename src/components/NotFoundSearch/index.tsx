import Pagination from '../Pagination';

type SearchValueProps = {
  searchValue: string;
};

const NotFoundSearch: React.FC<SearchValueProps> = ({ searchValue }) => (
  <div className="container">
    <div className="content__search-info">
      {searchValue ? (
        <>
          <h2>Результаты поиска по запросу «{searchValue}»</h2>
          <p>По Вашему запросу «{searchValue}» ничего не найдено</p>
        </>
      ) : (
        <>
          <h2>Результаты поиска по странице</h2>
          <p>К сожалению, на текущей странице товары не найдены</p>
        </>
      )}
      <p>Пожалуйста, попробуйте изменить параметры поиска</p>
    </div>
    <Pagination />
  </div>
);

export default NotFoundSearch;