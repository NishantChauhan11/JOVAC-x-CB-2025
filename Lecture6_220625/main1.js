// EXMPLE ASYNC AND AWAIT

// console.log("CLASS STARTED");

// const projectSubmissionByNishant = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("I am Nishant! Started my work !!!");
//         resolve("Project submitted by Nishant");
//     }, 5000);
// });

// console.log("Lunch Time");

// function projectEvaluation(){
//     console.log("ATTENDANCE");
//     const projectFile = projectSubmissionByNishant;
//         console.log("DATA", projectFile);
//         console.log("Project File Check");
//     }

// projectEvaluation();

// console.log("Class End !");



   // USE OF ASYNC AND AWAIT

   
console.log("CLASS STARTED");

const projectSubmissionByNishant = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("I am Nishant! Started my work !!!");
        resolve("Project submitted by Nishant");
    }, 5000);
});

console.log("Lunch Time");

async function projectEvaluation(){
    console.log("ATTENDANCE");
    const projectFile =  await projectSubmissionByNishant;
        console.log("DATA", projectFile);
        console.log("Project File Check");
    }

projectEvaluation();

console.log("Class End !");
