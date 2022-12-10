import qs from 'qs';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Pagination from '../../components/Pagination';
import ErrorBlock from '../../components/ErrorBlock';
import SkeletonBlock from '../../components/SkeletonBlock';
import NotFoundSearch from '../../components/NotFoundSearch';

import { setFilter } from '../../store/slices/filter/filterSlice';

import { selectItemsState } from '../../store/slices/item/selectors';
import { selectFilterState, selectSortState } from '../../store/slices/filter/selectors';

import { sortTypes } from '../../constants';
import fetchItems from '../../services/fetchItems';

const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { sortProperty } = useSelector(selectSortState);
  const { items, loadingStatus, error } = useSelector(selectItemsState);
  const { pageNumber, categoryId } = useSelector(selectFilterState);

  // Если параметры фильтрафции были изменены и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page: pageNumber,
        category: categoryId,
        sortBy: sortProperty,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [pageNumber, categoryId, sortProperty]);

  // Если был первый рендер, то проверить URL-параметры и сохранить их в хранилище
  useEffect(() => {
    if (search) {
      const params = qs.parse(search.slice(1));
      const sortType = sortTypes.find((type) => type.sortProperty === params.sortBy);
      dispatch(setFilter({ ...params, sortType }));
      isSearch.current = true;
    }
  }, []);

  const getData = () => {
    const paginate = `page=${pageNumber}&limit=4&`;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const searchProperty = searchValue ? `&search=${searchValue}` : '';
    const sortTypeProperty = `&sortBy=${sortProperty.replace('-', '')}`;
    const orderTypeProperty = sortProperty.includes('-') ? '&order=desc' : '&order=asc';

    dispatch(
      fetchItems({
        category,
        page: paginate,
        search: searchProperty,
        sort: sortTypeProperty,
        order: orderTypeProperty,
      }),
    );

    window.scrollTo(0, 0);
  };

  // Если тукущий рендер - первый, то выполняем запрос данных
  useEffect(() => {
    if (!isSearch.current) {
      getData();
    }

    isSearch.current = false;
  }, [searchValue, pageNumber, sortProperty, categoryId]);

  const pizzaItems = items.map((item, index) => <PizzaBlock key={index} {...item} />);
  const skeletons = [...new Array(4)].map((_, index) => <SkeletonBlock key={index} />);

  const mapping = {
    loading: () => skeletons,
    idle: () => pizzaItems,
  };

  const Component = mapping[loadingStatus];

  if (loadingStatus === 'idle' && !items.length) {
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
          <div className="content__items">
            <Component />
          </div>
          <Pagination />
        </>
      ) : (
        <ErrorBlock />
      )}
    </div>
  );
};

export default Home;
