// let message = setTimeout(imAsync, 2000);

// function imAsync() {
//   return "Hola promesas";
// }

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (confirm("¿esta promesa e cumplio ?")) return resolve("hola");
//     return reject(new Error("hubo un error"));
//   }, 2000);
// });

// // promise.then(console.log).catch(console.log);
// promise.then(
//   function (resultado) {
//     console.log(resultado);
//   },
//   function (error) {
//     console.log("algo salio mal");
//     console.log(error);
//   }
// );

function dummy() {
  if (Math.floor(Date.now() / 1000) % 2 == 0)
    return Promise.resolve("Hello world");
  return Promise.reject("Error");
}

dummy().then(console.log).catch(console.log);
