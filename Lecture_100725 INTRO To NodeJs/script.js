// const {a,b} = require('./math.js')

// console.log(a);


// var figlet = require("figlet");
const fs = require('fs')

// figlet("Hello Nishant!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//   readFile

// fs.readFile("./File.txt","utf8",(err, data)=>{
//     if(err){
//         console.log("error found in your code :",err);
        
//     }
//     console.log(data);
    
// })

//write file 
// fs.writeFile("text.txt","hello Nishant",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file was created successfully");
//     }
// })

//update 
// fs.appendFile("text.txt","hello coders",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file was updated successfully");
//     }
// })


// delete file
// fs.unlink("File.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file deleted successfully");
    
// })


// remane
// fs.rename("app.js","hello.js",(err)=>{
//     if(err){
//         console.log(err);
        
//     }
//     console.log("yes file ka name change ho gya");
    
// })


// create folder
// fs.mkdir("Newfolder",(err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log("folder created");
    
// })


//READ FOLDER
// fs.readdir("Hello NodeJs",(err,file)=>{
//     if(err){
//         console.log(err);
//         return  
//     }
//     console.log("folder read :", file);
    
// })


fs.rmdir("Newfolder",{ recursive : true },(err)=>{
    if(err){
        console.log("folder path not found :",err);
    }else{
        console.log("folder deleted successfully"); 
    }
}) 