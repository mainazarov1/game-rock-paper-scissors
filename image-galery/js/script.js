const auth = 'AVa_hZA3gk37wO5xko9pKP3gkFLTk4FeapoThCMqFoc';

const input = document.querySelector('#header__input');
const search = document.querySelector('#header__search');
const gallery = document.querySelector('.gallery__grid');
let query = '';
getData('all');
input.addEventListener('keypress', (e) => {
	if (e.key == 'Enter') {
		e.preventDefault();
		gallery.innerHTML = '';
		query = e.target.value
		getData(query);
		getImages();
	}
})

search.addEventListener('click', (e) => {
	e.preventDefault();
	gallery.innerHTML = '';
	query = input.value;
	getData(query);
})

async function getData(query) {
	let res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=${auth}`);
	let data = await res.json();
	data = data.results;
	data.map(el => showData(el))
}

function showData(dataImage) {
	const image = document.createElement('div');
	image.classList.add('gallery__image')
	image.innerHTML = `<img src="${dataImage.urls.regular}" alt="${dataImage.alt_description}">`;
	gallery.appendChild(image);
}