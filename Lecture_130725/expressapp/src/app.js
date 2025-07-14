const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.post("/", (req, res)=>{
   // const {name} = req.query
    console.log("query wala data",req.query);
    console.log(" ");
    
    console.log("body wala data :", req.body);
    res.send("data in the body")
})

app.get("/about", (req, res)=>{
    console.log(req.query)

    res.send("about page")
})

app.get('/about/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Name is: ${name} `);
});


module.exports = app