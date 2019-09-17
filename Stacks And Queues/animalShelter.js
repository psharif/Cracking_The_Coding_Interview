const { LinkedList, Node } = require('../Linked\ Lists/LinkedListES6.js');

class AnimalList extends LinkedList {
  enqueue(node) {
    if(this.head == null) {
      this.head = node;
    }
    else {
      let curr = this.head;
      while(curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  dequeue() {
    const animal = this.head;
    this.head = this.head.next;
    animal.next = null;
    return animal;
    this.size--;
  }

  peek() {
    const animal = this.head;
    return animal;
  }

  size() {
    return this.size();
  }
}

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
    this.catList = new AnimalList();
    this.dogList = new AnimalList();
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



/*
const animalList = new AnimalList();
animalList.enqueue(new Cat("Spot"));
animalList.enqueue(new Dog("George"));
animalList.enqueue(new Dog("Kit"));

animalList.print(animalList.getHead());

const animals = new AnimalList();
*/
