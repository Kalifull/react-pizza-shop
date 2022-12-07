export const findCurrentItem = ({ items }, item) => items.find(
  ({ id, type, size }) => id === item.id
    && type === item.type
    && size === item.size,
);

export const calcTotalPrice = ({ items }) => items
  .reduce(
    (sum, { price, count }) => sum + price * count,
    0,
  );

export const filterItems = ({ items }, currentItem) => items.filter(
  ({ id, type, size }) => !(id === currentItem.id
    && type === currentItem.type
    && size === currentItem.size),
);
