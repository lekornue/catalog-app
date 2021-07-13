export function updateActive(target, data, updateData) {
  let active = data.find((el) => +el.id === +target.id);
  updateData({
    dataActive: active,
  });
}
