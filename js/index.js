// masalar

// 1-masala
// function rang3ta(Turli3tarang) {
//   let Turli3tarang = ["sariq", "oq", "pushti", "jigarrang"];
//   return Turli3tarang;
// }
// console.log(rang3ta(Turli3tarang));
// 2-masala
// function turli3tason(son1, son2, son3) {
//   let son = [];
//   son.push = son1;
//   son.push = son2;
//   son.push = son3;
//   return son;
// }
// console.log(turli3tason(1, 2, 3));
// 3-masala
// function elementqaytarish(sonlar) {
//   console.log(sonlar[0]);
//   console.log(sonlar[sonlar.length - 1]);
// }
// elementqaytarish([12, 435, 67]);
// 4-masala
// function elementqaytarish(sonlar, element) {
//   sonlar[2] = element;
//   return sonlar;
// }
// console.log(elementqaytarish([12, 124, 43, 51], 33));
// 5-masala
// function yangiElementqosh(mevalar, element) {
//   mevalar.push = element;
//   return mevalar;
// }
// console.log(yangiElementqosh(["olma", "bexi", "gilos", "orik"], "xurmo"));
// 6 - masala
// function yangiElementqosh(mevalar) {
//   mevalar.pop();
//   return mevalar;
// }
// console.log(yangiElementqosh(["olma", "bexi", "gilos", "orik"]));
// 7-masala
// function yangiElementqosh(mevalar, element) {
//   mevalar.push = element;
//   let result = mevalar.length;
//   return result;
// }
// console.log(yangiElementqosh(["olma", "bexi", "gilos", "orik"], "xurmo"));
// 8-masala
// function boshigaElementqoshish(mashina, element) {
//   mashina.unshift(element);
//   return mashina;
// }
// console.log(
//   boshigaElementqoshish(["matiz", "tik", "damas", "jentra"], "nexia2")
// );
// 9-masala
// function boshigaElementqoshish(mashina) {
//   mashina.shift();
//   return mashina;
// }
// console.log(boshigaElementqoshish(["matiz", "tik0", "damas", "jentra"]));
// 10-masala
// let cevrolet = ["matiz", "tiko", "damas", "jentra"];
// let BMW = ["M3", "M5", "M8"];
// function massivlarnibirlashtirish(arr1, arr2) {
//   let result = arr1.concat(arr2);
//   return result;
// }
// console.log(massivlarnibirlashtirish(cevrolet, BMW));
// 11-masala
// let cevrolet = ["matiz", "tiko", "damas", "jentra"];
// function massivlarnibirlashtirish(cevrolet, element) {
//   let result = cevrolet.includes(element);
//   return result;
// }
// console.log(massivlarnibirlashtirish(cevrolet, "damas"));
// 12-masala
// let cevrolet = ["matiz", "tiko", "damas", "jentra"];
// function massivlarnibirlashtirish(cevrolet, element) {
//   let result = cevrolet.sort();
//   return result;
// }
// console.log(massivlarnibirlashtirish(cevrolet));
// 13-masala
// let davlatlar = ["xitoy", "korea", "yaponiya", "germaniya"];
// function tartibraqamTopish(davlatlar, element) {
//   let result = davlatlar.indexOf(element);
//   return result;
// }
// console.log(tartibraqamTopish(davlatlar, "xitoy"));
// 14-masala
// let davlatlar = ["xitoy", "korea", "yaponiya", "germaniya"];
// function tartibraqamTopish(davlatlar) {
//   let result = davlatlar.splice(1, 3);
//   return result;
// }
// console.log(tartibraqamTopish(davlatlar));
// 15-masala
// let davlatlar = ["xitoy", "korea", "yaponiya", "germaniya"];
// function tartibraqamTopish(davlatlar) {
//   let result = davlatlar.splice(0, davlatlar.length - 2);
//   return result;
// }
// console.log(tartibraqamTopish(davlatlar));
// 16-masala
// let viloyatlar = ["fargona", "andijon", "buxoro", "samarkand"];
// function elementqoshish(viloyatlar, element1, element) {
//   viloyatlar.push(element);
//   viloyatlar.unshift(element1);
//   return viloyatlar;
// }
// console.log(elementqoshish(viloyatlar, "jizzax", "sirdaryo"));
// 17-masala
// let viloyatlar = ["fargona", "andijon", "buxoro", "samarkand"];
// function elementqoshish(viloyatlar) {
//   let first = viloyatlar[0];
//   let last = viloyatlar[viloyatlar.length - 1];
//   viloyatlar[viloyatlar.length - 1] = first;
//   viloyatlar[0] = last;
//   return viloyatlar;
// }
// console.log(elementqoshish(viloyatlar));
// 18-masalal
// let daraxt = ["chinor", "terak", "tol"];
// function elementlarnitozalash(daraxt) {
//   let result = daraxt.splice();
//   return result;
// }
// console.log(elementlarnitozalash(daraxt));
// 19-masala
// let daraxt = ["chinor", "terak", "tol"];
// let result = daraxt;
// function elementlarnitozalash(daraxt) {
//   let resul = daraxt;
//   return resul;
// }
// console.log(elementlarnitozalash(result));
// 20-masala
// let gullar = ["alirgul", "chinnigul", "lola", "lilya"];
// function takrorlash2marttadan(gullar) {
//   for (let i = 0; i < gullar.length; i++) {
//     console.log(gullar[i]);
//     console.log(gullar[i]);
//   }
//   return gullar;
// }
// // console.log(takrorlash2marttadan(gullar));
// // 21-masala
// let sonlar = [1, 2, 3, 4, 5, 37564, 6, 7, 8, 543, 546];
// function engkattasi(sonlar) {
//   let max = sonlar[0];
//   for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] > max) {
//       max = sonlar[i];
//     }
//   }
//   return max;
// }
// console.log(engkattasi(sonlar));
// 22-masala
// let sonlar = [12, 43, 23, 87, , 90, 50, 34, 39];
// function engkattasi(sonlar) {
//   let min = sonlar[0];
//   for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] < min) {
//       min = sonlar[i];
//     }
//   }
//   return min;
// }
// console.log(engkattasi(sonlar));

