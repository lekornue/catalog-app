export function fetchData(updateData) {
    setTimeout(() => {
      fetch(`https://api.punkapi.com/v2/beers`)
        .then((resp) => resp.json())
        .then((data) => {
          updateData({
            data: data,
            dataActive: data[0],
            loading: false,
          });
        });
    }, 1000);
  }