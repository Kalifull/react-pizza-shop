import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import fetchData from '../../../services/fetchItems';

import {
  TPayloadCategory,
  TPayloadSearch,
  TPayloadPage,
  SortPropertyEnum,
  PayloadSortType,
  PayloadFilter,
  FilterSliceState,
} from './types';

const initialState: FilterSliceState = {
  categoryId: 0,
  searchValue: '',
  pageNumber: 1,
  sortType: {
    name: 'популярность по убыванию',
    sortProperty: SortPropertyEnum.RATING_DESC,
    id: 0,
  },
};

export const filterSlice = createSlice({
  name: 'filterInfo',
  initialState,
  reducers: {
    setCategoryId(state, { payload: { category } }: PayloadAction<TPayloadCategory>) {
      state.categoryId = category;
    },
    setSearchValue(state, { payload: { search } }: PayloadAction<TPayloadSearch>) {
      state.searchValue = search;
    },
    setPageCount(state, { payload: { page } }: PayloadAction<TPayloadPage>) {
      state.pageNumber = page;
    },
    setSortType(state, { payload: { sort } }: PayloadAction<PayloadSortType>) {
      state.sortType = sort;
    },
    setFilter(state, { payload }: PayloadAction<PayloadFilter>) {
      const { category, search, page, sort } = payload;
      state.categoryId = +category;
      state.searchValue = search;
      state.pageNumber = +page;
      state.sortType = sort;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state) => {
      state.pageNumber = initialState.pageNumber;
    });
  },
});

export const { setCategoryId, setSearchValue, setPageCount, setSortType, setFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
