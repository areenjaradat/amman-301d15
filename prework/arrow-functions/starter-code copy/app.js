'use strict';

// STEP 1
// This is a standard function expression. You may also be familiar with function declarations, which begin with the "function" keyword.
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The old way:', theOldWay('Code 301'));


// STEP 2
// We can refactor our first function to use an arrow function.
// The word "function" is removed and an arrow is added in between the parameter and the opening curly brace

// in this step modify standerd function expression by remove function word and add arrow
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('The new way:', theNewWay('Code 301'));


// STEP 3
// When we have one parameter, we can omit the parentheses

//if we heve one parameter we can remove the parentheses
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
// If the code block contains a single line of code, we can write everything on one line
// We no longer need the curly braces and the return is implicit
// Without an arrow function, we need to explicitly type "return"

// here if the function contain in single line of code so no need to curly braces and we can remove return it will return by default
const oneLiner = course => `I cam currently enrolled in ${course}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
// What if we have multiple parameters?
// In a function expression, they all go in the parentheses

// here in this function we have more than one parameter so need the parentheses
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Let\'s do some math:', add(4, 5));


// STEP 6
// When we have multiple parameters, they must be wrapped in parentheses
// We can only remove the parentheses when there is a single parameter

// like steps up we can remove function word, curly braces and the return
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
// What if we have multiple lines of code?
// We need to use a code block

// if there is one more line of code so have to add curly braces
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
// The way an object is returned is different with an arrow function, too.
// Here is how we return an object without arrow functions

//in this function return object 
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
// With an arrow function, we need to wrap our object in parentheses
// Otherwise, it will be interpreted as a code block

//in this function return object  with removing the curly braces and parentheses
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.

let sum=(a,b,c,d)=> `${a + b + c + d}`;

// let sum = function(a, b, c, d) {
//   return a + b + c + d;
// };

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sum(1, 2, 3, 4));


// let objectLit = function() {
//   return {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//   };
// };
let objectLit =()=>({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
});
// TODO: Uncomment the following line of code to see the output in the browser console
console.log(objectLit());


// let sumAndProduct = function(a, b) {
//   let sum = a + b;
//   let product = a * b;
//   return [sum, product];
// };
let sumAndProduct = (a, b) =>{
  let sum = a + b;
  let product = a * b;
  return [sum, product];
};
// TODO: Uncomment the following line of code to see the output in the browser console
console.log(sumAndProduct(3, 9));


// let message = function(name) {
//   return `Hello, ${name}!`;
// };
let message = name=> `Hello, ${name}!`;
// TODO: Uncomment the following line of code to see the output in the browser console
console.log(message('Allie'));


let Student = function(name, age, hometown) {
  this.name = name;
  this.age = age;
  this.hometown = hometown;
};

// let Student = (name, age, hometown)=> {
//   this.name = name;
//   this.age = age;
//   this.hometown = hometown;
// }; 
// let joe = student('Joe', 'Schmoe', 100);

let joe = new Student('Joe', 'Schmoe', 100);


// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
console.log(joe);

// TODO: After viewing the previous console.log(), return the code to a working state.



// Student.prototype.greeting = function() {
//   return `Hi, my name is ${this.name}`;
// };
Student.prototype.greeting = ()=> `Hi, my name is ${this.name}`;

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
console.log(joe.greeting());

// TODO: After viewing the previous console.log(), return the code to a working state.





// Student.courseName = () {
//   return 'This student is enrolled in Code 301.';
// };

Student.courseName = ()=>'This student is enrolled in Code 301.';

// TODO: Uncomment the following line of code to see the output in the browser console
console.log(Student.courseName());



// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function() {
  console.log(this);
};

// Student.prototype.scope = ()=> console.log(this);


// TODO: Uncomment the following line of code to see the output in the browser console
//here we call scope() it have console.log inside console.log will give undefined 

//console.log(joe.scope());

joe.scope()

Student.prototype.scopeArrow = () => console.log(this);

// TODO: Uncomment the following line of code to see the output in the browser console

//here we call scopeArrow() it have console.log inside console.log will give undefined 

//console.log(joe.scopeArrow());

joe.scopeArrow()

// TODO: Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?
// the parameters stroed before
// 2. What is "this" when joe.scopeArrow() is invoked?
// global window object
// 3. Explain why "this" is different when an arrow function is used.
//in constructor function this mean the object itself ,in arrow function it has no this it will console the global window object
