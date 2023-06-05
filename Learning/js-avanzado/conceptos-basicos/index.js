function hell() {
  let array = [1, 2, 3, 4];

  // for (let i = 0; i < array.length; i++) {
  //   if (i % 2 === 0) {
  //     console.log(array[i], "es inpar");
  //   } else {
  //     console.log(array[i]);
  //   }
  // }
  // console.log(array.length);
  // console.log(array);

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    console.log(element);
  }

  array.forEach(function (element) {
    console.log(element);
  });
}
