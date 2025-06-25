const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => {
  console.log("grandparent");
});

parent.addEventListener("click", () => {
  console.log("parent");
});

child.addEventListener("click", () => {
  console.log("child");
});

