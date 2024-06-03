let x = 4;
const GRAVITY = 10;
const ogrencimi = false;

const meyveler = ["portakal", "elma", "armut", "erik"];

const ogrenci = {
  no: 856,
  name: "alperen",
  surname: "cerezci",
  age: 27,
};

const ogrenciler = [
  {
    no: 856,
    name: "alperen",
    surname: "cerezci",
    age: 27,
  },
  {
    no: 1663,
    name: "ertugrul",
    surname: "kral",
    age: 27,
  },
  {
    no: 222,
    name: "omer",
    surname: "nenene",
    age: 99,
  },
];

// f(x,y)= return x+y;

// g(x) = f(4,2)*6;

// f(6,4) = 6 +4 = 10

// topla fonksiyonu x ile y nin toplamini
function topla(x, y) {
  return x + y;
  // return x + y;
}

const sonuc = topla(4, 6);

console.log("sonuc", sonuc);

console.log(sonuc + 5);
