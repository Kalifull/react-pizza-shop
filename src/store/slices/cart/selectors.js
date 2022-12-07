export const selectСartState = (state) => state.cartInfo;

export const selectCurrentNumberOfItems = (state) => {
  const { items } = state.cartInfo;
  return items.reduce((sum, { count }) => sum + count, 0);
};
