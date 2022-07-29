let character = document.getElementById("character");
let block = document.getElementById("block");
let game = document.getElementById("game");
let score = document.getElementById("score");

// when click and press space --------------
document.querySelector("html").addEventListener("click", () => {
  jump();
});

document.querySelector("html").addEventListener("keydown", (e) => {
  if (e.code == "Space") {
    jump();
    scoreCal();
  }
});

// -------------------------------
let x = 0;
let scoreCal = () => {
  x++;
  score.innerText = x;
};

let jump = () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }

  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
};

let checkDead = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top") // 150px
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left") // 480px
  );

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    game.style.border = "1px solid red";
    alert("Uduzdun!");
  } else {
    game.style.border = "1px solid black";
  }
}, 10);
