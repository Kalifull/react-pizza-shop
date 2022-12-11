export const selectСartState = (state) => state.cartInfo;

export const selectCountOfItems = (state) => {
  const { items } = state.cartInfo;
  return items.reduce((sum, { count }) => sum + count, 0);
};

export const selectCurrentCountOfItems = (item) => (state) => {
  const { items } = state.cartInfo;
  const count = items.find(
    ({ id, type, size }) => id === item.id && type === item.type && size === item.size,
  )?.count;

  return count ?? 0;
};
