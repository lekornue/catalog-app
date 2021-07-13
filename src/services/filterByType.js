export function filterByType(types, type, updateData, data) {
    const currType = types[type];

    let direction = currType ? 1 : -1;

    const sorted = [...data].sort((a, b) => {
        if(a[type] === b[type]) return 0;

        return a[type] > b[type] ? direction : direction * -1;
    })

    types[type] = !currType;

    updateData({
        data: sorted,
        dataActive: sorted[0],
    })
}