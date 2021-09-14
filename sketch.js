// Making variable for everything;
var player,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8;
var ehb1,ehb2,ehb3,ehb4,ehb5,ehb6,ehb7,ehb8,phb;
var eh1,eh2,eh3,eh4,eh5,eh6,eh7,eh8,ph,EB,PB,shortEDG,shortPDG,snipeEDG,snipePDG,smgPDG;
var shortPB,shortEB,snipePB,snipeEB,smgPB,Contraimg,logoimg,wall,walls,wallH,wallG;
var loaderbar,loader,logo,sniper,smg,sg,SGEimg,SEimg,playerD,playerU,playerL,playerR;
var gameState=1;
var gun=1;
var shortBC=25;
var snipeBC=50;
var smgBC=75;
var wallH=600;
var walls=10;

// Loading all the images;
function preload() {
  logoimg=loadImage("Image/Contra.png");
  shortPB=loadImage("Image/shortPB.png");
  shortEB=loadImage("Image/shortEB.png");
  snipePB=loadImage("Image/snipePB.png");
  snipeEB=loadImage("Image/snipeEB.png");
  smgPB=loadImage("Image/smgPB.png");
  sg=loadImage("Image/sg.png");
  sniper=loadImage("Image/sniper.png");
  smg=loadImage("Image/smg.png"); 
  SGEimg=loadImage("Image/SGEimg.png");
  SEimg=loadImage("Image/SEimg.png");
  playerU=loadImage("Image/playerU.png");
  playerD=loadImage("Image/playerD.png");
  playerL=loadImage("Image/playerL.png");
  playerR=loadImage("Image/playerR.png"); 
}

// Createing all the sprites;
function setup() {
  createCanvas(1510,710);

  // Createing all the object for loading screen;
  loaderbar = createSprite(755,600,810,20);
  loaderbar.visible = false;
  loaderbar.shapeColor="white";
  loader = createSprite(370,600,40,20);
  loader.visible = false;
  logo = createSprite(755,355,20,20);
  logo.visible = false;
  logo.scale=0.75;
  logo.addImage(logoimg);

  // Createing all the PC and NPC;
  player = createSprite(1460-50,200,30,30);
  player.addImage(playerD);
  player.scale=0.4
  player.visible = false;
  player.shapeColor="green";
  player.debug=true;
  enemy1 = createSprite(1310-450,30,50,30);
  enemy1.addImage(SEimg);
  enemy1.scale = 1.5;
  enemy1.visible = false;
  enemy1.shapeColor="red";
  enemy1.velocityX=5;
  enemy1.debug=true;
  enemy2 = createSprite(1310-600,30,50,30);
  enemy2.addImage(SGEimg);
  enemy2.scale = 1.5;
  enemy2.visible = false;
  enemy2.shapeColor="red";
  enemy2.velocityX=5;
  enemy2.debug=true;
  enemy3 = createSprite(1310-700,30,50,30);
  enemy3.addImage(SEimg);
  enemy3.scale = 1.5;
  enemy3.visible = false;
  enemy3.shapeColor="red";
  enemy3.velocityX=4;
  enemy3.debug=true;
  enemy4 = createSprite(1310-850,30,50,30);
  enemy4.addImage(SGEimg);
  enemy4.scale = 1.5;
  enemy4.visible = false;
  enemy4.shapeColor="red";
  enemy4.velocityX=4;
  enemy4.debug=true;
  enemy5 = createSprite(1310-1050,30,50,30);
  enemy5.addImage(SEimg);
  enemy5.scale = 1.5;
  enemy5.visible = false;
  enemy5.shapeColor="red";
  enemy5.velocityX=5;
  enemy5.debug=true;
  enemy6 = createSprite(1310-1200,30,50,30);
  enemy6.addImage(SGEimg);
  enemy6.scale = 1.5;
  enemy6.visible = false;
  enemy6.shapeColor="red";
  enemy6.velocityX=5;
  enemy6.debug=true;
  enemy7 = createSprite(1310-1300,30,50,30);
  enemy7.addImage(SEimg);
  enemy7.scale = 1.5;
  enemy7.visible = false;
  enemy7.shapeColor="red";
  enemy7.velocityX=4;
  enemy7.debug=true;
  enemy8 = createSprite(1310-1450,30,50,30);
  enemy8.addImage(SGEimg);
  enemy8.scale = 1.5;
  enemy8.visible = false;
  enemy8.shapeColor="red";
  enemy8.velocityX=4;
  enemy8.debug=true;

  // Making Health for every character;
  phb = createSprite(1460-125,300,20,600);
  phb.visible = false;
  ph = createSprite(1460-125,300,20,600);
  ph.visible = false;
  ph.shapeColor="green";
  ehb1 = createSprite(1460-275,300,20,600);
  ehb1.visible = false;
  eh1 = createSprite(1460-275,300,20,600);
  eh1.visible = false;
  eh1.shapeColor="red";
  ehb2 = createSprite(1460-425,300,20,600);
  ehb2.visible = false;
  eh2 = createSprite(1460-425,300,20,600);
  eh2.visible = false;
  eh2.shapeColor="red";
  ehb3 = createSprite(1460-575,300,20,600);
  ehb3.visible = false;
  eh3 = createSprite(1460-575,300,20,600);
  eh3.visible = false;
  eh3.shapeColor="red";
  ehb4 = createSprite(1460-725,300,20,600);
  ehb4.visible = false;
  eh4 = createSprite(1460-725,300,20,600);
  eh4.visible = false;
  eh4.shapeColor="red";
  ehb5 = createSprite(1460-875,300,20,600);
  ehb5.visible = false;
  eh5 = createSprite(1460-875,300,20,600);
  eh5.visible = false;
  eh5.shapeColor="red";
  ehb6 = createSprite(1460-1025,300,20,600);
  ehb6.visible = false;
  eh6 = createSprite(1460-1025,300,20,600);
  eh6.visible = false;
  eh6.shapeColor="red";
  ehb7 = createSprite(1460-1175,300,20,600);
  ehb7.visible = false;
  eh7 = createSprite(1460-1175,300,20,600);
  eh7.visible = false;
  eh7.shapeColor="red";
  ehb8 = createSprite(1460-1325,300,20,600);
  ehb8.visible = false;
  eh8 = createSprite(1460-1325,300,20,600);
  eh8.visible = false;
  eh8.shapeColor="red";

  // Making byullet groups;
  snipePDG = new Group();
  smgPDG = new Group();
  shortPDG = new Group();
  snipeEDG = new Group();
  shortEDG = new Group();
  wallG = new Group();
}

