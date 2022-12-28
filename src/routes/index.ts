export default {
  getHomePathPage: () => '/',
  getCartPathPage: () => '/cart',
  getNotFoundPathPage: () => '*',
  getProductPathPage: () => '/product/:id',
  getProductById: (id: string) => `/product/${id}`,
  getItems: () => 'https://6380e160786e112fe1bce82e.mockapi.io/items',
};
