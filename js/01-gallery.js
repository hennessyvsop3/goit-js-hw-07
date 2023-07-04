import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const imgMarkup = createImgEl(galleryItems);

function createImgEl(galleryItems) {
  return galleryItems.map(
    ({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }
  ).join('');

}
galleryList.insertAdjacentHTML("beforeend", imgMarkup);

galleryList.addEventListener("click", onClickGallery);

function onClickGallery(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) return;

  const modalImg = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: () => document.addEventListener("keydown", handlerEscModal),
      onClose: () => document.removeEventListener("keydown", handlerEscModal),
    }
  );
  modalImg.show();

  function handlerEscModal(event) {
    if (event.code === "Escape") {
      modalImg.close();
    }
      
  }
}