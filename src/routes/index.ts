export default {
  getHomePathPage: () => '/',
  getCartPathPage: () => '/cart',
  getNotFoundPathPage: () => '*',
  getProductPathPage: () => '/product/:id',
  getProductById: (id: string) => `/product/${id}`,
  getItems: () => process.env.REACT_APP_PUBLIC_URL,
};
