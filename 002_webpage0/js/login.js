const loginFrom = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const h1 = document.querySelector("h1");

function test(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem("username", userName); // localStorage.setItem(key, value) => 데이터 저장하기
  h1.innerText = `Hello ${userName}`; //classList.add('클래스명') => 클래스 하나 추가
  loginFrom.classList.add("hidden");
}

if (localStorage.getItem("username") === null) {
  //localStorage.getItem(key) => 데이터 불러오기 ★★★★★
  loginFrom.addEventListener("submit", test); //element.addEventListener(event, function, [useCapture]);
} else {
  loginFrom.classList.add("hidden");
  h1.innerText = `Hello ${localStorage.getItem("username")}`;
}
