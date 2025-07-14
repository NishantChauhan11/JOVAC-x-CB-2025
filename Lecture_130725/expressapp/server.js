const app = require("./src/app");

const connect = require("./src/db/db")
const PORT = 3000;

app.listen(PORT, () => {
    connect()
    console.log(`Server started on port ${PORT}`);
});
