class App {
  app;
  constructor(meyveler) {
    this.app = document.querySelector(".app");

    this.createElement(meyveler);
  }

  createElement(meyveler) {
    for (let index = 0; index < meyveler.length; index++) {
      const divElement = document.createElement("div");
      divElement.innerHTML = meyveler[index];

      this.app.appendChild(divElement);
    }
  }

  static saveLocaleStorage(key, values) {
    localStorage.setItem(key, JSON.stringify(values));
  }

  static getValuesFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

// const meyveler = ["ayva", "armut", "elma", "erik"];

const button = document.querySelector("button");
button.addEventListener("click", function () {
  const meyveler = App.getValuesFromLS("meyveler");

  new App(meyveler);

  //   App.saveLocaleStorage("meyveler", meyveler);
});

// new App(meyveler);

// this
// callback
// async
// fetch
// typescript
