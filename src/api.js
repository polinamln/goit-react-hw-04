import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const accessKey = "itfEfKJ3d7xlRhhvtXbjP39iX9e0hSMqKRflrN-Khw0";

export async function fetchPhotos(searchQuery, page) {
  const response = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: searchQuery,
      per_page: 10,
      page,
    },
  });

  console.log(page);

  return response.data;
}
