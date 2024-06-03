let ogrenci1 = {
  puan: 71,
  cinsiyet: "K",
  isim: "saliha",
};

if (ogrenci1.puan > 70 || ogrenci1.isim == "alperen") {
  console.log("dersten gectiniz");
}

setTimeout(() => {
  if (ogrenci1.puan > 70 && ogrenci1.isim == "saliha") {
    console.log("dersten gectiniz");
  }
}, 3000);
