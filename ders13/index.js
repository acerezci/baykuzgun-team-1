class App {
  data = [
    { studentName: "ALPEREN", surname: "CEREZCI" },
    { studentName: "ERTUGRUL", surname: "TUNA" },
    { studentName: "SALIHA", surname: "ERGUN" },
    { studentName: "HASAN", surname: "ERGUN" },
    { studentName: "HUSEYIN", surname: "ATES" },
  ];

  constructor() {
    const ls = new CustomLocalStorage();
    let students = ls.getLocalStorage("students");

    if (!students) {
      ls.setLocalStorage("students", this.data);
      students = this.data;
    }

    const appElement = document.querySelector("#app");
    const ui = new UI();

    const inputElement = ui.createElement(
      "input",
      "input",
      "keypress",
      this.onChange
    );

    const buttonElement = ui.createElement(
      "button",
      "button",
      "click",
      this.buttonClick
    );
    buttonElement.innerHTML = "EKLE";

    const ulElement = ui.createElement("ul", "student-list");

    for (let index = 0; index < students.length; index++) {
      const liElement = ui.createElement("li", "student");
      liElement.innerHTML = `${students[index].studentName} ${students[index].surname}`;

      ulElement.appendChild(liElement);
    }

    appElement.appendChild(inputElement);
    appElement.appendChild(buttonElement);
    appElement.appendChild(ulElement);
  }

  onChange() {
    console.log("YAZILMAYA BASLADI");
  }
  buttonClick() {
    console.log("BUTONA TIKLANDI");
  }
}

new App();
