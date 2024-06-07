// frontend

// const merhabaDunyaDiv = document.querySelector(".merhaba");

// console.log(merhabaDunyaDiv);

// setTimeout(() => {
//   merhabaDunyaDiv.innerHTML = "alperen";
// }, 3000);

// const numara = 4;

// console.log(numara);
// console.log({ document });

// const myDocument = {
//   querySelector: function () {
//     console.log("kendi query selectorumuzu yazmaya basladik");
//   },
// };

// myDocument.querySelector();

// const merhabaDunyaDivleri = document.querySelectorAll(".merhaba");

// console.log(merhabaDunyaDivleri);

// console.log(merhabaDunyaDivleri[1]);

// setTimeout(() => {
//   merhabaDunyaDivleri[1].innerHTML = "<h1>burasi sonradan eklenmistir</h1>";
// }, 2000);

// const deneme = document.getElementsByClassName("merhaba");
// const test = document.getElementById("test");

// console.log(test);

// querySelector
// querySelectorAll
// getElementByClassName
// getElementById

// const futbolcular = document.querySelectorAll("ul > li");

// console.log(futbolcular);

// const fatihinDivininIcindekiTumULler =
//   document.querySelectorAll(".fatih-hayati ul");

// for (let sira = 0; sira < fatihinDivininIcindekiTumULler.length; sira++) {
//   const element = fatihinDivininIcindekiTumULler[sira];

//   const liler = element.querySelectorAll("li");

//   for (let sira2 = 0; sira2 < liler.length; sira2++) {
//     const elementsira2 = liler[sira2];

//     liler[0].textContent = "alperen";

//     console.log(elementsira2);

//     // elementJ.textContent = "alperen";
//   }
// }

// setTimeout(() => {
//   const fatihinHayati = document.querySelector(".fatih-hayati");

//   fatihinHayati.className = "fatihin-ozellikleri";

//   console.log(fatihinHayati);

//   const degiscekDiv = document.querySelector(".degiscek");

//   degiscekDiv.className = "fatih-hayati";

//   const silinecekDiv = document.querySelector(".silinecek");

//   silinecekDiv.remove();
// }, 2000);

const form = document.querySelector(".login-form");

const aElement = document.querySelector(".link");

const emailInputElement = document.querySelector(".email-input");
const passwordInputElement = document.querySelector(".password-input");
const submitButtonElement = document.querySelector(".submit-button");

emailInputElement.addEventListener("input", function (event) {
  console.log(event.target.value);
});

passwordInputElement.addEventListener("input", function (event) {
  console.log(event.target.value);
});

submitButtonElement.addEventListener("click", function () {
  passwordInputElement.setAttribute("type", "text");
  aElement.setAttribute("href", "https://google.com");
});
