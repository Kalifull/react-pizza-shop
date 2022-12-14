import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addOneItem } from '../../store/slices/cart/cartSlice';
import { selectCurrentCountOfItems } from '../../store/slices/cart/selectors';

import { calcPercentPrice } from '../../utils';

import routes from '../../routes';

const PizzaBlock = ({ title, price, currentId, imageUrl, sizes, types }) => {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [activePrice, setActivePrice] = useState(price);

  const handleChooseType = (index) => () => {
    setActiveType(index);
  };

  const handleChooseSize = (index) => () => {
    setActiveSize(index);
    if (index === 0) {
      setActivePrice(price);
    } else {
      setActivePrice(calcPercentPrice(price, index));
    }
  };

  const item = {
    title,
    imageUrl,
    id: currentId,
    price: activePrice,
    type: types[activeType].type,
    size: sizes[activeSize].size,
  };

  const handleAddOneItem = () => {
    dispatch(addOneItem({ item }));
  };

  const currentCount = useSelector(selectCurrentCountOfItems(item));

  return (
    <div className="pizza-block">
      <Link to={routes.getProductInfoById(currentId)}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <p className="pizza-block__title">{title}</p>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {sizes.map(({ size, id }, index) => (
            <li
              key={id}
              className={activeSize === index ? 'active' : ''}
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
              className={activeType === index ? 'active' : ''}
              onClick={handleChooseType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <p className="pizza-block__price">от ${activePrice}</p>
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
