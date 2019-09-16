const { LinkedList, Node } = require('../Linked\ Lists/LinkedListES6.js');

class animalList extends LinkedList {
  enqueue(node) {
    let head = this.head;
    if(head == null){
      head.next = node;
    }
    else {

    }

  }
}

class Cat {
  constructor(val) {
    this.catName = val;
    this.recieved = new Date();
  }

  getCat(){
    return new Node(this);
  }
}

class Dog {
  constructor() {
    this.catName = val;
    this.recieved = new Date();
  }

  getDog() {
    return new Node(this);
  }
}


class AnimalShelter {
  constructor() {
    this.catList = new LinkedList();
    this.dogList = new dogList();
  }

  addAnimal(animal) {
    if(animal instanceOf Cat){
      catList.
    }
  }


}



const linked = new LinkedList();
