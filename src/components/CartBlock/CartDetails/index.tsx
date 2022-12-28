import { memo } from 'react';

import { useAppSelector } from '../../../hooks';
import { selectCountOfItems, selectTotalPrice } from '../../../store/reducers/cart/selectors';

const CartDetails: React.FC = memo(() => {
  const count = useAppSelector(selectCountOfItems);
  const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <div className="cart__bottom-details">
      <span>
        Всего пицц: <b>{count} шт.</b>
      </span>
      <span>
        Сумма заказа: <b>{totalPrice} ₽</b>
      </span>
    </div>
  );
});

export default CartDetails;
