// Reduce Function

// REDUCE SYNTAX

//let arr = [5,6,7,8,9]
//const output  =  arr.reduce(function(acc, curr){

//})

// Sum of Array by using reduce.


let arr = [5,6,7,8,9]
const output  =  arr.reduce(function(acc, curr){
      acc = acc+curr;
      return acc;
},0)

console.log(output);