// sortta ishlab kordim

// sonlar.sort(function (a, b) {
//   return a - b;
// });
// console.log(sonlar);
// console.log(sonlar[sonlar.length]);
// 23 - masala
// let sonlar = [2, 32, 43, 654, 32];
// function ortacjaQiymat(sonlar) {
//   let result = 0;
//   for (let i = 0; i < sonlar.length; i++) {
//     result += sonlar[i];
//   }
//   return result / sonlar.length;
// }
// console.log(ortacjaQiymat(sonlar));
// 24-masala
// let sonlar = [2, 32, 43, 654, 32];
// function teskaritartibda(sonlar) {
//   sonlar.reverse();
//   return sonlar;
// }
// console.log(teskaritartibda(sonlar));
// 25-masala
// let burunsonlar = [1, 23, 56, 566, 43, -8, -4, 12, -678];
// function faqatmusbat(sonlar) {
//   let musbatlari = [];
//   for (let i = 0; i < burunsonlar.length - 1; i++) {
//     if (sonlar[i] > 0) {
//       musbatlari.push(sonlar[i]);
//     }
//   }
//   return musbatlari;
// }
// console.log(faqatmusbat(burunsonlar));
// 26-masala
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 7];
// function marttakopaytirish(sonlar) {
//   let marttakopmassiv = [];
//   let result;
//   for (let i = 0; i < sonlar.length; i++) {
//     result = 2 * sonlar[i];
//     marttakopmassiv.push(result);
//   }
//   return marttakopmassiv;
// }
// console.log(marttakopaytirish(sonlar));
// 27-masala
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 7];
// function marttakopaytirish(sonlar) {
//   let marttakopmassiv = [];
//   let result;
//   for (let i = 0; i < sonlar.length; i++) {
//     result = sonlar[i] ** 2;
//     marttakopmassiv.push(result);
//   }
//   return marttakopmassiv;
// }
// console.log(marttakopaytirish(sonlar));
// 28-masala
// let tumanlar = ["oltiariq", "rishton", "bagdod", "quvasoy", "qoshtepa"];
// function elementochirish(tumanlar, element) {
//   tumanlar.splice(1, element);
//   return tumanlar;
// }
// console.log(elementochirish(tumanlar, 2));

// 29-masala
// let tumanlar = ["oltiariq", "rishton", "bagdod", "quvasoy", "qoshtepa"];
// function tekshirish(tumanlar, element) {
//   let result;
//   result = tumanlar.indexOf(element);
//   return result;
// }
// console.log(tekshirish(tumanlar, "oqboyra"));
// 30 - masala ?
// 31-masala
// let sonlar = [2, 21, 38, 54, 4];
// function ortacjaQiymat(sonlar) {
//   let result = 0;
//   for (let i = 0; i < sonlar.length; i++) {
//     result += sonlar[i];
//   }
//   return result;
// }
// console.log(ortacjaQiymat(sonlar));
// 32-masala
// let sonlar = [2, 21, 38, 54, 4];

