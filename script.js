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

var gap = 100;
var constant = pipeNorth.height+gap;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;


var fly = new Audio();
var scor = new Audio();

fly.src = "sound/fly.mp3"
scor.src = "sound/score.mp3"


document.addEventListener("keydown", moveUp);

function moveUp () {
    bY -=25;
    fly.play();
}
var pipe = [];
pipe[0] = {
    x:canvas.width,
    y:0
};



function draw () {
    ctx.drawImage(bg,0,0);

    for(var i =0; i<pipe.length; i++){
        ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y)
    ctx.drawImage(pipeSouth,  pipe[i].x , pipe[i].y+constant) //gap + pipeNorth height is where pipeSouth will start
        pipe[i].x--;

        if(pipe[i].x == 125) {
            
            pipe.push({
                x:canvas.width,
                y:Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
            });
        }

        if (bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY +bird.height >= pipe[i].y+constant) || bY + bird.height >= canvas.height - fg.height){
            location.reload();
        }

        if(pipe[i].x == 5){
            score++;
            scor.play();
        }
}
    

    ctx.drawImage(fg, 0, canvas.height-fg.height); //remaining height is from where fg will start

    ctx.drawImage(bird, bX, bY);

    bY += gravity;

    ctx.fillStyle = "#000"
    ctx.font = "20px Verdana"
    ctx.fillText("Score : "+score,10,canvas.height-20);

    requestAnimationFrame(draw)
}

draw();




  