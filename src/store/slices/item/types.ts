type TSizeItem = {
  size: string;
  id: number;
};

type TTipeItem = {
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

export interface ItemsState {
  title: string;
  price: number;
  currentId: string;
  imageUrl: string;
  sizes: TSizeItem[];
  types: TTipeItem[];
}

export interface ItemSliceState {
  items: ItemsState[];
  loadingStatus: boolean;
  error: null | string | undefined;
}
