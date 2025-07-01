// ERROR HANDLING USING TRY AND CATCH 

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