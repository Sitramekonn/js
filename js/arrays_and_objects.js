// Sample Arrays and Objects
let fruits = [
    { name: 'Apple', color: 'Red', price: 1.2 },
    { name: 'Banana', color: 'Yellow', price: 0.5 },
    { name: 'Grape', color: 'Purple', price: 2.0 }
];

// Task 1: Loop through the array and log the name of each fruit
// Using forEach to iterate over the array
fruits.forEach(fruit => {
    console.log(fruit.name);  // Logs the name of each fruit (Apple, Banana, Grape)
});

// Task 2: Add a new fruit to the array
fruits.push({ name: 'Orange', color: 'Orange', price: 1.5 });
console.log(fruits);  // The new array will include Orange

// Task 3: Filter the array to get only fruits that cost more than $1
let expensiveFruits = fruits.filter(fruit => fruit.price > 1);
console.log(expensiveFruits);  // Logs Apple and Grape, since they cost more than 1

// Task 4: Create an object that represents a person
let person = {
    name: 'John Doe',
    age: 30,
    hobbies: ['reading', 'swimming', 'coding'],
    isEmployed: true
};

// Access properties of the object
console.log(person.name);  // Logs 'John Doe'
console.log(person.hobbies);  // Logs ['reading', 'swimming', 'coding']

// Task 5: Add a new hobby to the person's hobbies
person.hobbies.push('hiking');
console.log(person.hobbies);  // Logs the updated hobbies ['reading', 'swimming', 'coding', 'hiking']

// Task 6: Use a function to greet the person
function greetPerson(p) {
    console.log(`Hello, ${p.name}. You are ${p.age} years old.`);
}

greetPerson(person);  // Logs: Hello, John Doe. You are 30 years old.
