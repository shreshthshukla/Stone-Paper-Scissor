var player;
var computer;
var hand;
var start;
var restart;
var gameOver;
var getReady;
var bk;
var score;
var next;
var game;
var signs;

var sign1;
var sign2;
var sign3;
var gameI;
var nextI;
var bkI;
var playerI;
var computerI;
var stone1I;
var stone2I;
var papper1I;
var paper2I;
var scissor1I;
var scissor2I;
var startI;
var restartI;
var gameOverI;
var getReadyI;
var scoreI;

var Cscore;
var Pscore;

var PLAY = 1;
var END = 0;
var SERVE = 2;
var gameState = 2;
var S;
var Sc;
var P;

var play = 3;
var comp = 3;

function preload(){

  bkI  = loadImage("court.png");
  
  startI = loadImage("start.png");
  
  restartI = loadImage("restart.png");
  
  gameOverI = loadImage("GameOver.png");
  
  getReadyI = loadImage("GetReady.png");
  
  gameI = loadImage("rock-paper-scissors.jpg");
  
  playerI = loadImage("Among us 1.png");

  computerI = loadImage("Among_us_2.png");

  scoreI = loadImage("score.png");

  nextI = loadImage("forward.png");

  sign1 = loadImage("equal.png");

  sign2 = loadImage("small.png");

  sign3 = loadImage("small2.png");

  stone1I = loadImage("Stone1.png");

  scissor1I = loadImage("Scissor1.png");

  papper1I = loadImage("Paper1.png");

  stone2I = loadImage("Stone1.1.png");

  scissor2I = loadImage("Scissor1.1.png");

  papper2I = loadImage("Paper1.1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bk=createSprite(width/2,height/2,width,height);
  bk.addImage(bkI);
  bk.scale=1.8;
  
  getReady = createSprite(width/2,80,20,20);
  getReady.addImage(getReadyI);
  getReady.scale=0.7;
  
  player=createSprite(0+100,height/2,15,100);
  player.addImage(playerI);

  computer=createSprite(width-100,height/2,15,100);
  computer.addImage(computerI);

  game = createSprite(width/2,height/2,20,20);
  game.addImage(gameI);

  start = createSprite(width/2,height-100);
  start.addImage(startI);
  start.scale="0.2";
  start.debug=true;
  start.setCollider("circle",0,0,200)

  restart = createSprite(width/2,height/2);
  restart.addImage(restartI);
  restart.scale="0.5";
  restart.visible=false;

  gameOver = createSprite(width/2,80);
  gameOver.addImage(gameOverI);
  gameOver.scale=0.7;
  gameOver.visible=false;

  score = createSprite(width/2,80);
  score.addImage(scoreI);
  score.scale="0.3";
  
  S = createSprite(width/1.65,height/1.2,50,50);

  Sc = createSprite(width/1.5,height/1.2,50,50);

  P = createSprite(width/1.35,height/1.2,50,50);

  // next = createSprite(width-100,height-100);
  // next.addImage(nextI);
  // next.scale="0.2"
  // next.debug=true;
  // next.setCollider("circle",0,0,200)

 
  signs = createSprite(width/2,height/2);
  signs.visible=false;
  signs.addImage(sign1)

  Cscore = 0;
  Pscore = 0;
}

function draw() {
  background(220);
  
  if(gameState===2){
    // next.visible=false;
    score.visible=false;
  }
  
  if(gameState===2 && keyDown("space")||mousePressedOver(start)){
    start.visible=false;
    getReady.visible=false;
    // game.visible=false;
    gameState=1;
  } 
  
  if(gameState===1){
   score.visible=true;
  //  next.visible=true;
   game.x = width/1.5
   game.y = height/1.2;

   if(mousePressedOver(S)){
     var s = createSprite(width/1.5,height/2)
     s.addImage(stone1I)
     Hand();
  }
  if(mousePressedOver(Sc)){
    var sc = createSprite(width/1.5,height/2)
     sc.addImage(scissor1I)
    Hand();
   }
   if(mousePressedOver(P)){
    var p = createSprite(width/1.5,height/2)
    p.addImage(papper1I)
    Hand();
   }
}
  
  drawSprites();
}

function Hand(){
  var hand2 = createSprite(width/3,height/2);

  var rand = Math.round(random(1,3));

  if(rand==1){
    hand2.addImage(scissor2I);
  }
  else if(rand==2){
    hand2.addImage(papper2I);
  }
  else{
    hand2.addImage(stone2I);
  }
}

