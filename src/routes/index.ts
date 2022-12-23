export default {
  HomePathPage: () => '/',
  CartPathPage: () => '/cart',
  NotFoundPage: () => '*',
  ProductInfoPage: () => '/product/:id',
  getItems: () => 'https://6380e160786e112fe1bce82e.mockapi.io/items',
  getProductInfoById: (id: string) => `/product/${id}`,
};
