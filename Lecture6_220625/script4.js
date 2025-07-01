// call(): call invokes the function with a given this value and argument passed one by one.

// function admissionProcess(greet, fees) {
//   console.log(greet + this.name + fees);
// }

// const student = { name: "Rahul" };
// const student2 = { name: "Yash" };

// admissionProcess.call(student, "Hello, ", " Your Fees: 7 Lacs");
// admissionProcess.call(student2, "Hello, ", " Your Fees: 6 Lacs");


// apply(): It takes arguments as an array.

// function admissionProcess(greet, fees) {
//   console.log(greet + this.name + fees);
// }

// const student = { name: "Rahul" };
// const student2 = { name: "Yash" };

// admissionProcess.apply(student, ["Hello, ", " Your Fees: 7 Lacs"]);
// admissionProcess.apply(student2, ["Hello, ", " Your Fees: 6 Lacs"]);


// bind() returns a new function with a bound this value.

function admissionProcess(greet, fees) {
  console.log(greet + this.name + fees);
}

const student = { name: "Rahul" };
const student2 = { name: "Yash" };

const studentData1 = admissionProcess.bind(student, "Hello, ", " Your Fees: 7 Lacs");
const studentData2 = admissionProcess.bind(student2, "Hello, ", " Your Fees: 6 Lacs");


studentData1();
studentData2();