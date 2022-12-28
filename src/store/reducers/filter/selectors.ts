import { TypeRootState } from '../..';

export const selectCategoryId = (state: TypeRootState) => state.filterInfo.categoryId;

export const selectSearchValue = (state: TypeRootState) => state.filterInfo.searchValue;

export const selectPageNumber = (state: TypeRootState) => state.filterInfo.pageNumber;

export const selectSortType = (state: TypeRootState) => state.filterInfo.sortType;

export const selectSortByType = (state: TypeRootState) => state.filterInfo.sortType.sortProperty;
