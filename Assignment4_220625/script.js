const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("grandparent");
});

parent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("parent");
});

child.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("child");
});
