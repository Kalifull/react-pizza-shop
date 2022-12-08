import qs from 'qs';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Pagination from '../../components/Pagination';
import SkeletonBlock from '../../components/SkeletonBlock';

import { setItems } from '../../store/slices/item/itemSlice';
import { setFilter } from '../../store/slices/filter/filterSlice';

import { selectItemsState } from '../../store/slices/item/selectors';
import { selectFilterState, selectSortState } from '../../store/slices/filter/selectors';

import { sortTypes } from '../../constants';
import routes from '../../routes';

const Home = ({ searchValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  const { items } = useSelector(selectItemsState);
  const { sortProperty } = useSelector(selectSortState);
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

  const fetchPizzas = async () => {
    setIsLoading(true);

    const paginate = `page=${pageNumber}&limit=4&`;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const searchProperty = searchValue ? `&search=${searchValue}` : '';
    const sortTypeProperty = `&sortBy=${sortProperty.replace('-', '')}`;
    const orderTypeProperty = sortProperty.includes('-') ? '&order=desc' : '&order=asc';

    try {
      const { data } = await axios.get(
        `${routes.getItems()}${paginate}${category}${sortTypeProperty}${orderTypeProperty}${searchProperty}`,
      );
      dispatch(setItems({ items: data }));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    window.scrollTo(0, 0);
  };

  // Если тукущий рендер - первый, то выполняем запрос данных
  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [searchValue, pageNumber, sortProperty, categoryId]);

  const pizzaItems = items.map((item, index) => <PizzaBlock key={index} {...item} />);

  const skeletons = [...new Array(4)].map((_, index) => <SkeletonBlock key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{!isLoading ? pizzaItems : skeletons}</div>
      <Pagination />
    </div>
  );
};

export default Home;
