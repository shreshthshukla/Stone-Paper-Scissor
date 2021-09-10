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
var youloose;
var TT = 150;
var won;

function preload(){

  bkI  = loadAnimation("blue.jpg","blue.jpg","green.jpg","green.jpg","pink.jpg","pink.jpg","teal.jpg","teal.jpg","yellow.jpg","yellow.jpg");
  
  startI = loadImage("start.png");
  
  restartI = loadImage("restart.png");
  
  gameOverI = loadImage("GameOver.png");
  
  getReadyI = loadImage("GetReady.png");
  
  gameI = loadImage("rock-paper-scissors.jpg");
  
  playerI = loadImage("AmongUs1.png");

  computerI = loadImage("AmongUs2.png");

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

  forwardI = loadImage("forward.png");

  papper2I = loadImage("Paper1.1.png");
  scoreIM =loadImage("score+.png")

  winSound=loadSound("youwin (mp3cut.net).mp3")

  beepSound=loadSound("beep.mp3")

  youloose = loadSound("youloose.mp3");

  won = loadSound("Won.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bk=createSprite(width/2,height/2,width,height);
  bk.addAnimation("back",bkI);
  bk.scale=width;
  bk.visible=false

  getReady = createSprite(width/2,80,20,20);
  getReady.addImage(getReadyI);
  getReady.scale=width/1500;
  
  load = createSprite(width/2,height/2);
  load.addAnimation("changing",loadI)
  load.scale=width/2000;
  load.visible=false

  computer=createSprite(0+100,height/2,15,100);
  computer.addImage(playerI);
  computer.scale=width/9800;

  player=createSprite(width-100,height/2,15,100);
  player.addImage(computerI);
  player.scale=width/1300;

  game = createSprite(width/2,height/2,20,20);
  game.addImage(gameI);
  game.scale=width/1100;

  start = createSprite(width/2,height/1.2);
  start.addImage(startI);
  start.scale=width/8000;
  //start.debug=true;
  start.setCollider("circle",0,0,200)

  restart = createSprite(width/2,height/1.4);
  restart.addImage(restartI);
  restart.scale=width/3000;
  restart.visible=false;

  gameOver = createSprite(width/2,80);
  gameOver.addImage(gameOverI);
  gameOver.scale=width/1500;
  gameOver.visible = false

  forward = createSprite(width/7.5,height/1.2)
  forward.addImage(forwardI);
  forward.scale = width/5500;
  forward.visible=false;

  score = createSprite(width/2,80);
  score.addImage(scoreI);
  score.scale=width/3500;
  score.visible = false

  S = createSprite(width/1.68,height/1.2,50,50);
   S.visible = false;
   S.scale=width/1400
  Sc = createSprite(width/1.51,height/1.2,50,50);
  Sc.visible = false;
  Sc.scale=width/1400

  P= createSprite(width/1.36,height/1.2,50,50);
  P.visible = false;
  P.scale=width/1400

  signs = createSprite(width/2,height/2);
  signs.visible=false;
  signs.addImage(sign1)
  signs.scale = width/5000
  Cscore = 0;
  Pscore = 0;

  s = createSprite(width/1.5,height/2)
  s.visible=false
  s.scale=width/1500

  hand2 = createSprite(width/3,height/2);
  hand2.visible =false
  hand2.scale=width/1500

  sc = createSprite(width/1.5,height/2)
  sc.visible =false
  sc.scale=width/1500

  hand3 = createSprite(width/3,height/2);
  hand3.visible =false
  hand3.scale=width/1500

p = createSprite(width/1.5,height/2)
p.visible =false;
p.scale=width/1500

hand4 = createSprite(width/3,height/2);
hand4.visible =false
hand4.scale=width/1500


}

function sound(){
   if(Pscore===5){
     won.play();
   }
}

function draw() {
  background(255);
  // console.log(gameState)
  drawSprites();

  if (gameState==-1){
    textFont("Algerian")
strokeWeight(20);
textSize(width/30);
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

  } 
  
if(gameState===1){

   bk.visible=true;
   score.visible=true;
   game.x = width/1.5
   game.y = height/1.2;
   textFont("Algerian")
strokeWeight(20);
textSize(width/30);
fill ("black")
text ("Player Score: "+ Pscore,width/1.6,height/4)
text ("computer Score: "+ Cscore,width/12,height/4)

 if(mousePressedOver(S)||touches.length>0){
  
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
    youloose.play()
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

    touches=[];
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
   youloose.play()
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
   youloose.play()
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
scoreIm =createSprite(width/1.5,height/2)
scoreIm.addImage(scoreIM)
scoreIm.scale=width/7000
scoreIm.visible =true;
scoreIm.velocityY = -5;
scoreIm.lifetime = 50;
gameState= END
}

if(gameState === POINT2){
  Cscore++;
scoreIm =createSprite(width/4,height/2)
scoreIm.addImage(scoreIM)
scoreIm.scale=width/7000
scoreIm.visible =true;
scoreIm.velocityY = -5;
scoreIm.lifetime = 50;
  gameState=END;
}
if(Pscore ===5){

  sound();
  gameState= OVER1;

  
}
if(gameState=== OVER1){
  Pscore = 0
  gameOver.visible = true;
  score.visible=false
  textFont("Algerian")
  strokeWeight(20);
  textSize(width/30);
  fill ("black")
  text("You win", width/2.4,height/2)
  text("Press r to restart", width/3,height/2-100)
  s.visible=false
  hand2.visible=false
  
  sc.visible=false
  hand3.visible=false

  p.visible=false
  hand4.visible=false
  game.visible=false;

  signs.visible=false;
  restart.visible = true;

  

}

if(Cscore ===5){

  gameState= OVER2;
}
if(gameState=== OVER2){

  // looseSound.play()

  gameOver.visible = true;
  score.visible=false
  textFont("Algerian")
strokeWeight(20);
textSize(width/30);
fill ("black")
  text("You loose", width/2.4,height/2)
  text("Press r to restart", width/3,height/2-100)
 
  s.visible=false
  hand2.visible=false
  
  sc.visible=false
  hand3.visible=false
  
  p.visible=false
  hand4.visible=false
  restart.visible = true;

  game.visible=false;
  signs.visible=false;
}
if(keyDown("r")||mousePressedOver(restart)&&(gameState ===OVER1||gameState===OVER2) && (Pscore ===0||Cscore ===5)){
reset ()
}
if(gameState===END){
  forward.visible=true;
  textFont("Algerian")
strokeWeight(20);
textSize(width/30);
fill ("black")
  text("Press Space for next chance",width/4,height/3);
  
}
  if(keyDown("space")||mousePressedOver(forward)&&gameState===END){
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
  //Pscore = 0;
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

 restart.visible = false;

 game.x=width/2;
 game.y=height/2;

 forward.visible=false;
}


