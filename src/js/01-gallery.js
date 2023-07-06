// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

//1. создаю массив разметки
const items = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
)
.join("");

//2. рисую разметку
galleryEl.insertAdjacentHTML('beforeend', items)

//3. запускаем библиотеку
new SimpleLightbox('.gallery__link',
{ captionsData: 'alt',
captionDelay: 250});