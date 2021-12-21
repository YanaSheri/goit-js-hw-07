import { galleryItems } from './gallery-items.js';
// Change code below this line

const listGallery = document.querySelector('.gallery');

const createItems = galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`
    }).join("");

listGallery.insertAdjacentHTML("afterbegin", createItems);
const cb = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return false;
    const sourceImg = event.target.dataset.source;
    console.log(sourceImg);

    const instance = basicLightbox.create(`
        <img src="${sourceImg}" width="800" height="600">
    `);
    instance.show()
};

listGallery.addEventListener('click', cb);

console.log(galleryItems);

