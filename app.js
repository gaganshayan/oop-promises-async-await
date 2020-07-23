// Object Oriented Programming

//Prototypal Inheritance

const cat = {
    name: "Mozy",
    likesTreats: true,
    gender: "girl"
};

const catTwo = {
    name: 'Iyva',
    color: 'gray'
};

catTwo.__proto__ = cat;

console.log(cat); 
console.log(catTwo);

console.log(catTwo.likesTreats);
console.log(catTwo.name);

// Constructor Functions
function User(name) {
    // this
    this.name = name;

    // return this
}

let adam = new User('Adam');
let pete = new User('Pete');

console.log(adam.name);
console.log(pete.name);

function NBAPlayer(name, team, threePointShooter) {
    // this is = {}
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);

console.log(steph);
console.log(steph.name);

function Car(name, style, engine) {

    this.name = name;
    this.style = style;
    this.engine = engine;
}

let lambo = new Car('lambo', 'coupe', 'V10');
let toyota = new Car('toyota', 'sedan', 'V4');
let hummer = new Car('hummer', 'SUV', 'V8');

console.log(lambo);
console.log(toyota);
console.log(hummer);