import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const accessKey = "7XkF714vZ0F0q32qkxaWKIGN6Ojw-1NKMPc0P-krJHY";

export async function fetchPhotos(searchQuery, page = 1) {
  const response = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: searchQuery,
      per_page: 30,
      page,
    },
  });

  console.log(page);

  return response.data;
}
