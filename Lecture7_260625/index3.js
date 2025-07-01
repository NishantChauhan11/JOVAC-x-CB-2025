// throttling in JavaScript

// Window resize

function throttle(func, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

function handleResize() {
  console.log("RESIZING WINDOW: ", new Date().toString());
}
// handleResize();
const throttleOnResizing = throttle(handleResize, 2000);

window.addEventListener("resize", throttleOnResizing);