import { Link } from 'react-router-dom';

import routes from '../../routes';
import EmptyCartImg from '../../assets/images/empty-cart.svg';

const EmptyCart: React.FC = () => (
  <div className="cart cart--empty">
    <img src={EmptyCartImg} alt="Empty cart" />
    <h2>Ой, пусто!</h2>
    <p>
      Ваша корзина пуста, перейдите в «Меню» и выберите понравившийся товар. Мы доставим ваш заказ
      от 549 ₽
    </p>
    <Link to={routes.getHomePathPage()} className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);

export default EmptyCart;
