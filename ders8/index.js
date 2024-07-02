const bodyElement = document.querySelector("body");

const sayacElement = document.createElement("div");
sayacElement.className = "sayac";
sayacElement.innerHTML = 0;

const productsContainer = document.createElement("div");
productsContainer.className = "products-container";

bodyElement.appendChild(productsContainer);
bodyElement.appendChild(sayacElement);

const products = [
  { name: "Konteynir 1", price: "50.000,00 TL" },
  { name: "Konteynir 2", price: "55.000,00 TL" },
  { name: "Konteynir 3", price: "60.000,00 TL" },
  { name: "Konteynir 4", price: "70.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
  { name: "Konteynir 5", price: "80.000,00 TL" },
];

for (let index = 0; index < products.length; index++) {
  //   console.log(index);
  createProduct(products[index].price, products[index].name);
}
