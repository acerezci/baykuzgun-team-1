const h1Element = document.querySelector("h1");
const buttonElement = document.querySelector("button");
const sayiElement = document.querySelector(".sayi span");
const isimFromLocalStorage = localStorage.getItem("isim");

if (isimFromLocalStorage) {
  // if (!isimFromLocalStorage != null) {
  h1Element.innerHTML = isimFromLocalStorage;
}

buttonElement.addEventListener("click", function () {
  const sayi = Math.ceil(Math.random() * 10);

  localStorage.setItem("sayi", sayi.toString());

  const sayiFromLocalStorage = localStorage.getItem("sayi");

  sayiElement.innerHTML = sayiFromLocalStorage;
});

const ulkelerFromLocalStorage = JSON.parse(localStorage.getItem("ulkeler"));

const ulkelerElement = document.querySelector(".ulkeler ul");

for (let i = 0; i < ulkelerFromLocalStorage.length; i++) {
  const liElement = document.createElement("li");

  liElement.innerHTML = ulkelerFromLocalStorage[i];

  ulkelerElement.appendChild(liElement);
}
