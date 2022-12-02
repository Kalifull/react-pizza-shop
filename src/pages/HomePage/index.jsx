import { useState, useEffect } from 'react';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Pagination from '../../components/Pagination';
import SkeletonBlock from '../../components/SkeletonBlock';

import routes from '../../routes';

const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageCount, setCurrentPageCount] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярность по убыванию',
    sortProperty: '-rating',
    id: 0,
  });

  const paginate = `page=${currentPageCount}&limit=4&`;
  const searchProperty = searchValue ? `&search=${searchValue}` : '';
  const currentCategory = categoryId > 0 ? `category=${categoryId}` : '';
  const sortTypeProperty = `&sortBy=${sortType.sortProperty.replace('-', '')}`;
  const orderTypeProperty = sortType.sortProperty.includes('-') ? '&order=desc' : '&order=asc';

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

  const handleChooseCategory = (currentCategoryId) => () => {
    setCategoryId(currentCategoryId);
  };

  const handleChooseSortType = (currentSortTypeList) => {
    setSortType(currentSortTypeList);
  };

  const handleChoosePage = (pageCount) => {
    setCurrentPageCount(pageCount);
  };

  const pizzaItems = items.map((item) => <PizzaBlock key={item.id} {...item} />);

  const skeletons = [...new Array(4)].map((_, index) => <SkeletonBlock key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} handleChoose={handleChooseCategory} />
        <Sort sortType={sortType} handleChoose={handleChooseSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{!isLoading ? pizzaItems : skeletons}</div>
      <Pagination handleChoose={handleChoosePage} />
    </div>
  );
};

export default Home;
