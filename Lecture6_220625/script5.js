// CUURRING IN JAVASCRIPT

// NORMAL APPROACH
// function sumOfAll(a,b,c){
//     return a+b+c;
// }
// console.log(sumOfAll(20,50,30));

// currying approach

// function firstNumber (a){
//     return function (b){
//         return function (c){
//             return a+b+c;

//         }
//     }
// }

// console.log(firstNumber(10)(20)(30));


// EXAMPLE OF CURRING : Coffee Order

function chooseSize(size) {
  return function(type) {
    return function(sugar) {
      return `Coffee Size: ${size}, Type: ${type}, Sugar: ${sugar}`;
    }
  }
}

console.log(chooseSize("Medium")("Cappuccino")("1 Spoon"));


