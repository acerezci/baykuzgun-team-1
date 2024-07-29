const data = [
  { name: "ALPEREN", surname: "CEREZCI" },
  { name: "ERTUGRUL", surname: "TUNA" },
  { name: "SALIHA", surname: "ERGUN" },
  { name: "HASAN", surname: "ERGUN" },
  { name: "HUSEYIN", surname: "ATES" },
];

// data.forEach((item, index) => {
//   console.log({ item });
// });

const sayMyName = (parametreOlarakFonksiyon) => {
  parametreOlarakFonksiyon();
};

const test = () => {
  console.log("ALPEREN");
};

sayMyName(test);