// Giving everything function;
function draw() {
  background("cyan");  

  // Createing loading screen;
  if(gameState===1){
    loaderbar.visible = true;
    loader.visible = true;
    logo.visible = true;
    loader.velocityX = 10;
  }
  if(loader.x>1135){
    loader.velocityX = 0;
    loaderbar.visible = false;
    loader.visible = false;
    logo.visible = false;
    background("white");
    gameState = 2;
    loader.x=0;
   }

   // Createing the main game;
  if(gameState===2){

    // Making everything visible;
    player.visible = true; 
    enemy1.visible = true;
    enemy2.visible = true;
    enemy3.visible = true;
    enemy4.visible = true;
    enemy5.visible = true;
    enemy6.visible = true;
    enemy7.visible = true;
    enemy8.visible = true;
    phb.visible = true;
    ph.visible = true;
    ehb1.visible = true;
    eh1.visible = true;
    ehb2.visible = true;
    eh2.visible = true;
    ehb3.visible = true;
    eh3.visible = true;
    ehb4.visible = true;
    eh4.visible = true;
    ehb5.visible = true;
    eh5.visible = true;
    ehb6.visible = true;
    eh6.visible = true;
    ehb7.visible = true;
    eh7.visible = true;
    ehb8.visible = true;
    eh8.visible = true;
    
    // Giving player movements;
    if (keyDown("w") || keyDown("UP_ARROW")){
      player.y = (player.y -5);
      player.addImage(playerU);
      player.scale=0.4;
     }
     if (keyDown("s") || keyDown("DOWN_ARROW")){
      player.y = (player.y +5);
      player.addImage(playerD);
      player.scale=0.4;
     }
     if (keyDown("a") || keyDown("LEFT_ARROW")){
      player.x = (player.x -5);
      player.addImage(playerL);
      player.scale=0.4;
     }
     if (keyDown("d") || keyDown("RIGHT_ARROW")){
      player.x = (player.x +5);
      player.addImage(playerR);
      player.scale=0.4;
     }

     // Createing borders and collides;
     player.bounce(ph);
     player.bounce(eh1);
     player.bounce(eh2);
     player.bounce(eh3);
     player.bounce(eh4);
     player.bounce(eh5);
     player.bounce(eh6);
     player.bounce(eh7);
     player.bounce(eh8);
     player.bounce(phb);
     player.bounce(ehb1);
     player.bounce(ehb2);
     player.bounce(ehb3);
     player.bounce(ehb4);
     player.bounce(ehb5);
     player.bounce(ehb6);
     player.bounce(ehb7);
     player.bounce(ehb8);
     player.bounce(enemy1);
     player.bounce(enemy2);
     player.bounce(enemy3);
     player.bounce(enemy4);
     player.bounce(enemy5);
     player.bounce(enemy6);
     player.bounce(enemy7);
     player.bounce(enemy8);
     enemy1.bounceOff(phb);
     enemy1.bounceOff(ehb1);
     enemy2.bounceOff(ehb1);
     enemy2.bounceOff(ehb2);
     enemy3.bounceOff(ehb2);
     enemy3.bounceOff(ehb3);
     enemy4.bounceOff(ehb3);
     enemy4.bounceOff(ehb4);
     enemy5.bounceOff(ehb4);
     enemy5.bounceOff(ehb5);
     enemy6.bounceOff(ehb5);
     enemy6.bounceOff(ehb6);
     enemy7.bounceOff(ehb6);
     enemy7.bounceOff(ehb7);
     enemy8.bounceOff(ehb7);
     enemy8.bounceOff(ehb8);


    // Createing player bullets;
    if(keyWentDown("1")){
      gun=1;
    }else if(keyWentDown("2")){
      gun=2;
    }else if(keyWentDown("3")){
      gun=3;
    }else if(keyWentDown("4")){
      gun=4;
    }
    if(keyWentDown("space") && gun===1 && snipeBC>0){
      snipeBC=snipeBC-1;
      PB = createSprite(player.x,player.y-20,1,1);
      PB.setCollider("rectangle",0,0,5,30);
      PB.addImage(snipePB);
      PB.scale=0.04;
      PB.velocityY=-50;
      PB.lifetime=37.5;
      snipePDG.add(PB);
     }
    if(keyDown("space") && gun===2 && smgBC>0){
    if(World.frameCount % 2.5 ===0){
      smgBC=smgBC-1;
      PB = createSprite(player.x,player.y-20,1,1);
      PB.setCollider("rectangle",0,0,5,30);
      PB.addImage(smgPB);
      PB.scale=0.02;
      PB.velocityY=-45;
      PB.lifetime=55;
      smgPDG.add(PB);
     }}
    if(keyWentDown("space") && gun===3 && shortBC>0){
      shortBC=shortBC-1;
      PBL = createSprite(player.x-10,player.y-10,1,1);
      PB = createSprite(player.x,player.y-20,1,1);
      PBR = createSprite(player.x+10,player.y,1,1);
      PBL.setCollider("rectangle",0,0,5,30);
      PB.setCollider("rectangle",0,0,5,30);
      PBR.setCollider("rectangle",0,0,5,30);
      PBL.addImage(shortPB);
      PB.addImage(shortPB);
      PBR.addImage(shortPB);
      PBL.scale=0.02;
      PB.scale=0.02;
      PBR.scale=0.02;
      PBL.velocityY=-40;
      PB.velocityY=-40;
      PBR.velocityY=-40;
      PBL.lifetime=75;
      PB.lifetime=75;
      PBR.lifetime=75;
      shortPDG.add(PBL);
      shortPDG.add(PB);
      shortPDG.add(PBR);
     }
    if(keyWentDown("space") && gun===4 && walls>0){
      wall=createSprite(player.x,player.y-30,60,20);
      wall.bounceOff(player);
      wallH=600;
      walls=walls-1;
      wall.lifetime=-1;
      wallG.add(wall);
    }

    //createing indicatiors for the gun;
    if(gun===1){
      imageMode(CENTER);
      image(sniper,1400,110,150,75);
    if(snipeBC===0){
      textSize(20);
      fill("red");
      text("NO AMMO",1350,120);
      }
    }
    if(gun===2){
      imageMode(CENTER);
      image(smg,1400,110,150,75);
    if(smgBC===0){
      textSize(20);
      fill("red");
      text("NO AMMO",1350,120);
      }
    }
    if(gun===3){
      imageMode(CENTER);
      image(sg,1400,110,150,100);
    if(shortBC===0){
      textSize(20);
      fill("red");
      text("NO AMMO",1350,120);
      }
    }
    if(gun===4){
      textSize(20);
      fill("black");
      text("Gun:Shield",1350,100);
    if(walls===0){
      textSize(20);
      fill("red");
      text("NO SHEILD",1350,120);
    }
    } 
    //createing enemy bullets;
    if(eh1.height>0 && World.frameCount % 25 === 0){
      EB = createSprite(enemy1.x,50,1,1);
      EB.addImage(snipeEB);
      EB.setCollider("rectangle",0,0,5,30);
      EB.scale=0.04;
      EB.velocityY =10;
      EB.lifetime =75;
      snipeEDG.add(EB);
    }
    if(eh2.height>0 && World.frameCount % 30 === 0){
      EBL = createSprite(enemy2.x-10,50,1,1);
      EB = createSprite(enemy2.x,50,1,1);
      EBR = createSprite(enemy2.x+10,50,1,1);
      EBL.addImage(shortEB);
      EB.addImage(shortEB);
      EBR.addImage(shortEB);
      EBL.setCollider("rectangle",0,0,5,30);
      EB.setCollider("rectangle",0,0,5,30);
      EBR.setCollider("rectangle",0,0,5,30);
      EBL.scale=0.02;
      EB.scale=0.02;
      EBR.scale=0.02;
      EBL.velocityY =10;
      EB.velocityY =10;
      EBR.velocityY =10;
      EBL.lifetime =75;
      EB.lifetime =75;
      EBR.lifetime =75;
      shortEDG.add(EBL);
      shortEDG.add(EB);
      shortEDG.add(EBR);
    }
    if(eh3.height>0 && World.frameCount % 22 === 0){
      EB = createSprite(enemy3.x,50,1,1);
      EB.addImage(snipeEB);
      EB.setCollider("rectangle",0,0,5,30);
      EB.scale=0.04;
      EB.velocityY =10;
      EB.lifetime =75;
      snipeEDG.add(EB);
    }
    if(eh4.height>0 && World.frameCount % 20 === 0){
      EBL = createSprite(enemy4.x-10,50,1,1);
      EB = createSprite(enemy4.x,50,1,1);
      EBR = createSprite(enemy4.x+10,50,1,1);
      EBL.addImage(shortEB);
      EB.addImage(shortEB);
      EBR.addImage(shortEB);
      EBL.setCollider("rectangle",0,0,5,30);
      EB.setCollider("rectangle",0,0,5,30);
      EBR.setCollider("rectangle",0,0,5,30);
      EBL.scale=0.02;
      EB.scale=0.02;
      EBR.scale=0.02;
      EBL.velocityY =10;
      EB.velocityY =10;
      EBR.velocityY =10;
      EBL.lifetime =75;
      EB.lifetime =75;
      EBR.lifetime =75;
      shortEDG.add(EBL);
      shortEDG.add(EB);
      shortEDG.add(EBR);
    }
    if(eh5.height>0 && World.frameCount % 19 === 0){
      EB = createSprite(enemy5.x,50,1,1);
      EB.addImage(snipeEB);
      EB.setCollider("rectangle",0,0,5,30);
      EB.scale=0.04;
      EB.velocityY =10;
      EB.lifetime =75;
      snipeEDG.add(EB);
    }
    if(eh6.height>0 && World.frameCount % 18 === 0){
      EBL = createSprite(enemy6.x-10,50,1,1);
      EB = createSprite(enemy6.x,50,1,1);
      EBR = createSprite(enemy6.x+10,50,1,1);
      EBL.addImage(shortEB);
      EB.addImage(shortEB);
      EBR.addImage(shortEB);
      EBL.setCollider("rectangle",0,0,5,30);
      EB.setCollider("rectangle",0,0,5,30);
      EBR.setCollider("rectangle",0,0,5,30);
      EBL.scale=0.02;
      EB.scale=0.02;
      EBR.scale=0.02;
      EBL.velocityY =10;
      EB.velocityY =10;
      EBR.velocityY =10;
      EBL.lifetime =75;
      EB.lifetime =75;
      EBR.lifetime =75;
      shortEDG.add(EBL);
      shortEDG.add(EB);
      shortEDG.add(EBR);
    }
    if(eh7.height>0 && World.frameCount % 23 === 0){
      EB = createSprite(enemy7.x,50,1,1);
      EB.addImage(snipeEB);
      EB.setCollider("rectangle",0,0,5,30);
      EB.scale=0.04;
      EB.velocityY =10;
      EB.lifetime =75;
      snipeEDG.add(EB);
    }
    if(eh8.height>0 && World.frameCount % 21 === 0){
      EBL = createSprite(enemy8.x-10,50,1,1);
      EB = createSprite(enemy8.x,50,1,1);
      EBR = createSprite(enemy8.x+10,50,1,1);
      EBL.addImage(shortEB);
      EB.addImage(shortEB);
      EBR.addImage(shortEB);
      EBL.setCollider("rectangle",0,0,5,30);
      EB.setCollider("rectangle",0,0,5,30);
      EBR.setCollider("rectangle",0,0,5,30);
      EBL.scale=0.02;
      EB.scale=0.02;
      EBR.scale=0.02;
      EBL.velocityY =10;
      EB.velocityY =10;
      EBR.velocityY =10;
      EBL.lifetime =75;
      EB.lifetime =75;
      EBR.lifetime =75;
      shortEDG.add(EBL);
      shortEDG.add(EB);
      shortEDG.add(EBR);
    }

    // Making enemy health less if PB touches Enemyes;

    snipePDG.collide(enemy1,reduceHealth11);
    smgPDG.collide(enemy1,reduceHealth12);
    shortPDG.collide(enemy1,reduceHealth12);
    if(eh1.height<10){
      eh1.lifetime=0;
    }
    snipePDG.collide(enemy2,reduceHealth21);
    smgPDG.collide(enemy2,reduceHealth22);
    shortPDG.collide(enemy2,reduceHealth22);
    if(eh2.height<10){
      eh2.lifetime=0;
    }
    snipePDG.collide(enemy3,reduceHealth31);
    smgPDG.collide(enemy3,reduceHealth32);
    shortPDG.collide(enemy3,reduceHealth32);
    if(eh3.height<10){
      eh3.lifetime=0;
    }
    snipePDG.collide(enemy4,reduceHealth41);
    smgPDG.collide(enemy4,reduceHealth42);
    shortPDG.collide(enemy4,reduceHealth42);
    if(eh4.height<10){
      eh4.lifetime=0;
    }
    snipePDG.collide(enemy5,reduceHealth51);
    smgPDG.collide(enemy5,reduceHealth52);
    shortPDG.collide(enemy5,reduceHealth52);
    if(eh5.height<10){
      eh5.lifetime=0;
    }
    snipePDG.collide(enemy6,reduceHealth61);
    smgPDG.collide(enemy6,reduceHealth62);
    shortPDG.collide(enemy6,reduceHealth62);
    if(eh6.height<10){
      eh6.lifetime=0;
    }
    snipePDG.collide(enemy7,reduceHealth71);
    smgPDG.collide(enemy7,reduceHealth72);
    shortPDG.collide(enemy7,reduceHealth72);
    if(eh7.height<10){
      eh7.lifetime=0;
    }
    snipePDG.collide(enemy8,reduceHealth81);
    smgPDG.collide(enemy8,reduceHealth82);
    shortPDG.collide(enemy8,reduceHealth82);
    if(eh8.height<10){
      eh8.lifetime=0;
    } 
    
    //Making player health go low if any bullet touches it;
    snipeEDG.collide(player,reduceHealthp);
    shortEDG.collide(player,reduceHealthp2);
    if(ph.height<10){
      gameState=3;
      ph.lifetime=0;
    } 
    if(snipeEDG.collide(wallG)){
      wallH=wallH-60;
    }
    if(shortEDG.collide(wallG)){
      wallH=wallH-40;
    }
    if(wallH<0 || wallH===0){
      wallG.destroyEach();
    }
    if(eh1.lifetime===0 && eh2.lifetime===0 && eh3.lifetime===0 && eh4.lifetime===0 && eh5.lifetime===0 && eh6.lifetime===0 && eh7.lifetime===0 && eh8.lifetime===0){
      gameState=4;
    }
}
  
  // Making greetings when the game ends;
  
  drawSprites();
  if(gameState===3){
    textSize(50);
    fill("red");
    text("Game Over",650,200);
    eh1.visible = false;
    eh2.visible = false;
    eh3.visible = false;
    eh4.visible = false;
    eh5.visible = false;
    eh6.visible = false;
    eh7.visible = false;
    eh8.visible = false;
    enemy1.visible = false;
    enemy2.visible = false;
    enemy3.visible = false;
    enemy4.visible = false;
    enemy5.visible = false;
    enemy6.visible = false;
    enemy7.visible = false;
    enemy8.visible = false;
    ehb1.visible = false;
    ehb2.visible = false;
    ehb3.visible = false;
    ehb4.visible = false;
    ehb5.visible = false;
    ehb6.visible = false;
    ehb7.visible = false;
    ehb8.visible = false;
    logo.y=455;
    logo.visible = true;
    wallG.destroyEach();
  }
  if(gameState===4){
    textSize(50);
    fill("green");
    text("ALL ENEMY DOWN",550,200);
    eh1.visible = false;
    eh2.visible = false;
    eh3.visible = false;
    eh4.visible = false;
    eh5.visible = false;
    eh6.visible = false;
    eh7.visible = false;
    eh8.visible = false;
    enemy1.visible = false;
    enemy2.visible = false;
    enemy3.visible = false;
    enemy4.visible = false;
    enemy5.visible = false;
    enemy6.visible = false;
    enemy7.visible = false;
    enemy8.visible = false;
    ehb1.visible = false;
    ehb2.visible = false;
    ehb3.visible = false;
    ehb4.visible = false;
    ehb5.visible = false;
    ehb6.visible = false;
    ehb7.visible = false;
    ehb8.visible = false;
    logo.y=455;
    logo.visible = true;
    wallG.destroyEach();
  }
  if(gameState===2){
    textSize(20);
    fill("black");
    text("SNIPE bullet:"+snipeBC,1350,20);
    text("SMG bullet:"+smgBC,1350,40);
    text("SHORT bullet:"+shortBC,1350,60);
    text("Shields:"+walls,1350,80);
    text("wallHealth"+wallH,1350,140);
  }
  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY-25);
}