// sonlar.sort(function (a, b) {
//   return b - a;
// });
// console.log(sonlar);
// 33-masala
// let sonlar = [1, 2, 3, 4, 5, 6];
// let son = [7, 8, 9, 10, 11];
// function birlashtirish(son1, son2) {
//   let result = son1.concat(son2);
//   return result;
// }
// console.log(birlashtirish(sonlar, son));
// 34-masala
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 7];
// function marttakopaytirish(sonlar) {
//   let marttakopmassiv = [];
//   let result;
//   for (let i = 0; i < sonlar.length; i++) {
//     result = sonlar[i] + 10;
//     marttakopmassiv.push(result);
//   }
//   return marttakopmassiv;
// }
// console.log(marttakopaytirish(sonlar));
// 35-masala
// let son = [12, 3, 43, 51, 73, 86, 92, 1, 33];
// son.sort(function (a, b) {
//   return a - b;
// });
// console.log(son);

//  Massiv metodlariga oid masalalar.
// Quyidagi masalarni funksiyalar yordamida ishlang.

// 1-masala
// function elementqoshish(sonlar) {
//   sonlar.push    (32);
//   return sonlar;
// }
// const sonlar = [6, 44, 212, 443, 13, 34];
// console.log(elementqoshish(sonlar));
// 2-masala
// function elementolibtashlash(mamlakatlar) {
//   mamlakatlar.pop();
//   return mamlakatlar;
// }
// const mamlakatlar = ["Uzbekistan", "Germany","italiya", "Rassiya"];
// console.log(elementolibtashlash(mamlakatlar));
// 3-masala
// function boshidanelementolish(dengizlar) {
//   dengizlar.shift();
//   return dengizlar;
// }

// const dengizlar = ["orol d", "qizil d", "Kaspiy ", "tinch"];
// console.log(boshidanelementolish(dengizlar));
// 4-masala
// function boshigaelementqosh(viloyatlar) {
//   viloyatlar.unshift("Toshkent");
//   return viloyatlar;
// }
// const viloyatlar = ["Andijon", "Farg'ona", "Buxoro", "Xorazm"];
// console.log(boshigaelementqosh(viloyatlar));
// 5-masala
// function tekshiruv(kunlar) {
//   return kunlar.includes("yakshanba");
// }
// const kunlar = [
//   "dushanba",
//   "seshanba",
//   "chorshanba",
//   "payshanba",
//   "juma",
//   "shanba",
// ];
// console.log(tekshiruv(kunlar));
// 6-masala
// function tekshiruv(kunlar) {
//   return kunlar.indexOf("yakshanba");
// }
// const kunlar = [
//   "dushanba",
//   "seshanba",
//   "chorshanba",
//   "payshanba",
//   "juma",
//   "shanba",
//   "yakshanba",
// ];
// console.log(tekshiruv(kunlar));
// 7-masala
// function oxirgiindex(mashina) {
//   return mashina.lastIndexOf("BMW");
// }
// const mashina = [
//   "BMW",
//   "Mercedes",
//   "Audi",
//   "Honda",
//   "lambargini",
//   "ferarri",
//   "BMW",
//   "koinigsek",
// ];
// console.log(oxirgiindex(mashina));
// 8-masala
// function masulsonniochirish(sonlar) {
//   sonlar.splice(1, 2, 6, 0);
//   return sonlar;
// }
// const sonlar = [1, 3, 4, 5, 9];
// console.log(masulsonniochirish(sonlar));
// // 9-masala
// function oxirigaqoshish(unverlar) {
//   unverlar.push("MIT");
//   return unverlar;
// }
// const unverlar = ["Diplomatiya", "FARDU", "ADU"];
// console.log(oxirigaqoshish(unverlar));
// // 10-masala
// function oxirigaqoshish(unverlar) {
//   unverlar.pop();
//   return unverlar;
// }
// const unverlar = ["Diplomatiya", "FARDU", "ADU", "MIT"];
// console.log(oxirigaqoshish(unverlar));
// 11-masala
// function oxirgiindex(mashina) {
// mashina.shift();
//   return mashina;
// }

