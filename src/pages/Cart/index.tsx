import CartTop from '../../components/CartBlock/CartTop';
import CartItem from '../../components/CartBlock/CartItem';
import EmptyCart from '../../components/CartBlock/CartEmpty';
import CartButtons from '../../components/CartBlock/CartButtons';
import CartDetails from '../../components/CartBlock/CartDetails';

import { useAppSelector } from '../../hooks';

import { TCartItem } from '../../store/reducers/cart/types';
import { selectItemsCart } from '../../store/reducers/cart/selectors';

const Cart: React.FC = () => {
  const items = useAppSelector(selectItemsCart);

  return items.length ? (
    <div className="container__cart">
      <div className="cart">
        <CartTop />
      </div>
      <div className="cart__items">
        {items.map((item: TCartItem, index: number) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
      <div className="cart__bottom">
        <CartDetails />
        <CartButtons />
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
};

export default Cart;
