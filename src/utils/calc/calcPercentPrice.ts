const calcPercentPrice = (price: number, index: number) => {
  const percentPrice = 0.25;
  return Math.ceil(price * percentPrice * (index / 1.5) + price);
};

export default calcPercentPrice;
