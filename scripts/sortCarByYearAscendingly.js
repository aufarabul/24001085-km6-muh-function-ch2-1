function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const resultAs = [...cars];
  //
  // Tulis code-mu disini
  for (let i = 1; i < resultAs.length; i++) {
    const oldCar = resultAs[i];
    let j = i - 1;
    while (j >= 0 && resultAs[j].year > oldCar.year) {
      resultAs[j + 1] = resultAs[j];
      j--;
    }
    resultAs[j + 1] = oldCar;
  }
  // Rubah code ini dengan array hasil sorting secara ascending

  return resultAs;
}
