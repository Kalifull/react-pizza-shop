import { bindActionCreators } from '@reduxjs/toolkit';

import { itemsApi } from '../../services';
import useAppDispatch from '../useAppDispatchHook';

import { cartActions } from '../../store/reducers/cart/cartSlice';
import { filterActions } from '../../store/reducers/filter/filterSlice';

const allActions = {
  itemsApi,
  ...cartActions,
  ...filterActions,
};

const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActions, dispatch);
};

export default useActions;
