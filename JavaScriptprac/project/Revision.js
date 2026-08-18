// let a = 10;
// let b = "10";

// console.log(a == b); // true, because == performs type coercion
// console.log(a === b); // false, because === checks for both value and type
// console.log(a + 5);  // 15, addition operator
// console.log(a>5 && a<20); // true, because both conditions are true.
// ----------------------------------------------------------------------------------------------------

//if else statement to check marks and print grade.
// let marks =85;

// if(marks>=90){
//     console.log("Grade A");
// }else if(marks>=80){
//     console.log("Grade B");
// }else if(marks>=70){
//     console.log("Grade C");
// }else{
//     console.log("Grade D");
// }
// ------------------------------------------------------------------------------------------------------


// for loop to print 1 to 5

// for(let i=1; i<=5; i++){
//     console.log(i);
// }
// -------------------------------------------------------------------------------------------------------


//While loop.

// let num = 1;
// while(num<=10){
//     console.log(num);
//     num++;
// }

// --------------------------------------------------------------------------------------------------------


//function decalration  & expression.

// function add(x,y){
//     return x+y;
// }
// console.log(add(5,10)); // 15

// let multiply = function(x,y){
//     return x*y;
// }
// console.log(multiply(5,10)); // 50

// --------------------------------------------------------------------------------------------------------

//Function declaration with default parameters.

// const greet = (name = "Guest") => `hello ${name}`;
// console.log(greet());
// console.log(greet("Akshansh"));   

// --------------------------------------------------------------------------------------------------------

let nums = [1,2,3,4,5];

const double = nums.map(num => num * 2);
const evens = nums.filter(num => num % 2 === 0);
const sum = nums.reduce((total, num) => total + num, 0);

console.log(double); // [2, 4, 6, 8, 10]
console.log(evens); // [2, 4]
console.log(sum); // 15