export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=YoNFQ4xX2d7nVKS4dfNCFCe3hKfJpy85&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
};