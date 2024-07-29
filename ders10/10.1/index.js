// const isim = "alperen";

// const sayi = 15;

// console.log(`kisinin ismi:${isim} - tuttugu sayi: ${sayi}`);

// function toplama(sayi1, sayi2) {
//   console.log(sayi1 + sayi2);

//   return sayi1 + sayi2;
// }

const toplama = (sayi1, sayi2) => {
  console.log(sayi1 + sayi2);

  return sayi1 + sayi2;
};

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log("bastik");
});

(function () {
  console.log("BURASI HEMEN CALISACAK");
})();

(() => {
  console.log("BURASI HEMEN CALISACAK AMA ARROW FUNCTION ICERISINDEKI");
})();
