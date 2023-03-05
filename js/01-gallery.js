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
    <img  class = "modal" src = ${evt.target.dataset.source}>`, {
      onShow: (add) => { },
      onClose: (remove) => {}
    });
    instance.show()
  }
  }

function managementOfModalWindow(evt) { 
  if (evt.code === "Escape") { 
instance.close()
  }
    }

const add = window.addEventListener("keydown", managementOfModalWindow)
const remove =window.removeEventListener("keydown", managementOfModalWindow)








