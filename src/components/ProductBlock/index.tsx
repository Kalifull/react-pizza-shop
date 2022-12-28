import { Link } from 'react-router-dom';

import { IStateItems } from '../../store/reducers/item/types';

import routes from '../../routes';

const ProductBlock: React.FC<IStateItems> = ({ imageUrl, title, price }) => {
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt={title} />
      <p className="pizza-block__title">{title}</p>
      <p className="pizza-block__price">от {price} ₽ за 1шт.</p>
      <Link to={routes.getHomePathPage()} className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default ProductBlock;
