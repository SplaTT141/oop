import { Car } from "./js/Car.js";

const volvo = new Car("Volvo S40", "red", 55);
const zapas = new Car("Zapas", "white", 35);
console.log(zapas.intro());
console.log(volvo.intro());

zapas.refill(4.2);
console.log(zapas);
