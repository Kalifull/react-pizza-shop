import { useState, useEffect } from 'react';

import Sort from '../../components/Sort';
import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import SkeletonBlock from '../../components/SkeletonBlock';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6380e160786e112fe1bce82e.mockapi.io/items')
      .then((response) => response.json())
      .then((response) => setItems(response))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(12)].map((_, index) => (
            <div key={index}>
              <SkeletonBlock />
            </div>
          ))
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
