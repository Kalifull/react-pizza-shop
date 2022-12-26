import { Link, useParams } from 'react-router-dom';

import Skeleton from '../../components/Skeleton';
import ErrorBlock from '../../components/ErrorBlock';

import { productApi } from '../../services';

import routes from '../../routes';

type PageParams = {
  id: string;
};

const Product: React.FC = () => {
  const { id } = useParams<PageParams>();

  const { data: item, isLoading, error } = productApi.useFetchItemByIdQuery(id!);

  return (
    <div className="container">
      <div className="content__items">
        {isLoading && <Skeleton />}
        {error && <ErrorBlock />}
        {item && (
          <div className="pizza-block">
            <img className="pizza-block__image" src={item.imageUrl} alt={item.title} />
            <p className="pizza-block__title">{item.title}</p>
            <p className="pizza-block__price">от {item.price} ₽ за 1шт.</p>
            <Link to={routes.getHomePathPage()} className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
