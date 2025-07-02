// MAIN FILE  

//  console.log("THIS IS MY MAIN FILE");

//  const {myName, sumOfTwoNumbers } = require("./sum.js");

// // console.log(obj.myName)

// console.log(myName)

// //obj.sumOfTwoNumbers(7,8);
// var a = 400;
// console.log(a);

////////////////////////////////////////////////////
//MJS
import { calculateSum } from "./sum.js";

//calculateSum(10,20);
// console.log(module.exports);

// INCREASE READABLIITY
// There is not need to import every single file.

const { myName, multiplyOfTwoNumbers, subOfTwoNumbers, sumOfTwoNumbers }= require("./calculate");

console.log(myName);

multiplyOfTwoNumbers(2,3);
subOfTwoNumbers(2,6);
sumOfTwoNumbers(10,20);