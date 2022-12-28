import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IStateItems } from '../../store/reducers/item/types';

import routes from '../../routes';

const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: routes.getItems() }),
  endpoints: (builder) => ({
    fetchItemById: builder.query<IStateItems, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export default productApi;
