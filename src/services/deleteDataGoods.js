export function deleteDataCartGoods(
  id,
  dataCart,
  productsInCart,
  updateData,
  data
) {
  const goodId = id;
  const itemIndex = data.findIndex(({ id }) => id === goodId);
  const itemIndexCart = dataCart.findIndex(({ id }) => id === goodId);
  const dataCartGood = data[itemIndex];

  dataCart.splice(itemIndexCart, 1);

  const newDataCartGood = {
    ...dataCartGood,
    inCart: false,
  };

  const newData = [
    ...data.slice(0, itemIndex),
    newDataCartGood,
    ...data.slice(itemIndex + 1),
  ];

  updateData({
    data: newData,
    dataCartGoods: [...dataCart],
    productsInCart: --productsInCart,
  });
}
