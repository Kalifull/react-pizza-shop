type SearchValueProps = {
  searchValue: string;
};

const NotFoundSearch: React.FC<SearchValueProps> = ({ searchValue }) => (
  <div className="container">
    {searchValue && (
      <div className="content__search-info">
        <h2>Результаты поиска по запросу «{searchValue}»</h2>
        <p>По Вашему запросу «{searchValue}» ничего не найдено</p>
        <p>Пожалуйста, попробуйте изменить параметры поиска</p>
      </div>
    )}
  </div>
);

export default NotFoundSearch;
