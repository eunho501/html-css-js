let dice = [
  "https://cdn-icons-png.flaticon.com/128/10826/10826863.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826864.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826865.png",
  "https://cdn-icons-png.flaticon.com/128/0/963.png",
  "https://cdn-icons-png.flaticon.com/128/0/780.png",
  "https://cdn-icons-png.flaticon.com/128/3517/3517427.png",
];

const divs = document.querySelector("#root>div");

let myDices = Array.from({ length: 4 }, (_, index) => {
  const img = document.createElement("img");
  img.alt = `${index + 1}번째 주사위`;
  return img;
});
let comDices = console.log(comDices);

const makeNumber = () => {
  Math.floor(Math.random() * 6);
};

divs.forEach((div, index) => {
  div.innerHTML = null;
  if (index === 0) {
    myDices.forEach((img) => {
      img.src = dice[makeNumber];
      div.append(img);
    });
  } else {
    comDices.forEach((img) => {
      img.src = dice[makeNumber()];
      div.append(img);
    });
  }
});

const button = document.querySelector("button");
const whoWins = (d1, d2) => {
  let sum1 = 0;
  let sum2 = 0;
};
button.onclick = () => {
  const id = setInterval(() => {
    myDices.forEach((img) => {
      img.src = dice[makeNumber()];
      const anime = `@keyframes roll {
  0% {
    transform: scale(0) rotate(0deg);
  }
  50% {
    transform: scale(1) rotate(2700deg);
  }
  100% {
    transform: scale(0) rotate(0deg);
  }
}
`;
      img.animate([]);
    });
  }, 100);
};
