import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ItemsState, TSearchParams } from '../store/slices/item/types';

import routes from '../routes';

const fetchItems = createAsyncThunk<ItemsState[], TSearchParams, { rejectValue: string }>(
  'items/fetchItems',
  async (params, { rejectWithValue }) => {
    const { page, category, sortBy, order, search } = params;
    try {
      const { data: items } = await axios.get<ItemsState[]>(
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

export default fetchItems;
