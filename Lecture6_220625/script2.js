// PROGRAM :-  FIRST CLASS WILL START THEN  NISHANT WILL MAKE PROJECT
// THEN EVALUTION OF PROJECT, THEN  MARKS ARE AWARDED AND THEN CLASS END.



// console.log("Class Start");

// const projectSubmissionByNishant = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     console.log("I have Completed the Project");
//     resolve("WORK DONE BY NISHANT");
//   }, 5000);
// });

//  async function projectEvaluation() {
//     const fileOfNishant = await projectSubmissionByNishant;
//     console.log("FILE RECEIVED AND CHECKED!", fileOfNishant);
//     console.log("Class End");
//   }

//   projectEvaluation();

// console.log("I AM OUTSIDE ASYNC FUNCTION, WHICH WILL BE NOT AFFECTED BY ANY ASYNC FUNCTION");




// WORKING EXAMPLE IN PROJECTS

console.log("START");

async function getProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const resData = await res.json();
    console.log(resData);
  } catch (error) {
    console.log(error);
  }
}

console.log("END");

getProducts();