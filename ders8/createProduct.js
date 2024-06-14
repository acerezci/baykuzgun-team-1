function createProduct(price, name) {
  const productElement = createElement(
    "div",
    undefined,
    "product-container",
    "click",
    function () {
      console.log("tikladik", name);

      const sayacElement = document.querySelector(".sayac");
      const sayac = sayacElement.innerHTML;

      sayacElement.innerHTML = Number(sayac) + 1;
    }
  );

  const productImgContainer = document.createElement("div");
  productImgContainer.className = "product-img-container";

  const productImg = document.createElement("img");
  productImg.src =
    "https://www.konteyner.com/media/menus/sandvic-panel-konteyner.jpg";

  const productInfoContainer = document.createElement("div");
  productInfoContainer.className = "product-info-container";

  const productName = document.createElement("div");
  productName.innerHTML = name;

  const productPrice = document.createElement("div");
  productPrice.innerHTML = price;

  const deleteButton = document.createElement("div");
  deleteButton.className = "product-delete-button";

  deleteButton.innerHTML = "X";

  deleteButton.addEventListener("click", function (event) {
    event.stopPropagation();
    productElement.remove();
    console.log("delete butonuna tikladik", name);
  });

  productInfoContainer.appendChild(productName);
  productInfoContainer.appendChild(productPrice);

  productImgContainer.appendChild(productImg);

  productElement.appendChild(productImgContainer);

  productElement.appendChild(productInfoContainer);

  productElement.appendChild(deleteButton);

  productsContainer.appendChild(productElement);
}

function createElement(type, textContent, className, eventType, eventFunction) {
  const element = document.createElement(type);
  element.textContent = textContent;
  element.className = className;
  element.addEventListener(eventType, eventFunction);

  return element;
}
