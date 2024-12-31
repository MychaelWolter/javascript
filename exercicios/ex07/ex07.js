const person = {
    firstName: "Mychael",
    lastName: "Wolter",
    age: "20",
    hobbies: ["assistir filme", "jogar bola", "dormir"],
    dog: {
        name: "simba",
        color: "black"
    }
};

const { 
    firstName, 
    lastName, 
    age: idade, 
    hobbies, 
    dog, 
    dog: { 
        name: dogName, 
        color: dogColor
    } 
} = person;

console.log(firstName);
console.log(lastName);
console.log(idade);
console.log(hobbies);

const playSoccer = person.hobbies[1];
console.log(playSoccer);

dog.name = "fred";
dog.color = "white";

console.log(dog.name);
console.log(dogName);

console.log(dog);
console.log(person);

// array of object

const all = [
    {
        id: 1,
        description: "estudar programação",
        isCompleted: true
    },
    {
        id: 2,
        description: "jogar bola",
        isCompleted: false
    },
    {
        id: 3,
        description: "treinar",
        isCompleted: false
    }
];

const descriptionOfLastAll = all[2];

console.log(descriptionOfLastAll);

console.log(all);