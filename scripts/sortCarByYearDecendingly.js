function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const resultDes = [...cars];

  // Tulis code-mu disini
  //

  for (let i = 1; i < resultDes.length; i++) {
    const oldCar = resultDes[i];
    let j = i - 1;
    while (j >= 0 && resultDes[j].year < oldCar.year) {
      resultDes[j + 1] = resultDes[j];
      j--;
    }
    resultDes[j + 1] = oldCar;
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return resultDes;
}
