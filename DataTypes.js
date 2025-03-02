// Declare variables and check their data types
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 25;
let isMarried = false;
let year = 2025;

console.log(typeof firstName); // string
console.log(typeof lastName);  // string
console.log(typeof country);   // string
console.log(typeof city);      // string
console.log(typeof age);       // number
console.log(typeof isMarried); // boolean
console.log(typeof year);      // number

// Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false

// Truthy values
console.log(1);       // truthy
console.log("Hello"); // truthy
console.log([]);      // truthy

// Falsy values
console.log(0);       // falsy
console.log("");      // falsy
console.log(null);    // falsy

// Logical expressions
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3));         // false
console.log(!(4 < 3));         // true
console.log(!(false));         // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4'));     // true

// Calculate the area of a triangle
// let base = prompt("Enter base of the triangle:");
// let height = prompt("Enter height of the triangle:");
// let area = 0.5 * base * height;
// console.log(`The area of the triangle is: ${area}`);

// Check driving eligibility
// let birthYear = prompt("Enter your birth year:");
// let currentYear = new Date().getFullYear();
// let userAge = currentYear - birthYear;

// if (userAge >= 18) {
//     console.log(`You are ${userAge}. You are old enough to drive.`);
// } else {
//     console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years.`);
// }

// String manipulations
let challenge = "30 Days Of JavaScript";
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.slice(3));
console.log(challenge.slice(0, 2));
console.log(challenge.includes("Script"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(challenge.startsWith("30 Days"));
console.log(challenge.endsWith("JavaScript"));

// Generate a random number between 0 and 100
console.log(Math.floor(Math.random() * 101));

// Compare two numbers
let a = 10, b = 20;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

console.log(a > b ? "a is greater than b" : "a is less than b");

// Grading system
let scores = 85;
if (scores >= 80 && scores <= 100) {
    console.log("A");
} else if (scores >= 70 && scores <= 89) {
    console.log("B");
} else if (scores >= 60 && scores <= 69) {
    console.log("C");
} else if (scores >= 50 && scores <= 59) {
    console.log("D");
} else {
    console.log("F");
}
