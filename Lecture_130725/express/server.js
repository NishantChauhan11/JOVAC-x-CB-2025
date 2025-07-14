// const express = require("express")

// const app = express()

// app.get("/",(req , res)=>{
//     console.log("request  arrives");
//     res.send("home route")
// })


const express = require("express");
const app = express();

app.get("/about", (req, res) => {
    res.send("about page");
});


app.use((req, res) => {
    res.send("404 Page Not Found");
});

const PORT = 3000;

app.listen(PORT, function() {
    console.log("server started on port :", PORT);
});
