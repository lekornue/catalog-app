export function searchByName(data, updateData, target) {
  const value = target.value.toLowerCase();

  const filter = data.filter((beer) => {
    return beer.name.toLowerCase().includes(value);
  });
  updateData({
    data: filter,
    strSearch: value,      
    dataActive: filter[0],
  });
}
