// const portfolioBtn = document.querySelector('.portfolio__button');
// import i18Obj from "./translate";
const lang = document.querySelectorAll('.header__link--lang');
lang.forEach(i => {
	i.addEventListener('click', (e) => {
		console.log(i.classList.value);
	})
})
// function getTranslate(lang) {
// 	console.log(lang);
// 	const allData = body.querySelectorAll('[data-i18Obj]');
// 	allData.forEach(data => data.dataset.i18n[lang]);
// }
// function changeLagnuage(){
//   let language = lang.checked ? rus : eng;
//   document.querySelectorAll('[text]').forEach(el => {
//     el.innerHTML = language[el.getAttribute('text')];
//   })
// }

const burger = document.querySelector(".burger");
const nav = document.querySelector(".header__nav");

burger.addEventListener("click", (e) => {
  e.preventDefault;
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

console.log(
  "Ваша отметка - 110 балла(ов)\nОтзыв по пунктам ТЗ:\nВсе пункты выполнены полностью!"
);

// const portfolioBtn = document.querySelector(".portfolio__button");
// const portfolioImages = document.querySelectorAll(".portfolio__image");
// const portfolioBtns = document.querySelector(".portfolio__list");
// function changeImage(event) {
//   if (event.target.classList.contains("portfolio__button")) {
//     portfolioBtn.addEventListener("click", (e) => {
//       e.preventDefault();
//       console.log("ok");
//       portfolioBtn.style.backgroundColor = "#bdae82";
//       portfolioBtn.style.color = "#000";
//       portfolioImages.forEach(
//         (img, index) =>
//           (img.src = `./assets/img/${portfolioBtn.dataset.season}/${
//             index + 1
//           }.jpg`)
//       );
//     });
//   }
// }

// const seasons = ["winter", "spring", "summer", "autumn"];
// function preloadImages(seoson) {
//   for (let i = 1; i <= 6; i++) {
//     const img = new Image();
//     img.src = `./assets/img/${seoson}/${i}.jpg`;
//   }
// }
// preloadSummerImages();

// const portfolioButton = document.querySelectorAll("[data-season]");
// const portfolio_list = document.querySelector(".portfolio__list")
// window.addEventListener("load", () => {
// 	 const local = localStorage.getItem("portfolioButton");
// 	 setActiveBtn(portfolioButton, local || 'winter');
// 	 changePicture(local || 'winter');
// })

// portfolioButton.forEach(el => {
// 	 el.addEventListener("click", (e) => {
// 			const value= e.target.getAttribute("data-season");
// 			localStorage.setItem("portfolioButton", value)
// 			removeActiveBtn(portfolioButton);
// 			e.target.classList.add("btn-golden")
// 			changePicture(value);
// 	 })
// })

// const changePicture=(path)=> {
// 	 portfolio_list.innerHTML = "";
// 	 for (let i = 0; i < 6; i++){
// 			const image = document.createElement("img")
// 			image.className = "portfolio__list-item";
// 			image.alt = path
// 			image.src = `./assets/img/${path}/${i + 1}.jpg`;
// 			portfolio_list.append(image)
// 	 }
// }
// const removeActiveBtn=(path) =>{
// 	path.forEach((el) => {
// 		el.classList.remove("btn-golden");
// 	});
// }
// const setActiveBtn=(path,selector) =>{
// 	 path.forEach(el => {
// 			el.getAttribute("data-season") === selector? el.classList.add("btn-golden"):null;
// 	 })
// }

	// const menu = document.querySelector('.nav')
	// const menuItem = document.querySelectorAll('.nav__list-item')
	// const burger = document.querySelector('.burger')
	// const overflow = document.querySelector('.overflow')

	// burger.addEventListener('click', (e) => {
	// 	burger.classList.toggle('burger_active')
	// 	menu.classList.toggle('nav_active')
	// 	overflow.classList.toggle('overflow_active')
	// })

	// menuItem.forEach((item) => {
	// 	item.addEventListener('click', () => {
	// 		burger.classList.toggle('burger_active')
	// 		menu.classList.toggle('nav_active')
	// 		overflow.classList.toggle('overflow_active')
	// 	})
	// })

const portfolioBtns = document.querySelector(".portfolio__buttons");
const portfolioBtn = document.querySelectorAll(".portfolio__button");
const portfolioImages = document.querySelectorAll(".portfolio__image");

portfolioBtns.addEventListener("click", (e) => {
  if (e.target.classList.contains("portfolio__button")) {
    e.preventDefault();
    changeImage(e);
    changeClassActive(e, portfolioBtn);
  }
});
function changeImage(event) {
  let season = event.target.getAttribute("data-season");
  portfolioImages.forEach(
    (img, index) => (img.src = `./assets/img/${season}/${index + 1}.jpg`)
  );
}
function changeClassActive(e, className) {
	className.forEach((el) => el.classList.remove("active"));
	e.target.classList.toggle("active");
}
