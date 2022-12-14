import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import routes from '../../routes';

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await axios.get(`${routes.getItems()}/${id}`);
        setItem(data);
      } catch (error) {
        navigate(routes.HomePathPage());
      }
    };

    fetchItem();
  }, []);

  if (item.length === 0) {
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
