import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector('.gallery');
const renderIt = galleryItems.map((item)=>{
	return `
<a href="${item.original}" 
class="gallery__item">
<img class="gallery__image" 
src="${item.preview}" 
alt="${item.description}">
<figcaption style="display: none">${item.description}</figcaption> 
</a>`;
}).join('');
gallery.insertAdjacentHTML("afterbegin",renderIt);

console.log(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
	spinner: true,
	enableKeyboard: true,
	captionsData: "alt",
	captionDelay: 250,
});

lightbox.on((e)=>	e.preventDefault());

