import cn from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useActions, useAppSelector } from '../../hooks';
import { TCartItem } from '../../store/slices/cart/types';
import { selectCurrentCountOfItems } from '../../store/slices/cart/selectors';

import { IStateItems } from '../../store/slices/item/types';

import routes from '../../routes';
import { calcPercentPrice } from '../../utils';

const PizzaBlock: React.FC<IStateItems> = ({ title, price, currentId, imageUrl, sizes, types }) => {
  const { addOneItem } = useActions();

  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  const [activePrice, setActivePrice] = useState<number>(price);

  const item: TCartItem = {
    title,
    imageUrl,
    id: currentId,
    price: activePrice,
    type: types[activeType].type,
    size: sizes[activeSize].size,
    count: 0,
  };

  const handleAddOneItem = () => {
    addOneItem({ item });
  };

  const currentCount = useAppSelector(selectCurrentCountOfItems(item));

  const handleChooseType = (index: number) => () => {
    setActiveType(index);
  };

  const handleChooseSize = (index: number) => () => {
    setActiveSize(index);
    if (index === 0) {
      setActivePrice(price);
    } else {
      setActivePrice(calcPercentPrice(price, index));
    }
  };

  return (
    <div className="pizza-block">
      <Link to={routes.getProductById(currentId)}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <p className="pizza-block__title">{title}</p>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {sizes.map(({ size, id }, index) => (
            <li
              key={id}
              className={cn({
                active: activeSize === index,
              })}
              onClick={handleChooseSize(index)}
            >
              {size}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__selector">
        <ul>
          {types.map(({ type, id }, index) => (
            <li
              key={id}
              className={cn({
                active: activeType === index,
              })}
              onClick={handleChooseType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <p className="pizza-block__price">от {activePrice} ₽</p>
        <button
          onClick={handleAddOneItem}
          type="button"
          className="button button__outline button__add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{currentCount}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
