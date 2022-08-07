// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Image Gallery</h1>`;

const createGalleryItem = function (i) {
  const container = document.createElement('div');
  container.classList.add('image-container');
  const img = document.createElement('img');
  img.setAttribute('src', `https://placehold.jp/150.png`);
  container.appendChild(img);
  const button = document.createElement('button');
  button.classList.add('remove');
  button.textContent = `x${i}`;
  container.appendChild(button);
  return container;
};

const onGalleryClick = function (e) {
  if (e.target.classList.contains('remove')) {
    e.target.parentNode.remove();
  }
};

const generateGallery = function (num) {
  const gallery = document.createElement('div');
  gallery.classList.add('gallery');
  gallery.addEventListener('click', onGalleryClick);
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= num; i++) {
    const galleryItem = createGalleryItem(i);
    fragment.appendChild(galleryItem);
  }
  gallery.appendChild(fragment);
  appDiv.appendChild(gallery);
};

const setup = function () {
  generateGallery(5);
};

setup();
