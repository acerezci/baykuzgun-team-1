const appElement = window.document.querySelector(".app");

// console.log("global", this); // this windowa esittir

function topla() {
  console.log("normal function", this);
}

const topla2 = () => {
  console.log("arrow function", this);
  //   console.log(4 + 5);
};

// topla();
// topla2();

const student = {
  name: "ALPEREN",
  getInfo: function () {
    console.log(this);
    const test = this.document.querySelector(".app");

    console.log(test);
    // console.log("objectin icindeki", this);
    // console.log("objectin kendisi", student);
  },
  getInfo2: () => {
    const test = this.document.querySelector(".app");

    console.log(test);
  },
};

// arrow function
// function

// student.getInfo2();

student.getInfo();
