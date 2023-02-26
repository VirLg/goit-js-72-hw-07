import {galleryItems}   from './gallery-items.js';
// Change code below this line

const refDiv  = document.querySelector('.gallery')
refDiv.addEventListener('click', onCloseModalWindow)

function createMarkup(arrs) {
    return arrs.map(({preview,original,description}) =>`
    <div class="gallery__item">
  <a class="gallery__link" href="${original} ">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`).join('')
}


refDiv.insertAdjacentHTML("afterbegin", createMarkup(galleryItems) )

function onCloseModalWindow(evt) {
  
  evt.preventDefault()

  if (evt.target.nodeName === "IMG") {
  
    const instance = basicLightbox.create(`
    <img src = ${evt.target.dataset.source}>
`)
    console.log(instance);
    return instance.show()

  }
}




const instance = basicLightbox.create("img", {

  onShow: () => window.addEventListener
    ("keydown", function (evt) { if (evt.code === "Escape") instance.close() }),
  onClose: () => window.removeEventListener
    ("keydown", function (evt) { if (evt.code === "Escape") instance.close() }),
});
  
  
  
// document.addEventListener("keydown", keyBoardCloseModal)
// function keyBoardCloseModal (evt) {
//   if (evt.code === "Escape") {
       
//       // document.removeEventListener('keydown', keyBoardCloseModal)
//      console.log("cybvf.");
//       return instance.close()
//     }
//   }
// }




