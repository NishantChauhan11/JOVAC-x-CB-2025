const http = require("http")

const server = http.createServer((req, res)=>{
    if(req.url === "/" && req.method === "GET" ){
        res.end("home route")
    }
    if(req.url === "/about"){
        res.end("about page")
    }
    if(req.url === "/" && req.method === "POST"){
        res.end("post page")
    }

})    

server.listen(3000, ()=>{
    console.log("server is start");
})



