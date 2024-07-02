const temp = localStorage.getItem("products");

const products = JSON.parse(temp);

const productsContainer = document.querySelector(".products-container");

for (let index = 0; index < products.length; index++) {
  createProduct(products[index].name, products[index].price);
}

const buttonElement = document.createElement("button");
buttonElement.innerHTML = "DATAYI DEGISTIR";

buttonElement.addEventListener("click", function () {
  products[0].name = "IPHONE 19";
  products[0].price = "89999";

  localStorage.setItem("products", JSON.stringify(products));
});

productsContainer.appendChild(buttonElement);
