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

