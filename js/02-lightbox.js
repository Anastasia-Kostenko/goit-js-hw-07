import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector('.gallery')

const markGallery = galleryItems
  .map(({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
</li>
    `).join("")

container.insertAdjacentHTML('beforeend', markGallery);

var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionsType: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
});
    
console.log(galleryItems);


