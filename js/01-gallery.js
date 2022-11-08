import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector(`.gallery`);
const cardsMake = createPiсtures(galleryItems);


galleryList.insertAdjacentHTML("beforeend", cardsMake);
// console.log(cardsMake);
function createPiсtures(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {
        
        return `<div class="gallery__item"><a class="gallery__link" href= "${preview}">
        <img
          class="gallery__image"
          src="${preview}";
          data-source="${original}";
          alt="${description}";
        />
      </a>
      </div>`}).join(``);
       
}
const galleryImage = document.querySelectorAll(`.gallery__image`);

function onPicturesOpen (event) {
    event.preventDefault();
  
    if (event.target.nodeName !== `IMG`) { 
        return;
    }
     basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`).show(); 
};
galleryList.addEventListener(`click`,onPicturesOpen)


// console.log(galleryItems);
