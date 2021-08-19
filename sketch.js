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

var LOAD = -1 
var PLAY = 1;
var POINT1 = 3
var POINT2= 4
var OVER1 =5
var OVER2=6
var END = 0;
var SERVE = 2;
var gameState = -1;
var S;
var Sc;
var P;

var play = 3;
var comp = 3;
var s,hand2,sc,hand3,p,hand4;
var scoreIm,scoreIM;
var looseSound,beep,beepSound

var TT = 150;

function preload(){

  bkI  = loadAnimation("blue.jpg","blue.jpg","green.jpg","green.jpg","pink.jpg","pink.jpg","teal.jpg","teal.jpg","yellow.jpg","yellow.jpg");
  
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

  loadI = loadAnimation("Load1.png","Load2.png","Load3.png","Load4.png","Load5.png","Load6.png","Load7.png","Load8.png","Load9.png","Load10.png",
  "Load11.png","Load12.png")

  papper2I = loadImage("Paper1.1.png");
  scoreIM =loadImage("score+.png")
  winSound=loadSound("youwin (mp3cut.net).mp3")
  looseSound = loadSound("youwin (mp3cut.net).mp3");
  beepSound=loadSound("beep.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bk=createSprite(width/2,height/2,width,height);
  bk.addAnimation("back",bkI);
  bk.scale=3.5;
  bk.visible=false

  getReady = createSprite(width/2,80,20,20);
  getReady.addImage(getReadyI);
  getReady.scale=0.7;
  
  load = createSprite(width/2,height/2);
  load.addAnimation("changing",loadI)
  load.visible=false
  computer=createSprite(0+100,height/2,15,100);
  computer.addImage(playerI);

  player=createSprite(width-100,height/2,15,100);
  player.addImage(computerI);

  game = createSprite(width/2,height/2,20,20);
  game.addImage(gameI);

  start = createSprite(width/2,height-100);
  start.addImage(startI);
  start.scale="0.2";
  //start.debug=true;
  start.setCollider("circle",0,0,200)

  restart = createSprite(width/2,height/2);
  restart.addImage(restartI);
  restart.scale="0.5";
  restart.visible=false;

  gameOver = createSprite(width/2,80);
  gameOver.addImage(gameOverI);
  gameOver.scale=0.7;
 gameOver.visible = false

  score = createSprite(width/2,80);
  score.addImage(scoreI);
  score.scale="0.3";
  score.visible = false
  S = createSprite(width/1.65,height/1.2,50,50);
   S.visible = false;
  Sc = createSprite(width/1.5,height/1.2,50,50);
  Sc.visible = false;

  P= createSprite(width/1.37,height/1.2,50,50);
  P.visible = false;

  signs = createSprite(width/2,height/2);
  signs.visible=false;
  signs.addImage(sign1)
  signs.scale = 0.4
  Cscore = 0;
  Pscore = 0;

  s = createSprite(width/1.5,height/2)
  s.visible=false

  hand2 = createSprite(width/3,height/2);
  hand2.visible =false

  sc = createSprite(width/1.5,height/2)
  sc.visible =false

  hand3 = createSprite(width/3,height/2);
  hand3.visible =false

p = createSprite(width/1.5,height/2)
p.visible =false;

hand4 = createSprite(width/3,height/2);
hand4.visible =false


}

function draw() {
  background(255);
  // console.log(gameState)
  drawSprites();

  if (gameState==-1){
    textFont("Algerian")
strokeWeight(20);
textSize(25);
fill ("black")
    text("LOADING...",20,50);
    TT--
    player.visible = false;
    getReady.visible=false;
    computer.visible=false;
    game.visible=false;
    start.visible=false;
    load.visible=true

   
    if(TT === 0){
      gameState=2;

    }
  }

  if(gameState===2){
    score.visible=false;
    player.visible = true;
    getReady.visible=true;
  computer.visible=true;
  game.visible=true;
  start.visible=true;
  load.visible=false
  }
  
  if(gameState===2 && keyDown("space")||mousePressedOver(start)){
    start.visible=false;
    getReady.visible=false;
    gameState=1;
    textFont("Algerian")
strokeWeight(20);
textSize(25);
fill ("black")
text ("Player Score: "+ Pscore,width-250,height/4)
text ("computer Score: "+ Cscore,100,height/4)
  } 
  
if(gameState===1){

   bk.visible=true;
   score.visible=true;
   game.x = width/1.5
   game.y = height/1.2;
   textFont("Algerian")
strokeWeight(20);
textSize(25);
fill ("black")
text ("Player Score: "+ Pscore,width-250,height/4)
text ("computer Score: "+ Cscore,100,height/4)

 if(mousePressedOver(S)){
  
    s.visible=true
     
     s.addImage(stone1I)
    
     var p1 =1
   
     hand2.visible =true

    var rand = Math.round(random(1,3));
    switch(rand){
    case 1:  hand2.addImage(scissor2I);
    winSound.play()
    signs.visible=true;
    signs.addImage(sign3)
             var p2 =1
    break;
    case 2:  hand2.addImage(papper2I);
    beepSound.play()
    signs.visible=true;
    signs.addImage(sign2)
             var p2 =2
    break;
    case 3:  hand2.addImage(stone2I);
    beepSound.play()
    signs.visible=true;
    signs.addImage(sign1)
              var p2 =3
    break;
    default:break;
}

    if(p1===1&&p2===1){
     gameState=POINT1;
    }
    if(p1==1&&p2==2){
     gameState=POINT2;

    }
    if(p1===1&&p2==3){
      gameState = END;
    }
  }
  if(mousePressedOver(Sc)){
    
    sc.visible =true
    
     sc.addImage(scissor1I)
     var p3 =1
     hand3.visible =true
     
   var rand1 = Math.round(random(1,3));
   switch(rand1){
   case 1:  hand3.addImage(scissor2I);
   beepSound.play()
   signs.visible=true;
   signs.addImage(sign1)
            var p4 =1
   break;
   case 2:  hand3.addImage(papper2I);
   winSound.play()
   signs.visible=true;
   signs.addImage(sign3)
            var p4 =2
   break;
   case 3:  hand3.addImage(stone2I);
   beepSound.play()
   signs.visible=true;
   signs.addImage(sign2)
             var p4 =3
   break;
   default:break;
}

   if(p3===1&&p4===2){
    gameState=POINT1;
   }
   if(p3==1&&p4==3){
    gameState=POINT2;

   }
   if(p3===1&&p4==1){
     gameState = END;
   }
   }
   if(mousePressedOver(P)){
    
    // beepSound.play()

    p.addImage(papper1I)
    p.visible =true
     var p5 =1
     hand4.visible =true
     
   var rand2 = Math.round(random(1,3));
   switch(rand2){
   case 1:  hand4.addImage(scissor2I);
   beepSound.play()
   signs.visible=true;
   signs.addImage(sign2)
            var p6 =1
   break;
   case 2:  hand4.addImage(papper2I);
   beepSound.play()
   signs.visible=true;
   signs.addImage(sign1)
            var p6 =2
   break;
   case 3:  hand4.addImage(stone2I);
   winSound.play()
   signs.visible=true;
   signs.addImage(sign3)
             var p6 =3
   break;
  default:break;
}

   if(p5===1&&p6===3){
    gameState=POINT1;
   }
   if(p5==1&&p6==1){
    gameState=POINT2;

   }
   if(p5===1&&p6==2){
     gameState = END;
   }
    
  }
}


// console.log(Pscore)
if(gameState === POINT1){
Pscore++;
scoreIm =createSprite(width-250,height/2)
scoreIm.addImage(scoreIM)
scoreIm.scale=0.1
scoreIm.visible =true;
scoreIm.velocityY = -5;
scoreIm.lifetime = 50;
gameState= END
}

if(gameState === POINT2){
  Cscore++;
scoreIm =createSprite(250,height/2)
scoreIm.addImage(scoreIM)
scoreIm.scale=0.1
scoreIm.visible =true;
scoreIm.velocityY = -5;
scoreIm.lifetime = 50;
  gameState=END;
}
if(Pscore ===5){
 
  gameState= OVER1;
  
}
if(gameState=== OVER1){


  gameOver.visible = true;
  score.visible=false
  text("You win", width/2,height/2)
  text("Press r to restart", width/2,height/2-100)
  s.visible=false
  hand2.visible=false
  
  sc.visible=false
  hand3.visible=false

  p.visible=false
  hand4.visible=false

  signs.visible=false;

  // winSound.play()

}

if(Cscore ===5){

  gameState= OVER2;
}
if(gameState=== OVER2){

  // looseSound.play()

  gameOver.visible = true;
  score.visible=false
  text("You loose", width/2,height/2)
  text("Press r to restart", width/2,height/2-100)
 
  s.visible=false
  hand2.visible=false
  
  sc.visible=false
  hand3.visible=false
  
  p.visible=false
  hand4.visible=false

  signs.visible=false;
}
if(keyDown("r")&&(gameState ===OVER1||gameState===OVER2) && (Pscore ===5||Cscore ===5)){
reset ()
}
if(gameState===END){
  textSize(20);
  text("Press Space for next chance",width/2.5,height/3);
  
}
  if(keyDown("space")&&gameState===END){
   gameState = PLAY;
  
   s.visible=false
  hand2.visible=false
  
  sc.visible=false
  hand3.visible=false
  

  p.visible=false
  hand4.visible=false

  signs.visible=false;
  }
  

//console.log(s.lifetime)
}
function reset(){
  gameState = 2;
  Pscore = 0;
 Cscore = 0;
 gameOver.visible= false;
bk.visible =false
 start.visible=true;
 getReady.visible=true;
 s.visible=false
 hand2.visible=false
 
 sc.visible=false
 hand3.visible=false
 
 p.visible=false
 hand4.visible=false

 signs.visible=false;
}


