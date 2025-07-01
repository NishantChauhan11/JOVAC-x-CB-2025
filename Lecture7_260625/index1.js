// Normal Eevent listening

const searchInput = document.getElementById("search");

function handleSearch(event) {
  console.log("SEARCH FOR:", event.target.value);
}

// using debounceing

function debounceFunction(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>{
        console.log("WORKING")
        func.apply(this, args);
    }, delay);

  }
}

const debouncedSearchEvent = debounceFunction(handleSearch, 1000);

searchInput.addEventListener("input", debouncedSearchEvent);
