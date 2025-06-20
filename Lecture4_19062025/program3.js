const doubleData = function (data){
    return data*data;
}

const calculate = function ( data, logic){
    let output = [];
    for(let i =0;i<data.length; i++){
        output.push(logic(data[i]));
    }
    return output;
}
const data1 = [10, 5, 4, 8, 1]
console.log(calculate(data1,doubleData));