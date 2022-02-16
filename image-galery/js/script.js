const auth = 'AVa_hZA3gk37wO5xko9pKP3gkFLTk4FeapoThCMqFoc';

const input = document.getElementById('header__input');
const search = document.getElementById('header__search');
const deleteValue = document.getElementById('header__delete-value');
const gallery = document.querySelector('.gallery__grid');
let query = '';
getData('all');
if (!query) {
	input.addEventListener('input', (e) => {
		e.target.value;
		deleteValue.style.display = 'block';
		deleteValue.addEventListener('click', (event) => {
			event.preventDefault();
			input.value = '';
			deleteValue.style.display = 'none'
		})
	})
}
input.addEventListener('keypress', (e) => {
	if (e.key == 'Enter') {
		e.preventDefault();
		query = e.target.value;
		gallery.innerHTML = '';
		getData(query);
		getImages();
	}
	
	// if (query !== '') {
	// 	const deleteValueInput = document.createElement('img');
	// 	deleteValueInput.classList.add('header__delete-value');
	// 	deleteValueInput.src = '../assets/icons/x-circle.svg'
	// 	const searchDiv = document.querySelector('.header__search');
	// 	searchDiv.appendChild(deleteValueInput)
	// }
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
