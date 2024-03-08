function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  const allCars = cars;

  allCars.map((cars) => {
    if (cars.available == true) {
      result.push(cars);
    }
  });
  // Tulis code-mu disini

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
