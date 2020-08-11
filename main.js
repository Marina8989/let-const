//let and const Exercise
//In this exercise, you’ll refactor some ES5 code into ES2015.

//ES5 Global Constants

// var PI = 3.14;
// PI = 42; // stop me from doing this!
const PI = 3.14;

// ES2015 Global Constants

/* Write an ES2015 Version */
//Quiz

//What is the difference between var and let?
     // var is function scoped and let is block scoped

//What is the difference between var and const?
   //var declarations are globally scoped or function scoped while const is block scoped
   //var variables can be updated and re-declared within its scope
   //const variables can neither be updated nor re-declared

//What is the difference between let and const?
   //variables declared with let can be re-assigned, but variables declared with const can't be

//What is hoisting?
   //Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local