import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery');

const createItems = galleryItems
    .map(({ preview, original, description }) => {
        return `<li>
                    <a class="gallery__item" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            alt="${description}"
                        />
                    </a>
                </li>`
    }).join("");

listGallery.insertAdjacentHTML("afterbegin", createItems);
const cb = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return false;
        const sourceImg = event.target.dataset.source;
        console.log(sourceImg);
    };
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', animationSpeed: "250ms" });
lightbox.close();

listGallery.addEventListener('click', cb);

console.log(galleryItems);