// const mashina = [
//   "BMW",
//   "Mercedes",
//   "Audi",
//   "Honda",
//   "lambargini",
//   "ferarri",
//   "BMW",
//   "koinigsek",
// ];
// console.log(oxirgiindex(mashina));
// 12-masala
// function tekshiruv(kunlar) {
//   kunlar.unshift("dushanba");
//   return kunlar;
// }
// const kunlar = [
//   "seshanba",
//   "chorshanba",
//   "payshanba",
//   "juma",
//   "shanba",
//   "yakshanba",
// ];
// console.log(tekshiruv(kunlar));
// 13-masala
// function oquvchilartekshiruvi(sinf) {
//   return sinf   .includes("Anvar");
// }
// const sinf = ["Anvar", "Dilshod", "Dilshoda", "Temurjn", "Polat"];
// console.log(oquvchilartekshiruvi(sinf));
// 14-masala
// function oquvchilartekshiruvi(sinf) {
//   return sinf.indexOf("Anvar");
// }
// const sinf = ["Anvar", "Dilshod", "Dilshoda", "Temurjn", "Polat"];
// console.log(oquvchilartekshiruvi(sinf));
// 15-masala
// function talabalar(gurux) {
//   return gurux.lastIndexOf("Anvar");
// }

// const gurux = ["Anvar", "Dilshod", "Dilshoda", "Temurjn", "Anvar", "Polat"];
// console.log(talabalar(gurux));
// 16 - masala;
// function talabalar(gurux) {
//   return gurux.splice(0, 1);
// }

// const gurux = ["Anvar", "Dilshod", "Dilshoda", "Temurjn", "Anvar", "Polat"];
// console.log(talabalar(gurux));

// Asosiy metodlarga oid masala
// 1-masala

// let sonlar = [1, 2, 3, 4, 5];
// function uzunligi(sonlar) {
//   return sonlar.length;
// }
// console.log(uzunligi(sonlar));
// 2-masala
// let sonlar = [12, 13, 11, 14, 15, 18, 10];
// function tostring(sonlar) {
//   let result = sonlar.toString();
//   return sonlar;
// }
// console.log(sonlar);
// 3-masala
// let sonlar = [12, 13, 11, 14, 15, 18, 10];
// function tostring(sonlar) {
//   let result = sonlar.Join(" ,");
//   return sonlar;
// }
// console.log(sonlar);
// 4-masala
// let mashina = ["bmw", "audi", "mers", "mers"];
// function elementQoshish(mashina, element) {
//   mashina.push(element);
//   return mashina;
// }
// console.log(elementQoshish(mashina, "ferari"));
// 5-masala
// let mashina = ["bmw", "audi", "mers", "mers"];
// function elementolish(mashina) {
//   mashina.pop();
//   return mashina;
// }
// console.log(elementQoshish(mashina));
// 6-Masala
// let mashina = ["bmw", "audi", "mers", "mers"];
// function elementolish(mashina) {
//   mashina.shift();
//   return mashina;
// }
// console.log(elementQoshish(mashina));
// 7-masala
// let mashina = ["bmw", "audi", "mers", "mers"];
// function elementQoshish(mashina, element) {
//   mashina.unshift(element);
//   return mashina;
// }
// console.log(elementQoshish(mashina, "ferari"));
// 8-masala
// let mashina = ["bmw", "audi", "mers", "mers"];
// let sonlar = [12, 22, 11, 3, 45365767, 56457, 342342];
// function elementQoshish(mashina) {
//   let result = mashina.concat(sonlar, "rolsroys");
//   return result;
// }
// console.log(elementQoshish(mashina));
// 9-masala
// let sonlar = [12, 21, 3432, 345, 432, 2, 3, 5, 67, 2341, 1234, 4323, 45, 222];
// function splicegaoid(sonlar, element) {
//   let result = sonlar.splice(2, element, 23);
//   return result;
// }
// console.log(splicegaoid(sonlar, 10));
// 10-masala
// let sonlar = [12, 21, 3432, 345, 432, 2, 3, 5, 67, 2341, 1234, 4323, 45, 222];
// function splicegaoid(sonlar, element) {
//   let result = sonlar.slice(2, element);
//   return result;
// }
// console.log(splicegaoid(sonlar, 5));
// 11-masala
// let davlatlar = [
//   "Ozbekiston",
//   "qizgiziston",
//   "tojikiston",
//   "turkmaniston",
//   "qozogsiston",
// ];
// function uzunlicaniqlash(davlatlar) {
//   let result = davlatlar.length;
//   return result;
// }
// console.log(uzunlicaniqlash(davlatlar));
// 12-masala
// let son = [32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 756];
// function stringgaoidmasaa(son) {
//   let result = son.toString();
//   return result;
// }
// console.log(stringgaoidmasaa(son));
// 13-masala
// let son = [32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 756];
// function stringgaoidmasaa(son) {
//   let result = son.join(" ");
//   return result;
// }
// console.log(stringgaoidmasaa(son));
// 14-masala
// let son = [32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 756];
// function stringgaoidmasaa(son) {
//   son.push(11111);
//   son.push(222222);
//   return son;
// }
// console.log(stringgaoidmasaa(son));
// 15-masla
// let son = [32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 756];
// function stringgaoidmasaa(son) {
//   son.pop();
//   son.pop();
//   return son;
// }
// console.log(stringgaoidmasaa(son));
// 16-masala
// let son = [32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 756];
// function stringgaoidmasaa(son) {
//   son.shift();
//   son.shift();
//   return son;
// }
// console.log(stringgaoidmasaa(son));
// 17 - masala
// let son = [32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 756];
// function stringgaoidmasaa(son) {
//   son.unshift(11111);
//   son.unshift(222222);
//   return son;
// }
// console.log(stringgaoidmasaa(son));
// 18-masala
// let davlatlar = [
//   "Ozbekiston",
//   "qizgiziston",
//   "tojikiston",
//   "turkmaniston",
//   "qozogsiston",
// ];
// let mashina = ["bmw", "audi", "mers", "mers"];
// let son = [32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 756];
// function qoshish(davlatlar, mashina, son) {
//   let result = davlatlar.concat(mashina, son);
//   return result;
// }
// console.log(qoshish(davlatlar, mashina, son));
// 19-masalal
// let mashina = [12, 11, 3, 4, 90, 87, 54, 7, 4533, 4342];
// function elementolish(mashina, element) {
//   mashina.splice(0, element);
//   return mashina;
// }
// console.log(elementolish(mashina, 2));
// 20-masala
// let mashina = [12, 11, 3, 4, 90, 87, 54, 7, 4533, 4342];
// function elementolish(mashina, element) {
//   mashina.slice(0, element);
//   return mashina;
// }
// console.log(elementolish(mashina, 2));

