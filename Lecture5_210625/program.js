// Reduce Function
// Find the maximum of Array


//Direct method for loop


let arr = [5, 4, 3, 8, 12, 72];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);