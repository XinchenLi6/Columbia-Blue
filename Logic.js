var score = 0;
function update() {
    score = score + 1;
    console.log(score);
}
var updateScore = setInterval(update, 1000);

let img = new Image();
img.src =
    "https://toppng.com/public/uploads/thumbnail/baston-sprite-sheet-template-circle-11562903924akb6je0i2d.png";
img.onload = function () {
    window.requestAnimationFrame(movementMechanics);
};

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

const SCALE = 1;
const WIDTH = 26;
const HEIGHT = 29;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;

const generateRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
};
var blocks = [];

let xpositionobstacle1 = generateRandomNumber(0, 1450);
let ypositionobstacle1 = generateRandomNumber(0, 650);
blocks.push({ blockNumber: 1, x: xpositionobstacle1, y: ypositionobstacle1 });

let xpositionobstacle2 = generateRandomNumber(0, 1450);
let ypositionobstacle2 = generateRandomNumber(0, 650);

blocks.push({ blockNumber: 2, x: xpositionobstacle2, y: ypositionobstacle2 });

let xpositionobstacle3 = generateRandomNumber(0, 1450);
let ypositionobstacle3 = generateRandomNumber(0, 650);

blocks.push({ blockNumber: 3, x: xpositionobstacle3, y: ypositionobstacle3 });

let xpositionobstacle4 = generateRandomNumber(0, 1450);
let ypositionobstacle4 = generateRandomNumber(0, 650);

blocks.push({ blockNumber: 4, x: xpositionobstacle4, y: ypositionobstacle4 });

let xpositionobstacle5 = generateRandomNumber(0, 1450);
let ypositionobstacle5 = generateRandomNumber(0, 650);

blocks.push({ blockNumber: 5, x: xpositionobstacle5, y: ypositionobstacle5 });

let xpositionobstacle6 = generateRandomNumber(0, 1450);
let ypositionobstacle6 = generateRandomNumber(0, 650);

blocks.push({ blockNumber: 6, x: xpositionobstacle6, y: ypositionobstacle6 });

let xpositionobstacle7 = generateRandomNumber(0, 1450);
let ypositionobstacle7 = generateRandomNumber(0, 650);

blocks.push({ blockNumber: 7, x: xpositionobstacle7, y: ypositionobstacle7 });

let xpositionobstacle8 = generateRandomNumber(0, 1450);
let ypositionobstacle8 = generateRandomNumber(0, 650);
blocks.push({ blockNumber: 8, x: xpositionobstacle8, y: ypositionobstacle8 });

let xpositionobstacle9 = generateRandomNumber(0, 1450);
let ypositionobstacle9 = generateRandomNumber(0, 650);
blocks.push({ blockNumber: 9, x: xpositionobstacle9, y: ypositionobstacle9 });

let xpositionobstacle10 = generateRandomNumber(0, 1450);
let ypositionobstacle10 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 10,
    x: xpositionobstacle10,
    y: ypositionobstacle10,
});

let xpositionobstacle11 = generateRandomNumber(0, 1450);
let ypositionobstacle11 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 11,
    x: xpositionobstacle11,
    y: ypositionobstacle11,
});

let xpositionobstacle12 = generateRandomNumber(0, 1450);
let ypositionobstacle12 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 12,
    x: xpositionobstacle12,
    y: ypositionobstacle12,
});

let xpositionobstacle13 = generateRandomNumber(0, 1450);
let ypositionobstacle13 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 13,
    x: xpositionobstacle13,
    y: ypositionobstacle13,
});

let xpositionobstacle14 = generateRandomNumber(0, 1450);
let ypositionobstacle14 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 14,
    x: xpositionobstacle14,
    y: ypositionobstacle14,
});

let xpositionobstacle15 = generateRandomNumber(0, 1450);
let ypositionobstacle15 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 15,
    x: xpositionobstacle15,
    y: ypositionobstacle15,
});

