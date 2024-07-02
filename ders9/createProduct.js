function createProduct(name, price) {
  const productContainerElement = document.createElement("div");

  productContainerElement.className = "product-container";

  productContainerElement.innerHTML =
    "Urun Adi:" + name + " - " + "Urunun Fiyati:" + price;

  productsContainer.appendChild(productContainerElement);
}
