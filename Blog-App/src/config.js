const mongoose = require("mongoose");
const ImageKit = require("imagekit");

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/blog-app')
.then(() => console.log(" MongoDB Connected"))
.catch((err) => console.log(" MongoDB Error:", err));

// ImageKit configuration
const imagekit = new ImageKit({
   publicKey 
:
 
"public_ybUnnwRgU9yxY4pSpVt/Hvm4cAU="
,

    privateKey 
:
 
"private_yUZHK9gzKv******************"
,

    urlEndpoint 
:
 
"https://ik.imagekit.io/p7fwzopnj"

})

module.exports = imagekit;