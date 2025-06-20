//Map function

function double(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

const arr = [1, 2, 3, 4];

const output = arr.map(double);
console.log(output);

const outputTriple = arr.map(triple);
console.log(outputTriple);

Array.prototype.calculate = function (logic) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

const arr1 = [2, 4, 5, 6];
const arr2 = [6, 5, 3, 1];

const result1 = arr1.calculate(double);
console.log(result1);

const result2 = arr2.calculate(double);
console.log(result2);
