//Evaluate these:
//#1
console.log([2] === [2]); // false - arrays are objects, compared by reference
console.log({} === {}); // false - objects are compared by reference

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

console.log('object1.a:', object1.a); // 4
console.log('object2.a:', object2.a); // 4
console.log('object3.a:', object3.a); // 4
console.log('object4.a:', object4.a); // 5

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
}

class Cow extends Mammal {
    constructor(name, color) {
        super(name, 'Cow', color);
    }

    sound() {
        console.log(`Moo! I'm ${this.name}, a ${this.color} ${this.type}!`);
    }
}

// Create a cow instance
const myCow = new Cow('Bessie', 'brown');
myCow.sound(); // Output: Moo! I'm Bessie, a brown Cow!
