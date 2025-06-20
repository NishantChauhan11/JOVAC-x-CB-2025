
// program on Higher order function

const list1 = [4, 8, 12, 16];
const list2 = [5, 10, 15, 20];

const findSquare = function (data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(data[i] * data[i]);
    }
    return result;
}

console.log(findSquare(list1));
console.log(findSquare(list2));

const findHalf = function (data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        result.push(data[i] / 2);
    }
    return result;
}

console.log(findHalf(list1));
console.log(findHalf(list2));