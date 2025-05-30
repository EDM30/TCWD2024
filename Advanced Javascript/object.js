//reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };


//context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
}

object4.a();


//instantiation
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        console.log('wizard', this);
        super(name, type);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }   
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');


























