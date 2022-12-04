import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Pagination from '../../components/Pagination';
import SkeletonBlock from '../../components/SkeletonBlock';

import { selectCategoryState, selectSortState } from '../../store/slices/selectors';

import routes from '../../routes';

const Home = ({ searchValue }) => {
  const { currentCategoryId } = useSelector(selectCategoryState);
  const { currentSortProperty } = useSelector(selectSortState);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageCount, setCurrentPageCount] = useState(1);

  const paginate = `page=${currentPageCount}&limit=4&`;
  const searchProperty = searchValue ? `&search=${searchValue}` : '';
  const currentCategory = currentCategoryId > 0 ? `category=${currentCategoryId}` : '';
  const sortTypeProperty = `&sortBy=${currentSortProperty.replace('-', '')}`;
  const orderTypeProperty = currentSortProperty.includes('-') ? '&order=desc' : '&order=asc';

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `${routes.getItems()}${paginate}${currentCategory}${sortTypeProperty}${orderTypeProperty}${searchProperty}`,
    )
      .then((response) => response.json())
      .then((response) => setItems(response))
      .then(() => setIsLoading(false));

    window.scrollTo(0, 0);
  }, [currentCategory, sortTypeProperty, orderTypeProperty, searchProperty, paginate]);

  const handleChoosePage = (pageCount) => {
    setCurrentPageCount(pageCount);
  };

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
      <Pagination handleChoose={handleChoosePage} />
    </div>
  );
};

export default Home;
