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





// const instance = basicLightbox.create(`
//    <div></div>
// `)


const instance = basicLightbox.create(`
    <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" width="800" height="600">
`)



function onCloseModalWindow(evt) {
    
    //     // console.log(evt);
    if (evt.target.classList.contains('gallery__image')) {
        evt.preventDefault()

// console.log(evt.dataSet);
     


       return instance.show(evt => evt.srcElement)
    }

    
        // instance.close()    
    }















