// class (klase) -> object (objektas)
// blyno receptura -> blynas (valgomas)
// namo brezinys -> namas

class Dog {
  constructor(vardas, kailioSpalva) {
    this.name = vardas;
    this.furColor = kailioSpalva;
    this.age = 0;
    this.legsCount = 4;
    this.hasTail = true;
    this.isStanding = true;
  }

  hi() {
    return `Hi, my name is ${this.name}!`;
  }

  intro() {
    return `Hi, my name is ${this.name}, my fur is ${this.furColor} and I am ${this.age} years old.`;
  }

  birthday() {
    return `Happy birthday ${this.name}! Now you are ${++this.age} years old!`;
  }

  lostTail() {
    this.hasTail = false;
  }

  lostLeg() {
    if (this.legsCount > 0) {
      this.legsCount--;
    }
  }

  changePose() {
    this.isStanding = !this.isStanding;
  }

  changeFurColor(newColor) {
    this.furColor = newColor;
    return `${this.name} has ${this.furColor} fur color`;
  }
}

const rex = new Dog("Rex", "black");
const brisius = new Dog("Brisius", "white");

console.log(rex.name);
console.log(brisius.furColor);
console.log(rex.hi());
console.log(brisius.hi());
console.log(rex.intro());
console.log(brisius.intro());
console.log(brisius.birthday());
console.log(rex.birthday());

brisius.lostTail();
brisius.lostLeg();
brisius.changePose();
console.log(brisius);
console.log(brisius.changeFurColor("blue"));
