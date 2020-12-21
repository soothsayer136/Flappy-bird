var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();


bird.src = "image/bird.png";
bg.src = "image/bg.png";
fg.src = "image/fg.png";
pipeNorth.src = "image/pipeNorth.png";
pipeSouth.src = "image/pipeSouth.png";

var gap = 75;
var constant = pipeNorth.height+gap;

var bX = 10;
var bY = 150;

var gravity = 1;


document.addEventListener("keydown", moveUp);

function moveUp () {
    bY -=20;
}

var pipe =[];
piep


function draw () {
    ctx.drawImage(bg,0,0);
    ctx.drawImage(pipeNorth, 100, 0)
    ctx.drawImage(pipeSouth, 100 ,0+constant) //gap + pipeNorth height is where pipeSouth will start

    ctx.drawImage(fg, 0, canvas.height-fg.height); //remaining height is from where fg will start

    ctx.drawImage(bird, bX, bY);

    bY += gravity;

    requestAnimationFrame(draw)
}

draw();




  