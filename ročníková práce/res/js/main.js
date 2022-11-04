let start = document.getElementById("start");
let wrap = document.getElementById("wrapper");
let gameStart = false;
let coolDown = true;


const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let jump = (canvas.height / 2) - 50;

start.onclick = () => {
    wrapper.style.display = "none";
    canvas.style.display = "flex";

}



class myPlayer {
    constructor(img) {
        this.position = { x: 300 };
        this.width = 150;
        this.height = 100;
        this.img = img;
    }

    draw(y) {

        ctx.drawImage(birdImage, this.position.x, y, this.width, this.height)
    };
}

let birdImage = new Image;

birdImage.src = "./res/img/bird2.png";
const player = new myPlayer(birdImage);


document.addEventListener('keydown', (x) => {

    if (x.code === "Space" && coolDown) {
        if (!gameStart) {

            gameStart = !gameStart;
        }

        jump -= 100;

        coolDown = false;
        setTimeout(() => {
            coolDown = true;
        }, 175)
    }
});

const backgroundCanvas = () => {
    let bgImage = new Image();
    bgImage.src = "./res/img/bg.png";
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height)
};


function gameLoop() {
    backgroundCanvas();
    player.draw(jump);
    if (gameStart) {
        jump++;
    }

    requestAnimationFrame(gameLoop);
}


gameLoop();









