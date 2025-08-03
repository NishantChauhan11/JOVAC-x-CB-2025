// const mongoose = require("mongoose");
// require("dotenv").config();

// const connect = () => {
//   mongoose.connect(process.env.MONGODB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// };

// module.exports = connect;


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String, // You use this in req.query.category
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;

