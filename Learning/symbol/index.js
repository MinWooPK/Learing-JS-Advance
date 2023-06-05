let simbolo = Symbol("hellooo world");
let simbolo2 = Symbol("hellooo world");
let obj = {};
obj[simbolo] = function () {
  console.log("mi nombre es un simbolo");
};
console.log(simbolo === simbolo2);
obj[simbolo]();