let xpositionobstacle16 = generateRandomNumber(0, 1450);
let ypositionobstacle16 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 16,
    x: xpositionobstacle16,
    y: ypositionobstacle16,
});

let xpositionobstacle17 = generateRandomNumber(0, 1450);
let ypositionobstacle17 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 17,
    x: xpositionobstacle17,
    y: ypositionobstacle17,
});

let xpositionobstacle18 = generateRandomNumber(0, 1450);
let ypositionobstacle18 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 18,
    x: xpositionobstacle18,
    y: ypositionobstacle18,
});

let xpositionobstacle19 = generateRandomNumber(0, 1450);
let ypositionobstacle19 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 19,
    x: xpositionobstacle19,
    y: ypositionobstacle19,
});

let xpositionobstacle20 = generateRandomNumber(0, 1450);
let ypositionobstacle20 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 20,
    x: xpositionobstacle20,
    y: ypositionobstacle20,
});

let xpositionobstacle21 = generateRandomNumber(0, 1450);
let ypositionobstacle21 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 21,
    x: xpositionobstacle21,
    y: ypositionobstacle21,
});

let xpositionobstacle22 = generateRandomNumber(0, 1450);
let ypositionobstacle22 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 22,
    x: xpositionobstacle22,
    y: ypositionobstacle22,
});

let xpositionobstacle23 = generateRandomNumber(0, 1450);
let ypositionobstacle23 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 23,
    x: xpositionobstacle23,
    y: ypositionobstacle23,
});

let xpositionobstacle24 = generateRandomNumber(0, 1450);
let ypositionobstacle24 = generateRandomNumber(0, 650);
blocks.push({
    blockNumber: 24,
    x: xpositionobstacle24,
    y: ypositionobstacle24,
});

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(
        img,
        frameX * WIDTH,
        frameY * HEIGHT,
        WIDTH,
        HEIGHT,
        canvasX,
        canvasY,
        SCALED_WIDTH,
        SCALED_HEIGHT
    );

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle1, ypositionobstacle1, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle2, ypositionobstacle2, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle3, ypositionobstacle3, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle4, ypositionobstacle4, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle5, ypositionobstacle5, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle6, ypositionobstacle6, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle7, ypositionobstacle7, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle8, ypositionobstacle8, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle9, ypositionobstacle9, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle10, ypositionobstacle10, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle11, ypositionobstacle11, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle12, ypositionobstacle12, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle13, ypositionobstacle13, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle14, ypositionobstacle14, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle15, ypositionobstacle15, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle16, ypositionobstacle16, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle17, ypositionobstacle17, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle18, ypositionobstacle18, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle19, ypositionobstacle19, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle20, ypositionobstacle20, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle21, ypositionobstacle21, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle22, ypositionobstacle22, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle23, ypositionobstacle23, 50, 50);

    var context = canvas.getContext("2d");
    context.fillRect(xpositionobstacle24, ypositionobstacle24, 50, 50);
}

const CYCLE_LOOP = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;
let keyDown = {};

window.addEventListener("keydown", keyDownListener);
function keyDownListener(event) {
    event.preventDefault();
    keyDown[event.key] = true;
}

window.addEventListener("keyup", keyUpListener);
function keyUpListener(event) {
    event.preventDefault();
    keyDown[event.key] = false;
}

let movespeed = 5;
let positionX = 0;
let positionY = 0;

let xmomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
let xmomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
let ymomentumobstacle24 = generateRandomNumber(-0.22, 0.22);

