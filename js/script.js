const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const restartBtn = document.querySelector(".restart");


const jump = () => {
  mario.classList.add("jump");
  


  setTimeout(() => {
    mario.classList.remove("jump");
  }, 600);
};

const restartGame = () => {
  window.location.reload();
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;

  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    console.log("Game Over!");

    if (restartBtn) {
      restartBtn.classList.add("restart-show");
  }

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
