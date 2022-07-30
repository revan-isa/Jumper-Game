let character = document.getElementById("character");
let block = document.getElementById("block");
let game = document.getElementById("game");
let score = document.getElementById("score");
let html = document.querySelector("html");

// game start control
let start = document.getElementById("btn");
let layer = document.getElementById("layer");
let xal;
start.addEventListener("click", () => {
  start.style.display = "none";
  layer.style.display = "none";
  block.classList.add("animate2");
  xal = setInterval(() => {
    scoreCal();
  }, 500);
});
// when click and press space --------------
game.addEventListener("click", () => {
  jump();
});

html.addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    jump();
  }
});

// -------------------------------
// Xal hesablayici
let x = 0;
let scoreCal = () => {
  x++;
  score.innerText = x;
};

// --------------------------------

let jump = () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }

  setTimeout(() => {
    character.classList.remove("animate");
  }, 1000);
};

let checkDead = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top") // 150px
  );

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left") // 100%
  );

  if (blockLeft <= 50 && blockLeft >= 0 && characterTop >= 130) {
    start.style.display = "block";
    layer.style.display = "block";
    clearInterval(xal);
    x = 0;
    block.style.left = `${blockLeft}px`;
    block.classList.remove("animate2");
  }
}, 5);
