const good_says = [
  {
    good_say: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    good_say: "산다는것 그것은 치열한 전투이다.",
    author: "로망로랑",
  },
  {
    good_say: "피할수 없으면 즐겨라.",
    author: "로버트 엘리엇",
  },
  {
    good_say: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    good_say: "행복은 습관이다,그것을 몸에 지니라",
    author: "허버드",
  },
];

const good_say = document.querySelector("#goodSay span:first-child");
const author = document.querySelector("#goodSay span:last-child");

const goodSay = good_says[Math.floor(Math.random() * good_says.length)];

good_say.innerText = goodSay.good_say;
author.innerText = `- ${goodSay.author}`;
