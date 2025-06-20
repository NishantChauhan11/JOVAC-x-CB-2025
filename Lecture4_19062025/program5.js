//filter function

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isEven(x) {
    return x % 2 === 0;
}

const output = arr.filter(isEven);
console.log(output);