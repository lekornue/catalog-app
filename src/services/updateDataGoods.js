export function updateDataCartGoods(
  id,
  dataCart,
  productsInCart,
  updateData,
  data
) {
  const goodId = id;
  const itemIndex = data.findIndex(({ id }) => id === goodId);
  const dataCartGood = data[itemIndex];

  const newDataCartGood = {
    ...dataCartGood,
    inCart: true,
  };

  const newData = [
    ...data.slice(0, itemIndex),
    newDataCartGood,
    ...data.slice(itemIndex + 1),
  ];

  updateData({
    data: newData,
    dataCartGoods: [...dataCart, newDataCartGood],
    productsInCart: ++productsInCart,
  });
}
