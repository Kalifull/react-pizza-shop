import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { ItemsState } from '../../store/slices/item/types';

import routes from '../../routes';

type PageParams = {
  id: string;
};

const ProductInfo: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<PageParams>();

  const [item, setItem] = useState<ItemsState | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await axios.get<ItemsState>(`${routes.getItems()}/${id}`);
        setItem(data);
      } catch (error) {
        navigate(routes.HomePathPage());
      }
    };

    fetchItem();
  }, []);

  if (!item) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <div className="container">
      <div className="pizza-block">
        <img className="pizza-block__image" src={item.imageUrl} alt={item.title} />
        <p className="pizza-block__title">{item.title}</p>
        <p className="pizza-block__price">от {item.price} ₽ за 1шт.</p>
        <Link to={routes.HomePathPage()} className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductInfo;
