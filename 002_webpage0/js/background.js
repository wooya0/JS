const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("img");
//Document.querySelector(selectors) => 주어진 선택자에 대응하는 요소 중 첫 번째 요소를 반환

bgImage.src = `img/${chosenImage}`;
