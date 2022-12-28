import { memo } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../routes';

const CartButtons: React.FC = memo(() => {
  return (
    <div className="cart__bottom-buttons">
      <Link
        to={routes.getHomePathPage()}
        className="button button__outline button__add go-back-btn"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 13L1 6.93015L6.86175 1"
            stroke="#D3D3D3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Вернуться назад</span>
      </Link>
      <div className="button pay-btn">
        <span>К оформлению заказа</span>
      </div>
    </div>
  );
});

export default CartButtons;
