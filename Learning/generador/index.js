function* counter() {
  // console.log("Estoy aqui");
  // yield 1;
  // console.log("Ahora estoy aqui");
  // yield 2;
  for (var i = 1; i <= 5; i++) {
    yield i;
  }
}
let generator = counter();
// generator.next();
// generator.next();
// generator.next();
// console.log(generator.next());

function* retornador() {
  yield* counter();
  console.log("regrese");
  // return 3;
}

let g = retornador();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
