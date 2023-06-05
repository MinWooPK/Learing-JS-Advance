// ejemplo con rquest-promise

// const request = require("request-promise");
// const promise = request("https://www.google.com");
// promise
//   .then(function () {
//     console.log("Terminé la petición");
//   })
//   .catch(function (err) {
//     console.log("errrorrr");
//   })
//   .finally(function (err) {
//     console.log("finalicee");
//   });
// console.log("Yo sucedo despueés");

// ejemplo con request
// const request = require("request");

// request("https://www.google.com", function () {
//    console.log("Terminé la petición");
// });

// console.log("Yo sucedo despueés");

// Ejemplo call back hell
// getEnvironmentData(function (x) {
//   getMoreData(x, function (y) {
//     getMoreData(y, function (z) { })
//   })
// })

// let promesa = new Promise(function (resolve, reject) {
//   resolve(10);
//   reject("algo salio mal");
// });

// Creando Promesas
// let request = require("request");

// function leerPagina(url) {
//   return new Promise(function (resolve, reject) {
//     request(url, function (error, response) {
//       if (error) return reject(error);
//       resolve(response);
//     });
//   });
// }

// let promesa = leerPagina("https://www.google.com");
// promesa
//   .then((r) => console.log("finalice en promesas"))
//   .catch((err) => console.log(err));

//Resolver múltiples promesas

// let p1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 500, "hola mundo")
// );
// let p2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 600, " segundo hola mundo")
// );

// function finalizado() {
//   console.log("todo finalizo!");
// }

// p1.then(function (resultado) {
//   console.log(resultado);
// });
// p2.then(function (resultado) {
//   console.log(resultado);
// });

// p1.then(function (resultado) {
//   console.log(resultado);
//   p2.then(function (resultado2) {
//     console.log(resultado2);
//     finalizado();
//   });
// });

// Promise.all([p1, p2])
//   .then(function (resultados) {
//     console.log(resultados);
//     finalizado();
//   })
//   .catch((err) => console.log(err));

// Promise.all([p1, p2])
//   .then(function (resultados) {
//     console.log(resultados);
//     finalizado();
//   })
//   .catch((err) => console.log(err));

// Promesa encadenada
// function primeraPromesa() {
//   return new Promise((resolve, reject) =>
//     setTimeout(resolve, 100, "hola mundo")
//   );
// }
// function segundaPromesa(r2) {
//   console.log(r2);
//   return new Promise((resolve, reject) =>
//     setTimeout(resolve, 100, " segundo hola mundo")
//   );
// }

// primeraPromesa()
//   .then(segundaPromesa)
//   .then(function (r) {
//     console.log(r);
//   });

// function finalizado() {
//   console.log("todo finalizo!");
// }

// async function suma(valor1, valor2) {
//   return valor1 + valor2;
// }

// async function calcualr() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 400, 5);
//   });
// }
// (async function () {
//   let promesa = await new Promise((resolve, reject) => {
//     setTimeout(resolve, 400, 5);
//   });
//   let promesa2 = await new Promise((resolve, reject) => {
//     setTimeout(resolve, 400, 10);
//   });
//   console.log(promesa + promesa2);
// })();

// async function showGitHubInfo() {
//   let response = await fetch("https://api.github.com/user/minwooPK");
//   let repos = await response.json();
//   console.log(repos);
// }
// showGitHubInfo();

// Manejar errores en promesas
// let promesa = fetch("https://api.github.com/user/minwooPK");

// promesa
//   .then(() => {})
//   .catch((err) => {
//     console.log(err);
//   });

// Bloques try y catch
(async function () {
  try {
    let promesa = await Promise.reject("ERROR");
    let promesa2 = await Promise.reject("ERROR");
  } catch (err) {
    console.log(err);
  }
})();
