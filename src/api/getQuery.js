const API_KEY = "23130467-42c8d5c93f822886ee9232870";
const BASE_URL = "https://pixabay.com/api";

const getQuery = (query = "", page = 1) => {
  return fetch(
    `${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((response) => response.json())
    .then((data) => data.hits);
};

export default getQuery;
