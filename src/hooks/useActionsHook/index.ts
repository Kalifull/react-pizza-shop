import { bindActionCreators } from '@reduxjs/toolkit';

import { itemsApi } from '../../services';
import useAppDispatch from '../useAppDispatchHook';

import { cartActions } from '../../store/slices/cart/cartSlice';
import { filterActions } from '../../store/slices/filter/filterSlice';

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
