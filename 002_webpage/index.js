const loginFrom = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const h1 = document.querySelector("h1");

function test(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  h1.innerText = `Hello, ${userName}`;
  loginFrom.classList.add("hidden");
}

if (localStorage.getItem("username") == null) {
  loginFrom.addEventListener("submit", test);
} else {
  loginFrom.classList = "hidden";
  h1.innerText = `Hello, ${localStorage.getItem("username")}`;
}
