import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

createGallery(galleryItems);

galleryContainer.addEventListener('click', galleryClick);

// galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


// function createGalleryMarkup(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//     return `
//         <div class="gallery__item">
//         <a href="" class="gallery__link">
//           <img
//           src="${preview}" 
//           alt="${description}" 
//           data-source="${original}" 
//           class="gallery__image"
//         /></a>
//         </div>`
//     })
//     .join('')

// };

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        const div = document.createElement('div')
        div.classList = "gallery__item"

        const linkTag = document.createElement('a');
        linkTag.href = `${original}`;
        linkTag.classList = "gallery__link";

        const img = document.createElement('img');
        img.src = `${preview}`;
        img.alt = `${description}`;
        img.dataset.source = `${original}`;
        img.classList = "gallery__image";

        galleryContainer.append(div);
        div.append(linkTag);
        linkTag.append(img);
    })
    
}



function galleryClick(event) {
    // console.log(event.target.classList.value)
    event.preventDefault();
    if (event.target.classList.value === 'gallery__image') {
    const {source} = event.target.dataset;
    console.log({source})

    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`)
    instance.show()
    
    galleryContainer.addEventListener('keydown', onCloseModal)
    
    function onCloseModal(event) {
        console.log(event.key)
        if (event.key === 'Escape') {
            instance.close();
            galleryContainer.removeEventListener('keydown', onCloseModal)
    }
    }
    }
   
}







