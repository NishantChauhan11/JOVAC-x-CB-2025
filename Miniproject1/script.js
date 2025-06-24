const form = document.getElementById("form");
const username = document.getElementById("username");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let user = username.value;

  fetch("https://api.github.com/users/" + user)
    .then(res => res.json())
    .then(data => {
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("avatar").style.display = "block";
      document.getElementById("name").textContent = data.name || "N/A";
      document.getElementById("login").textContent = data.login;
      document.getElementById("email").textContent = data.email || "Not public";
      document.getElementById("followers").textContent = data.followers;
      document.getElementById("repos").textContent = data.public_repos;
    })
    .catch(error => {
      alert("User not found");
    });
});

