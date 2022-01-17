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
