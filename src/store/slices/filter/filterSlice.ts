import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  TPayloadCategory,
  TPayloadSearch,
  TPayloadPage,
  SortPropertyEnum,
  IPayloadSortType,
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
      state.pageNumber = initialState.pageNumber;
    },
    setSearchValue(state, { payload: { search } }: PayloadAction<TPayloadSearch>) {
      state.searchValue = search;
    },
    setPageCount(state, { payload: { page } }: PayloadAction<TPayloadPage>) {
      state.pageNumber = page;
    },
    setSortType(state, { payload: { sort } }: PayloadAction<IPayloadSortType>) {
      state.sortType = sort;
    },
    setFilter(state, { payload }: PayloadAction<PayloadFilter>) {
      const { category, search, page, sort } = payload;
      state.categoryId = +category || initialState.categoryId;
      state.searchValue = search || initialState.searchValue;
      state.pageNumber = +page || initialState.pageNumber;
      state.sortType = sort || initialState.sortType;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