// Search metodlariga oid masalalar.
// 1-masala
// let davlatlar = [
//   "Ozbekiston",
//   "qizgiziston",
//   "tojikiston",
//   "turkmaniston",
//   "qozogsiston",
// ];
// function uzunlicaniqlash(davlatlar, element) {
//   let result = davlatlar.includes(element);
//   return result;
// }
// console.log(uzunlicaniqlash(davlatlar, "qoroqolpoq"));
// 2-masalal
// let davlatlar = [
//   "Ozbekiston",
//   "qizgiziston",
//   "tojikiston",
//   "turkmaniston",
//   "qozogsiston",
//   "qizgiziston",
// ];
// function uzunlicaniqlash(davlatlar, element) {
//   let result = davlatlar.indexOf(element);
//   return result;
// }
// console.log(uzunlicaniqlash(davlatlar, "qizgiziston"));
// 3-masalal
// let davlatlar = [
//   "Ozbekiston",
//   "qizgiziston",
//   "tojikiston",
//   "turkmaniston",
//   "qozogsiston",
//   "qizgiziston",
// ];
// function uzunlicaniqlash(davlatlar, element) {
//   let result = davlatlar.lastIndexOf(element);
//   return result;
// }
// console.log(uzunlicaniqlash(davlatlar, "qizgiziston"));
// 4-masala
// let son = [12, 2, 3, 1235, 54, 65, 34, 33, 11];
// let result = son.find(function (value) {
//   return value % 2 == 0;
// });

// console.log(result);
// 5-masala
// let son = [12, 2, 3, 1235, 54, 65, 34, 33, 11];
// let result = son.findIndex(function (value, index) {
//   return value % 2 == 0 && index > 2;
// });

// console.log(result);
// 6-masalal
// let viloyatlar = ["fargona", "andijon", "namangan", "toshkent"];
// function includesda(viloyatlar, element) {
//   let result = viloyatlar.includes(element);
//   return result;
// }
// console.log(includesda(viloyatlar, "fargona"));
// 7-masalal
// let viloyatlar = ["fargona", "andijon", "namangan", "fargona", "toshkent"];
// function includesda(viloyatlar, element) {
//   let result = viloyatlar.indexOf(element);
//   return result;
// }
// console.log(includesda(viloyatlar, "fargona"));
// 8-masala
// let viloyatlar = ["fargona", "andijon", "namangan", "fargona", "toshkent"];
// function includesda(viloyatlar, element) {
//   let result = viloyatlar.lastIndexOf(element);
//   return result;
// }
// console.log(includesda(viloyatlar, "fargona"));
// 9-masala
// let son = [12, 23, 34, 4, 55, 667, 78, 89, 90, 123, 234, 345];
// let result = son.find(function (value) {
//   return value > 100;
// });
// console.log(result);
// 10-masala
let son = [12, 23, 34, 4, 55, 667, 78, 89, 90, 123, 234, 345];
let result = son.findIndex(function (value) {
  return value < 50;
});
console.log(result);
