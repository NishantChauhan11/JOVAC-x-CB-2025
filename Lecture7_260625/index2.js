let typing = false;
let timer;

function checkTyping() {
  typing = true;

  if (timer) {
    clearInterval(timer);
  }

  timer = setInterval(() => {
    if (typing) {
      typing = false;
    } else {
      console.log("User stopped typing");
      clearInterval(timer);
    }
  }, 1000);
}

let box = document.getElementById("box");
box.addEventListener("keydown", checkTyping);
