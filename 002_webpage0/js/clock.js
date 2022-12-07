const h2 = document.createElement("h2"); //document.createElement(nodename) ★★★★★
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  h2.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //함수 호출
setInterval(getClock, 1000); //setTimeout(func|code, [delay]) => 일정 시간 간격을 두고 함수를 실행;

const insert_h1 = document.querySelector("h1");
document.body.insertBefore(h2, insert_h1);
//부모노드.insertBefore(삽입 할 노드, 기준 점 노드) => 부모노드의 기준 점 노드 앞에 삽입 할 노드를 삽입
