const KEY = "24190163-4fef3af5a8c9fb39e43dd5d2d";

function fetchImages(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error("Oops, something went wrong"));
  });
}

const api = { fetchImages };

export default api;
