const KEY = "24190163-4fef3af5a8c9fb39e43dd5d2d";

export default function fetchImages(query, page, onSuccess) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then((res) => res.json())
    .then((data) => data.hits)
    .then((results) => onSuccess(results));
}
