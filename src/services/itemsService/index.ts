import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IStateItems, TSearchParams } from '../../store/reducers/item/types';

import routes from '../../routes';

const itemsApi = createAsyncThunk<IStateItems[], TSearchParams, { rejectValue: string }>(
  'items/itemsApi',
  async (params, { rejectWithValue }) => {
    const { page, category, sortBy, order, search } = params;

    try {
      const { data: items } = await axios.get<IStateItems[]>(
        `${routes.getItems()}${page}${category}${sortBy}${order}${search}`
      );

      return items;
    } catch (error) {
      return error instanceof Error
        ? rejectWithValue(error.name)
        : rejectWithValue('Unknown error');
    }
  }
);

export default itemsApi;
