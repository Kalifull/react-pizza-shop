export type TCartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: string;
  count: number;
};

export type TPayloadItem = {
  item: TCartItem;
};

export interface CartSliceState {
  totalPrice: number;
  items: TCartItem[];
}
