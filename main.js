//1.length
const cars = ['Ford', 'Toyota', 'Tesla', 'chevy'];
console.log('array length', cars.length);

//. concat()
const moreCars = ['VW', 'hyundai', 'BMW', 'Honda'];

const totalCars = cars.concat(moreCars);
console.log('all the cars', totalCars);

console.log('index', totalCars.indexOf('Honda'));
console.log('index', totalCars.lastIndexOf('Ford'));

let stringOfCars = totalCars.join();
console.log('joined', stringOfCars);

let carsFromString = stringOfCars.split();
console.log('allcars', carsFromString);

let carsInReverse = totalCars.reverse();
console.log('backwards', carsInReverse);

let sorted = carsInReverse.sort();
console.log('reverse'.sorted);

// ajfklajkl;fja;sfj;ajfk;asd