function reduceHealth11(b,en){
  b.destroy();
  eh1.height=eh1.height-60;
  eh1.y=eh1.y+30;
}
function reduceHealth12(b,en){
  b.destroy();
  eh1.height=eh1.height-40;
  eh1.y=eh1.y+20;
}

function reduceHealth21(b,en){
  b.destroy();
  eh2.height=eh2.height-60;
  eh2.y=eh2.y+30;
}
function reduceHealth22(b,en){
  b.destroy();
  eh2.height=eh2.height-40;
  eh2.y=eh2.y+20;
}

function reduceHealth31(b,en){
  b.destroy();
  eh3.height=eh3.height-60;
  eh3.y=eh3.y+30;
}
function reduceHealth32(b,en){
  b.destroy();
  eh3.height=eh3.height-40;
  eh3.y=eh3.y+20;
}

function reduceHealth41(b,en){
  b.destroy();
  eh4.height=eh4.height-60;
  eh4.y=eh4.y+30;
}
function reduceHealth42(b,en){
  b.destroy();
  eh4.height=eh4.height-40;
  eh4.y=eh4.y+20;
}

function reduceHealth51(b,en){
  b.destroy();
  eh5.height=eh5.height-60;
  eh5.y=eh5.y+30;
}
function reduceHealth52(b,en){
  b.destroy();
  eh5.height=eh5.height-40;
  eh5.y=eh5.y+20;
}

function reduceHealth61(b,en){
  b.destroy();
  eh6.height=eh6.height-60;
  eh6.y=eh6.y+30;
}
function reduceHealth62(b,en){
  b.destroy();
  eh6.height=eh6.height-40;
  eh6.y=eh6.y+20;
}

function reduceHealth71(b,en){
  b.destroy();
  eh7.height=eh7.height-60;
  eh7.y=eh7.y+30;
}
function reduceHealth72(b,en){
  b.destroy();
  eh7.height=eh7.height-40;
  eh7.y=eh7.y+20;
}

function reduceHealth81(b,en){
  b.destroy();
  eh8.height=eh8.height-60;
  eh8.y=eh8.y+30;
}
function reduceHealth82(b,en){
  b.destroy();
  eh8.height=eh8.height-40;
  eh8.y=eh8.y+20;
}

function reduceHealthp(b,en){
  b.destroy();
  ph.height=ph.height-60;
  ph.y=ph.y+30;
}
function reduceHealthp2(b,en){
  b.destroy();
  ph.height=ph.height-40;
  ph.y=ph.y+20;
}