import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import routes from '../routes';

const fetchItems = createAsyncThunk('items/fetchItems', async (params) => {
  const {
    page, category, sort, order, search,
  } = params;
  const { data: items } = await axios.get(
    `${routes.getItems()}${page}${category}${sort}${order}${search}`,
  );

  return items;
});

export default fetchItems;