function movementMechanics() {
  let movespeed = 5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (keyDown.Shift) {
  movespeed = 2.5;
}
    if (keyDown.ArrowUp) {
        if (positionY >= movespeed) {
            positionY -= movespeed;
        }
    } else if (keyDown.ArrowDown) {
        if (positionY <= 680 - movespeed) {
            positionY += movespeed;
        }
    }
    if (keyDown.ArrowLeft) {
        if (positionX >= movespeed) {
            positionX -= movespeed;
        }
    } else if (keyDown.ArrowRight) {
        if (positionX <= 1480 - movespeed) {
            positionX += movespeed;
        }
    }
    drawFrame(0, 0, positionX, positionY);

    let requestAnimation = true;

    for (let block of blocks) {
        let topLineofBlock = block.y;
        let leftLineofBlock = block.x;
        let bottomLineofBlock = block.y + 69;
        let rightLineofBlock = block.x + 69;
        let bottomLineofPlayer = positionY + 26;
        let rightLineofPlayer = positionX + 19;

        timerOne();
        function timerOne() {
            xpositionobstacle1 = xpositionobstacle1 + xmomentumobstacle1;
            ypositionobstacle1 = ypositionobstacle1 + ymomentumobstacle1;

            if (xpositionobstacle1 > 1450) {
                xmomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle1 = xpositionobstacle1 - 5;
            }
            if (ypositionobstacle1 > 650) {
                xmomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle1 = ypositionobstacle1 - 5;
            }
            if (xpositionobstacle1 < 0) {
                xmomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle1 = xpositionobstacle1 + 5;
            }
            if (ypositionobstacle1 < 0) {
                xmomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle1 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle1 = ypositionobstacle1 + 5;
            }

            xpositionobstacle2 = xpositionobstacle2 + xmomentumobstacle2;
            ypositionobstacle2 = ypositionobstacle2 + ymomentumobstacle2;

            if (xpositionobstacle2 > 1450) {
                xmomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle2 = xpositionobstacle2 - 5;
            }
            if (ypositionobstacle2 > 650) {
                xmomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle2 = ypositionobstacle2 - 5;
            }
            if (xpositionobstacle2 < 0) {
                xmomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle2 = xpositionobstacle2 + 5;
            }
            if (ypositionobstacle2 < 0) {
                xmomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle2 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle2 = ypositionobstacle2 + 5;
            }

            xpositionobstacle3 = xpositionobstacle3 + xmomentumobstacle3;
            ypositionobstacle3 = ypositionobstacle3 + ymomentumobstacle3;

            if (xpositionobstacle3 > 1450) {
                xmomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle3 = xpositionobstacle3 - 5;
            }
            if (ypositionobstacle3 > 650) {
                xmomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle3 = ypositionobstacle3 - 5;
            }
            if (xpositionobstacle3 < 0) {
                xmomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle3 = xpositionobstacle3 + 5;
            }
            if (ypositionobstacle3 < 0) {
                xmomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle3 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle3 = ypositionobstacle3 + 5;
            }

            xpositionobstacle4 = xpositionobstacle4 + xmomentumobstacle4;
            ypositionobstacle4 = ypositionobstacle4 + ymomentumobstacle4;

            if (xpositionobstacle4 > 1450) {
                xmomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle4 = xpositionobstacle4 - 5;
            }
            if (ypositionobstacle4 > 650) {
                xmomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle4 = ypositionobstacle4 - 5;
            }
            if (xpositionobstacle4 < 0) {
                xmomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle4 = xpositionobstacle4 + 5;
            }
            if (ypositionobstacle4 < 0) {
                xmomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle4 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle4 = ypositionobstacle4 + 5;
            }

            xpositionobstacle5 = xpositionobstacle5 + xmomentumobstacle5;
            ypositionobstacle5 = ypositionobstacle5 + ymomentumobstacle5;

            if (xpositionobstacle5 > 1450) {
                xmomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle5 = xpositionobstacle5 - 5;
            }
            if (ypositionobstacle5 > 650) {
                xmomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle5 = ypositionobstacle5 - 5;
            }
            if (xpositionobstacle5 < 0) {
                xmomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle5 = xpositionobstacle5 + 5;
            }
            if (ypositionobstacle5 < 0) {
                xmomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle5 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle5 = ypositionobstacle5 + 5;
            }

            xpositionobstacle6 = xpositionobstacle6 + xmomentumobstacle6;
            ypositionobstacle6 = ypositionobstacle6 + ymomentumobstacle6;

            if (xpositionobstacle6 > 1450) {
                xmomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle6 = xpositionobstacle6 - 5;
            }
            if (ypositionobstacle6 > 650) {
                xmomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle6 = ypositionobstacle6 - 5;
            }
            if (xpositionobstacle6 < 0) {
                xmomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle6 = xpositionobstacle6 + 5;
            }
            if (ypositionobstacle6 < 0) {
                xmomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle6 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle6 = ypositionobstacle6 + 5;
            }

            xpositionobstacle7 = xpositionobstacle7 + xmomentumobstacle7;
            ypositionobstacle7 = ypositionobstacle7 + ymomentumobstacle7;

            if (xpositionobstacle7 > 1450) {
                xmomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle7 = xpositionobstacle7 - 5;
            }
            if (ypositionobstacle7 > 650) {
                xmomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle7 = ypositionobstacle7 - 5;
            }
            if (xpositionobstacle7 < 0) {
                xmomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle7 = xpositionobstacle7 + 5;
            }
            if (ypositionobstacle7 < 0) {
                xmomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle7 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle7 = ypositionobstacle7 + 5;
            }

            xpositionobstacle8 = xpositionobstacle8 + xmomentumobstacle8;
            ypositionobstacle8 = ypositionobstacle8 + ymomentumobstacle8;

            if (xpositionobstacle8 > 1450) {
                xmomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle8 = xpositionobstacle8 - 5;
            }
            if (ypositionobstacle8 > 650) {
                xmomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle8 = ypositionobstacle8 - 5;
            }
            if (xpositionobstacle8 < 0) {
                xmomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle8 = xpositionobstacle8 + 5;
            }
            if (ypositionobstacle8 < 0) {
                xmomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle8 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle8 = ypositionobstacle8 + 5;
            }

            xpositionobstacle9 = xpositionobstacle9 + xmomentumobstacle9;
            ypositionobstacle9 = ypositionobstacle9 + ymomentumobstacle9;

            if (xpositionobstacle9 > 1450) {
                xmomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle9 = xpositionobstacle9 - 5;
            }
            if (ypositionobstacle9 > 650) {
                xmomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle9 = ypositionobstacle9 - 5;
            }
            if (xpositionobstacle9 < 0) {
                xmomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle9 = xpositionobstacle9 + 5;
            }
            if (ypositionobstacle9 < 0) {
                xmomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle9 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle9 = ypositionobstacle9 + 5;
            }

            xpositionobstacle10 = xpositionobstacle10 + xmomentumobstacle10;
            ypositionobstacle10 = ypositionobstacle10 + ymomentumobstacle10;

            if (xpositionobstacle10 > 1450) {
                xmomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle10 = xpositionobstacle10 - 5;
            }
            if (ypositionobstacle10 > 650) {
                xmomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle10 = ypositionobstacle10 - 5;
            }
            if (xpositionobstacle10 < 0) {
                xmomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle10 = xpositionobstacle10 + 5;
            }
            if (ypositionobstacle10 < 0) {
                xmomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle10 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle10 = ypositionobstacle10 + 5;
            }

            xpositionobstacle11 = xpositionobstacle11 + xmomentumobstacle11;
            ypositionobstacle11 = ypositionobstacle11 + ymomentumobstacle11;

            if (xpositionobstacle11 > 1450) {
                xmomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle11 = xpositionobstacle11 - 5;
            }
            if (ypositionobstacle11 > 650) {
                xmomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle11 = ypositionobstacle11 - 5;
            }
            if (xpositionobstacle11 < 0) {
                xmomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle11 = xpositionobstacle11 + 5;
            }
            if (ypositionobstacle11 < 0) {
                xmomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle11 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle11 = ypositionobstacle11 + 5;
            }

            xpositionobstacle12 = xpositionobstacle12 + xmomentumobstacle12;
            ypositionobstacle12 = ypositionobstacle12 + ymomentumobstacle12;

            if (xpositionobstacle12 > 1450) {
                xmomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle12 = xpositionobstacle12 - 5;
            }
            if (ypositionobstacle12 > 650) {
                xmomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle12 = ypositionobstacle12 - 5;
            }
            if (xpositionobstacle12 < 0) {
                xmomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle12 = xpositionobstacle12 + 5;
            }
            if (ypositionobstacle12 < 0) {
                xmomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle12 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle12 = ypositionobstacle12 + 5;
            }

            xpositionobstacle13 = xpositionobstacle13 + xmomentumobstacle13;
            ypositionobstacle13 = ypositionobstacle13 + ymomentumobstacle13;

            if (xpositionobstacle13 > 1450) {
                xmomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle13 = xpositionobstacle13 - 5;
            }
            if (ypositionobstacle13 > 650) {
                xmomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle13 = ypositionobstacle13 - 5;
            }
            if (xpositionobstacle13 < 0) {
                xmomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle13 = xpositionobstacle13 + 5;
            }
            if (ypositionobstacle13 < 0) {
                xmomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle13 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle13 = ypositionobstacle13 + 5;
            }

            xpositionobstacle14 = xpositionobstacle14 + xmomentumobstacle14;
            ypositionobstacle14 = ypositionobstacle14 + ymomentumobstacle14;

            if (xpositionobstacle14 > 1450) {
                xmomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle14 = xpositionobstacle14 - 5;
            }
            if (ypositionobstacle14 > 650) {
                xmomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle14 = ypositionobstacle14 - 5;
            }
            if (xpositionobstacle14 < 0) {
                xmomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle14 = xpositionobstacle14 + 5;
            }
            if (ypositionobstacle14 < 0) {
                xmomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle14 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle14 = ypositionobstacle14 + 5;
            }

            xpositionobstacle15 = xpositionobstacle15 + xmomentumobstacle15;
            ypositionobstacle15 = ypositionobstacle15 + ymomentumobstacle15;

            if (xpositionobstacle15 > 1450) {
                xmomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle15 = xpositionobstacle15 - 5;
            }
            if (ypositionobstacle15 > 650) {
                xmomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle15 = ypositionobstacle15 - 5;
            }
            if (xpositionobstacle15 < 0) {
                xmomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle15 = xpositionobstacle15 + 5;
            }
            if (ypositionobstacle15 < 0) {
                xmomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle15 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle15 = ypositionobstacle15 + 5;
            }

            xpositionobstacle16 = xpositionobstacle16 + xmomentumobstacle16;
            ypositionobstacle16 = ypositionobstacle16 + ymomentumobstacle16;

            if (xpositionobstacle16 > 1450) {
                xmomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle16 = xpositionobstacle16 - 5;
            }
            if (ypositionobstacle16 > 650) {
                xmomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle16 = ypositionobstacle16 - 5;
            }
            if (xpositionobstacle16 < 0) {
                xmomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle16 = xpositionobstacle16 + 5;
            }
            if (ypositionobstacle16 < 0) {
                xmomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle16 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle16 = ypositionobstacle16 + 5;
            }

            xpositionobstacle17 = xpositionobstacle17 + xmomentumobstacle17;
            ypositionobstacle17 = ypositionobstacle17 + ymomentumobstacle17;

            if (xpositionobstacle17 > 1450) {
                xmomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle17 = xpositionobstacle17 - 5;
            }
            if (ypositionobstacle17 > 650) {
                xmomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle17 = ypositionobstacle17 - 5;
            }
            if (xpositionobstacle17 < 0) {
                xmomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle17 = xpositionobstacle17 + 5;
            }
            if (ypositionobstacle17 < 0) {
                xmomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle17 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle17 = ypositionobstacle17 + 5;
            }

            xpositionobstacle18 = xpositionobstacle18 + xmomentumobstacle18;
            ypositionobstacle18 = ypositionobstacle18 + ymomentumobstacle18;

            if (xpositionobstacle18 > 1450) {
                xmomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle18 = xpositionobstacle18 - 5;
            }
            if (ypositionobstacle18 > 650) {
                xmomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle18 = ypositionobstacle18 - 5;
            }
            if (xpositionobstacle18 < 0) {
                xmomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle18 = xpositionobstacle18 + 5;
            }
            if (ypositionobstacle18 < 0) {
                xmomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle18 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle18 = ypositionobstacle18 + 5;
            }

            xpositionobstacle19 = xpositionobstacle19 + xmomentumobstacle19;
            ypositionobstacle19 = ypositionobstacle19 + ymomentumobstacle19;

            if (xpositionobstacle19 > 1450) {
                xmomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle19 = xpositionobstacle19 - 5;
            }
            if (ypositionobstacle19 > 650) {
                xmomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle19 = ypositionobstacle19 - 5;
            }
            if (xpositionobstacle19 < 0) {
                xmomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle19 = xpositionobstacle19 + 5;
            }
            if (ypositionobstacle19 < 0) {
                xmomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle19 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle19 = ypositionobstacle19 + 5;
            }

            xpositionobstacle20 = xpositionobstacle20 + xmomentumobstacle20;
            ypositionobstacle20 = ypositionobstacle20 + ymomentumobstacle20;

            if (xpositionobstacle20 > 1450) {
                xmomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle20 = xpositionobstacle20 - 5;
            }
            if (ypositionobstacle20 > 650) {
                xmomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle20 = ypositionobstacle20 - 5;
            }
            if (xpositionobstacle20 < 0) {
                xmomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle20 = xpositionobstacle20 + 5;
            }
            if (ypositionobstacle20 < 0) {
                xmomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle20 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle20 = ypositionobstacle20 + 5;
            }

            xpositionobstacle21 = xpositionobstacle21 + xmomentumobstacle21;
            ypositionobstacle21 = ypositionobstacle21 + ymomentumobstacle21;

            if (xpositionobstacle21 > 1450) {
                xmomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle21 = xpositionobstacle21 - 5;
            }
            if (ypositionobstacle21 > 650) {
                xmomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle21 = ypositionobstacle21 - 5;
            }
            if (xpositionobstacle21 < 0) {
                xmomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle21 = xpositionobstacle21 + 5;
            }
            if (ypositionobstacle21 < 0) {
                xmomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle21 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle21 = ypositionobstacle21 + 5;
            }

            xpositionobstacle22 = xpositionobstacle22 + xmomentumobstacle22;
            ypositionobstacle22 = ypositionobstacle22 + ymomentumobstacle22;

            if (xpositionobstacle22 > 1450) {
                xmomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle22 = xpositionobstacle22 - 5;
            }
            if (ypositionobstacle22 > 650) {
                xmomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle22 = ypositionobstacle22 - 5;
            }
            if (xpositionobstacle22 < 0) {
                xmomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle22 = xpositionobstacle22 + 5;
            }
            if (ypositionobstacle22 < 0) {
                xmomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle22 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle22 = ypositionobstacle22 + 5;
            }

            xpositionobstacle23 = xpositionobstacle23 + xmomentumobstacle23;
            ypositionobstacle23 = ypositionobstacle23 + ymomentumobstacle23;

            if (xpositionobstacle23 > 1450) {
                xmomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle23 = xpositionobstacle23 - 5;
            }
            if (ypositionobstacle23 > 650) {
                xmomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle23 = ypositionobstacle23 - 5;
            }
            if (xpositionobstacle23 < 0) {
                xmomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle23 = xpositionobstacle23 + 5;
            }
            if (ypositionobstacle23 < 0) {
                xmomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle23 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle23 = ypositionobstacle23 + 5;
            }

            xpositionobstacle24 = xpositionobstacle24 + xmomentumobstacle24;
            ypositionobstacle24 = ypositionobstacle24 + ymomentumobstacle24;

            if (xpositionobstacle24 > 1450) {
                xmomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle24 = xpositionobstacle24 - 5;
            }
            if (ypositionobstacle24 > 650) {
                xmomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle24 = ypositionobstacle24 - 5;
            }
            if (xpositionobstacle24 < 0) {
                xmomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
                xpositionobstacle24 = xpositionobstacle24 + 5;
            }
            if (ypositionobstacle24 < 0) {
                xmomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
                ymomentumobstacle24 = generateRandomNumber(-0.22, 0.22);
                ypositionobstacle24 = ypositionobstacle24 + 5;
            }

            blocks[0].x = xpositionobstacle1;
            blocks[0].y = ypositionobstacle1;

            blocks[1].x = xpositionobstacle2;
            blocks[1].y = ypositionobstacle2;

            blocks[2].x = xpositionobstacle3;
            blocks[2].y = ypositionobstacle3;

            blocks[3].x = xpositionobstacle4;
            blocks[3].y = ypositionobstacle4;

            blocks[4].x = xpositionobstacle5;
            blocks[4].y = ypositionobstacle5;

            blocks[5].x = xpositionobstacle6;
            blocks[5].y = ypositionobstacle6;

            blocks[6].x = xpositionobstacle7;
            blocks[6].y = ypositionobstacle7;

            blocks[7].x = xpositionobstacle8;
            blocks[7].y = ypositionobstacle8;

            blocks[8].x = xpositionobstacle9;
            blocks[8].y = ypositionobstacle9;

            blocks[9].x = xpositionobstacle10;
            blocks[9].y = ypositionobstacle10;

            blocks[10].x = xpositionobstacle11;
            blocks[10].y = ypositionobstacle11;

            blocks[11].x = xpositionobstacle12;
            blocks[11].y = ypositionobstacle12;

            blocks[12].x = xpositionobstacle13;
            blocks[12].y = ypositionobstacle13;

            blocks[13].x = xpositionobstacle14;
            blocks[13].y = ypositionobstacle14;

            blocks[14].x = xpositionobstacle15;
            blocks[14].y = ypositionobstacle15;

            blocks[15].x = xpositionobstacle16;
            blocks[15].y = ypositionobstacle16;

            blocks[16].x = xpositionobstacle17;
            blocks[16].y = ypositionobstacle17;

            blocks[17].x = xpositionobstacle18;
            blocks[17].y = ypositionobstacle18;

            blocks[18].x = xpositionobstacle19;
            blocks[18].y = ypositionobstacle19;

            blocks[19].x = xpositionobstacle20;
            blocks[19].y = ypositionobstacle20;

            blocks[20].x = xpositionobstacle21;
            blocks[20].y = ypositionobstacle21;

            blocks[21].x = xpositionobstacle22;
            blocks[21].y = ypositionobstacle22;

            blocks[22].x = xpositionobstacle23;
            blocks[22].y = ypositionobstacle23;

            blocks[23].x = xpositionobstacle24;
            blocks[23].y = ypositionobstacle24;
        }

        if (
            rightLineofPlayer > leftLineofBlock &&
            rightLineofPlayer < rightLineofBlock &&
            bottomLineofPlayer > topLineofBlock &&
            bottomLineofPlayer < bottomLineofBlock
        ) {
            requestAnimation = false;
            alert("Game Over");
            alert("Your score is: " + score);
            location.reload();
        }
    }

    if (requestAnimation) {
        window.requestAnimationFrame(movementMechanics);
    }
}
