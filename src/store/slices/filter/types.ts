export type TPayloadCategory = {
  category: number;
};

export type TPayloadSearch = {
  search: string;
};

export type TPayloadPage = {
  page: number;
};

export enum SortPropertyEnum {
  RATING_DESC = '-rating',
  RATING_ASC = 'rating',
  PRICE_DESC = '-price',
  PRICE_ASC = 'price',
  TITLE_ASC = 'title',
}

export interface SortTypeItem {
  name: string;
  sortProperty: SortPropertyEnum;
  id: number;
}

export interface PayloadSortType {
  sort: SortTypeItem;
}

export interface PayloadFilter {
  category: string;
  search: string;
  page: string;
  sort: SortTypeItem;
}

export interface FilterSliceState {
  categoryId: number;
  searchValue: string;
  pageNumber: number;
  sortType: SortTypeItem;
}
