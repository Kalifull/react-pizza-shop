import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Pagination from '../../components/Pagination';
import SkeletonBlock from '../../components/SkeletonBlock';

import { selectFilterState, selectSortState } from '../../store/slices/filter/selectors';

import routes from '../../routes';

const Home = ({ searchValue }) => {
  const { currentPageNumber, currentCategoryId } = useSelector(selectFilterState);
  const { currentSortProperty } = useSelector(selectSortState);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const paginate = `page=${currentPageNumber}&limit=4&`;
  const searchProperty = searchValue ? `&search=${searchValue}` : '';
  const sortTypeProperty = `&sortBy=${currentSortProperty.replace('-', '')}`;
  const currentCategory = currentCategoryId > 0 ? `category=${currentCategoryId}` : '';
  const orderTypeProperty = currentSortProperty.includes('-') ? '&order=desc' : '&order=asc';

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(
        `${routes.getItems()}${paginate}${currentCategory}${sortTypeProperty}${orderTypeProperty}${searchProperty}`,
      )
      .then(({ data }) => setItems(data))
      .then(() => setIsLoading(false));

    window.scrollTo(0, 0);
  }, [currentCategory, sortTypeProperty, orderTypeProperty, searchProperty, paginate]);

  const pizzaItems = items.map((item) => <PizzaBlock key={item.id} {...item} />);

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
