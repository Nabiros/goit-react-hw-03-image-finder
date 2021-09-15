export default function fetchImages(nameImg, pageNumber) {
  const URL = 'https://pixabay.com/api';
  const KEY = '22578117-98ddcf36fbc3d0da8c48aeee6&q';

  return fetch(
    `${URL}/?q=${nameImg}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Запрос по картинке ${nameImg} - не существует`));
  });
}