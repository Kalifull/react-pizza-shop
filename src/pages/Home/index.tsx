import qs from 'qs';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Sort from '../../components/Sort';
import Skeleton from '../../components/Skeleton';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Pagination from '../../components/Pagination';
import ErrorBlock from '../../components/ErrorBlock';
import NotFoundSearch from '../../components/NotFoundSearch';

import { useActions, useAppSelector } from '../../hooks';
import {
  selectCategoryId,
  selectSearchValue,
  selectPageNumber,
  selectSortByType,
} from '../../store/reducers/filter/selectors';

import { IStateItems, TSearchParams } from '../../store/reducers/item/types';
import { selectItemsState } from '../../store/reducers/item/selectors';

import { calcCurrentItem } from '../../utils';
import { sortTypes, itemsPerPage } from '../../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { setFilter, itemsApi } = useActions();

  const { items, loadingStatus, error } = useAppSelector(selectItemsState);

  const categoryId = useAppSelector(selectCategoryId);
  const searchValue = useAppSelector(selectSearchValue);
  const pageNumber = useAppSelector(selectPageNumber);
  const sortByType = useAppSelector(selectSortByType);

  useEffect(() => {
    const queryString = qs.stringify({
      page: pageNumber,
      category: categoryId,
      sortBy: sortByType,
      search: searchValue,
    });

    navigate(`?${queryString}`);
  }, [pageNumber, categoryId, sortByType, searchValue]);

  const params = qs.parse(search.slice(1)) as TSearchParams;

  useEffect(() => {
    const sortType = sortTypes.find(({ sortProperty }) => sortProperty === params.sortBy);

    setFilter({
      ...params,
      sort: sortType || sortTypes[0],
    });
  }, [search]);

  useEffect(() => {
    if (search) {
      const getItems = () => {
        const paginate = `?page=${params.page}`;
        const category = +params.category > 0 ? `&category=${params.category}` : '';
        const searchProperty = params.search ? `&search=${params.search}` : '';
        const sortTypeProperty = `&sortBy=${params.sortBy.replace('-', '')}`;
        const orderTypeProperty = params.sortBy.includes('-') ? '&order=desc' : '&order=asc';

        itemsApi({
          category,
          page: paginate,
          search: searchProperty,
          sortBy: sortTypeProperty,
          order: orderTypeProperty,
        });
      };

      getItems();
    }

    window.scrollTo(0, 0);
  }, [params.category, params.search, params.sortBy]);

  const currentItems = calcCurrentItem(items, itemsPerPage, pageNumber);
  const skeletons = [...new Array(itemsPerPage)].map((_, index) => <Skeleton key={index} />);
  const pizzaItems = currentItems.map((item: IStateItems) => (
    <PizzaBlock key={item.currentId} {...item} />
  ));

  if (!error && !items.length && !loadingStatus) {
    return <NotFoundSearch searchValue={searchValue} />;
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      {!error ? (
        <>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">{loadingStatus ? skeletons : pizzaItems}</div>
          <Pagination />
        </>
      ) : (
        <ErrorBlock />
      )}
    </div>
  );
};

export default Home;
