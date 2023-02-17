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


gallery.addEventListener('click',onChangeSize);
function onChangeSize(e) {
	e.preventDefault();
	if (e.target.nodeName !== "IMG") {
		return;
	}
	let lightbox = new SimpleLightbox('.gallery a', {
		spinner: true,
		enableKeyboard: true,
		captionType:'text',
		captionSelector: 'figcaption', //не міг достукатись через атрибути до альту (не знаю як а в неті інфи не знайшов просто, тому вирішив піти таким способом
		captionsData: `${e.target.alt}`,
		captionDelay: 250,
	});


}