const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
};

const loopGame = setInterval(() => {
    pipe.style.animation = "none";
    pipe.style.left =`${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.botton =`${marioPosition}px`;

    mario.src = "./images/mario-game-over";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval (loopGame)
}, 10)

document.addEventListener("keydown", jump);