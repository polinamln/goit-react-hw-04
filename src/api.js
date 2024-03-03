import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const accessKey = "itfEfKJ3d7xlRhhvtXbjP39iX9e0hSMqKRflrN-Khw0";

export async function fetchPhotos(searchQuery) {
  const response = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: searchQuery,
      per_page: 20,
    },
  });

  return response.data;
}
