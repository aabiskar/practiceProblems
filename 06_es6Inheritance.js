class Mammal {
  constructor(startingPosition) {
    this.position;
  }

  walk(move) { // shorthand for saying 'walk: function() {}', works on objects too
    this.position += move; // shorthand for 'this.position = this.position + move'
  }

  getPosition() {
    return this.position;
  }
}

class Cheetah extends Mammal {
  constructor(startingPosition, age) {
    super(startingPosition);
    this.age = age;
  }

  run(time) {
    this.position += this.age * time;
  }
}

const myPetCheetah = new Cheetah(0, 10);

myPetCheetah.walk(5);
myPetCheetah.run(10);

console.log(myPetCheetah.getPosition());
