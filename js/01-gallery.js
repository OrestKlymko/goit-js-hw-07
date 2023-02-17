import { galleryItems } from './gallery-items.js';



// Створення галереї
const gallery = document.querySelector('.gallery');

const renderIt = galleryItems.map((item)=>{
    return `<div class="gallery__item">
<a href="${item.original}" 
class="gallery__link">
<img class="gallery__image" 
src="${item.preview}" 
data-source="${item.original}"
alt="${item.description}">
</a>
</div>`;
}).join('');
gallery.insertAdjacentHTML("afterbegin",renderIt);



gallery.addEventListener('click',onChangeSize);
function onChangeSize(e) {
    e.preventDefault();

    if (e.target.nodeName!== "IMG") {
       return;
   }
   let instance =  basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`)
    instance.show()

    gallery.addEventListener('keydown',((e)=> {
    if (e.code =="Escape"){
        instance.close();
    }
}))


}




console.log(galleryItems);
