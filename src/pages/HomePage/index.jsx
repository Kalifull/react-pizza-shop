import { useState, useEffect } from 'react';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import SkeletonBlock from '../../components/SkeletonBlock';

import routes from '../../routes';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'популярность по убыванию',
    sortProperty: '-rating',
    id: 0,
  });

  const currentCategory = categoryId > 0 ? `category=${categoryId}` : '';
  const sortTypeProperty = sortType.sortProperty.replace('-', '');
  const orderTypeProperty = sortType.sortProperty.includes('-') ? 'desc' : 'asc';

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `${routes.getItems()}${currentCategory}&sortBy=${sortTypeProperty}&order=${orderTypeProperty}`,
    )
      .then((response) => response.json())
      .then((response) => setItems(response))
      .then(() => setIsLoading(false));

    window.scrollTo(0, 0);
  }, [currentCategory, sortTypeProperty, orderTypeProperty]);

  const handleChooseCategory = (currentCategoryId) => () => {
    setCategoryId(currentCategoryId);
  };

  const handleChooseSortType = (currentSortTypeList) => {
    setSortType(currentSortTypeList);
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} handleChoose={handleChooseCategory} />
        <Sort sortType={sortType} handleChoose={handleChooseSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <SkeletonBlock key={index} />)
          : items.map(({
            id, title, price, imageUrl, sizes, types,
          }) => (
            <PizzaBlock
              key={id}
              title={title}
              price={price}
              image={imageUrl}
              sizes={sizes}
              types={types}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
