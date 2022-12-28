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

export interface ISortTypeItem {
  name: string;
  sortProperty: SortPropertyEnum;
  id: number;
}

export interface IPayloadSortType {
  sort: ISortTypeItem;
}

export interface PayloadFilter {
  category: string;
  search: string;
  page: string;
  sort: ISortTypeItem;
}

export interface FilterSliceState {
  categoryId: number;
  searchValue: string;
  pageNumber: number;
  sortType: ISortTypeItem;
}
