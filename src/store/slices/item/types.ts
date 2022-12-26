type TSizeItem = {
  size: string;
  id: number;
};

type TTypeItem = {
  type: string;
  id: number;
};

export type TSearchParams = {
  category: string;
  page: string;
  search: string;
  sortBy: string;
  order: string;
};

export interface IStateItems {
  title: string;
  price: number;
  currentId: string;
  imageUrl: string;
  sizes: TSizeItem[];
  types: TTypeItem[];
}

export interface ISliceItemState {
  items: IStateItems[];
  loadingStatus: boolean;
  error: null | string | undefined;
}
