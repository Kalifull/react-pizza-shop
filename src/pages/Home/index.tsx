import qs from 'qs';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Pagination from '../../components/Pagination';
import ErrorBlock from '../../components/ErrorBlock';
import SkeletonBlock from '../../components/SkeletonBlock';
import NotFoundSearch from '../../components/NotFoundSearch';

import { useAppDispatch } from '../../store';
import fetchItems from '../../services/fetchItems';

import { setFilter } from '../../store/slices/filter/filterSlice';
import { selectFilterState } from '../../store/slices/filter/selectors';

import { ItemsState, TSearchParams } from '../../store/slices/item/types';
import { selectItemsState } from '../../store/slices/item/selectors';

import { calcCurrentItem } from '../../utils';
import { sortTypes, itemsPerPage } from '../../constants';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const isSearch = useRef<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const { items, loadingStatus, error } = useSelector(selectItemsState);
  const {
    categoryId,
    searchValue,
    pageNumber,
    sortType: { sortProperty: sortByType },
  } = useSelector(selectFilterState);

  // Если параметры фильтрафции были изменены и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page: pageNumber,
        category: categoryId,
        sortBy: sortByType,
        search: searchValue,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [pageNumber, categoryId, sortByType, searchValue]);

  // Если был первый рендер, то проверить URL-параметры и сохранить их в хранилище
  useEffect(() => {
    if (search) {
      const params = qs.parse(search.slice(1)) as TSearchParams;
      const sortType = sortTypes.find(({ sortProperty }) => sortProperty === params.sortBy);
      dispatch(
        setFilter({
          ...params,
          sort: sortType || sortTypes[0],
        })
      );
      isSearch.current = true;
    }
  }, []);

  const getItems = () => {
    const paginate = `?page=${pageNumber}`;
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const searchProperty = searchValue ? `&search=${searchValue}` : '';
    const sortTypeProperty = `&sortBy=${sortByType.replace('-', '')}`;
    const orderTypeProperty = sortByType.includes('-') ? '&order=desc' : '&order=asc';

    dispatch(
      fetchItems({
        category,
        page: paginate,
        search: searchProperty,
        sortBy: sortTypeProperty,
        order: orderTypeProperty,
      })
    );
  };

  // Если тукущий рендер - первый, то выполняем запрос данных
  useEffect(() => {
    if (!isSearch.current) {
      getItems();
    }

    window.scrollTo(0, 0);
    isSearch.current = false;
  }, [searchValue, sortByType, categoryId]);

  const currentItems = calcCurrentItem(items, itemsPerPage, pageNumber);
  const skeletons = [...new Array(4)].map((_, index) => <SkeletonBlock key={index} />);
  const pizzaItems = currentItems.map((item: ItemsState) => (
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
