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
    this.intro = function() {
        console.log(this.name + "'s are nice.");
    }
}

let lambo = new Car('lambo', 'coupe', 'V10');
let toyota = new Car('toyota', 'sedan', 'V4');
let hummer = new Car('hummer', 'SUV', 'V8');

console.log(lambo);
lambo.intro();
toyota.intro();
hummer.intro();
// console.log(toyota);
// console.log(hummer);

// Class
class Vehicle {
    constructor(year, make, model, color)   {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }   

    drive() {
        console.log('Vroom');
    }
    intro() {
        console.log('This car is a ' + this.make + ' ' + this.model);
    }
}

let tesla = new Vehicle(2020, 'Tesla', 'Model S', 'red');
console.log(tesla);
tesla.drive();
tesla.intro();

class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }

    intro() {
        console.log(`My name is ${this.name} and my username is @${this.username}`);
    }
}

//https://api.github.com/users/gaganshayan
fetch('https://api.github.com/users/gaganshayan')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    let githubURL = data.url;
    //console.log(githubURL);
    let githubUsername = data.login;
    //console.log(githubUsername);
    let githubName = data.name;
    //console.log(githubName);

    let shayan = new GithubProfile(githubUsername, githubName, githubURL);
    console.log(shayan);

    shayan.intro();
})