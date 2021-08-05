var myGamePiece;
var myObstacles = [];
var myScore;
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

const movespeed = 4;
let positionX = 0;
let positionY = 0;

let date = new Date();
let lastUpdate = date.getTime();

let xmomentumobstacle1 = generateRandomNumber(-0.29, 0.29);
let ymomentumobstacle1 = generateRandomNumber(-0.29, 0.29);

function movementMechanics() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
			date = new Date();
			
			if(date.getTime() > lastUpdate + 1000) {
				console.log("changed direction");
				lastUpdate = date.getTime();
				xmomentumobstacle1 = generateRandomNumber(-0.29, 0.29);
				ymomentumobstacle1 = generateRandomNumber(-0.29, 0.29);
			}

            xpositionobstacle1 = xpositionobstacle1 + xmomentumobstacle1;
            ypositionobstacle1 = ypositionobstacle1 + ymomentumobstacle1;

            if (xpositionobstacle1 > 1450) {
                xpositionobstacle1 = xpositionobstacle1 - 8;
            }
            if (ypositionobstacle1 > 650) {
                ypositionobstacle1 = ypositionobstacle1 - 8;
            }
            if (xpositionobstacle1 < 0) {
                xpositionobstacle1 = xpositionobstacle1 + 8;
            }
            if (ypositionobstacle1 < 0) {
                ypositionobstacle1 = ypositionobstacle1 + 8;
            } else {
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
            location.reload();
        }
    }

    if (requestAnimation) {
        window.requestAnimationFrame(movementMechanics);
    }
}
