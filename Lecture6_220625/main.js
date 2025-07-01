// Example: PROMISE CREATE AND CALLING
// const ritikAssignment = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log("I am Ritik, my work is done");
//     resolve("Assignment complete");
//   }, 5000);
// });

// function ankitTask() {
//   const ritikDocs = ritikAssignment;
//   console.log(ritikAssignment);
//   console.log("DATA", ritikAssignment); 
//   console.log("Hello")

// }

// ankitTask();

// EXAMPLE WITHOUT PROMISE:



const rikitAssignment = function () {
    setTimeout(() => {
        console.log("MY WORK DONE");
        return "BY";
    }, 5000);
}

function ankitTask() {
    const data = rikitAssignment;
    console.log("DATA", data);
}

ankitTask();