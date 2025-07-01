// EVENT CAPTURING AND EVENT BUBBLING

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
// ADD EVENT LISTENERS

grandparent.addEventListener('click', () => {
  console.log("GRANDPARENT DIV CLICKED");
});

parent.addEventListener("click", () => {
  console.log("PARENT DIV CLICKED");
});

child.addEventListener("click", () => {
  console.log("CHILD DIV IS CLICKED");
});