const { Queue } = require('../Linked\ Lists/queue.js');
const { Node } = require('../Linked\ Lists/LinkedListES6.js');

class Cat extends Node {
  constructor(name) {
    super(name);
    this.name = name;
    this.order;
  }
}

class Dog extends Node {
  constructor(name) {
    super(name);
    this.name = name;
    this.order;
    //this.recieved = new Date();
  }
}


class AnimalShelter {
  constructor() {
    this.catList = new Queue();
    this.dogList = new Queue();
    this.order = 0;
  }

  addAnimal(animal) {
    animal.order = ++this.order;
    if(animal instanceof Cat) {
      this.catList.enqueue(animal);
    }
    else {
      this.dogList.enqueue(animal);
    }
  }

  adoptAny() {
    if(this.catList.size == 0) {
      this.adoptCat();
    }
    else if(this.dogList.size == 0){
      this.adoptDog();
    }
    else {
      const oldCat = this.catList.peek();
      const oldDog = this.dogList.peek();

      if(oldCat.order < oldDog.order){
        return this.adoptCat();
      }
      else{
        return this.adoptDog();
      }
    }
  }

  adoptCat() {
    return this.catList.dequeue();
  }

  adoptDog() {
    return this.dogList.dequeue();
  }
}

const animals = new AnimalShelter();
animals.addAnimal(new Cat("Tabby"));

console.log(animals);
animals.addAnimal(new Dog("Spike"));
animals.addAnimal(new Cat("Spatz"));
animals.addAnimal(new Dog("Buttercup"));
animals.addAnimal(new Cat("Jerry"));
animals.addAnimal(new Dog("Toby"));
console.log(animals);

const animal = animals.adoptAny();
const animal2 = animals.adoptAny();
const animal3 = animals.adoptAny();

console.log(animal.name);
console.log(animal2.name);
console.log(animal3.name);

module.exports = { AnimalShelter, Queue };
