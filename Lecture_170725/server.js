const app = require("./src/app")
const connect = require("./src/db/db")
let PORT = 4000

app.listen(PORT , ()=>{
   console.log(`Server started on port no. ${PORT}`);
   connect()
})