var player;
var lane1, lane2, lane3, lane4, lane5;
var lane1Group, lane2Group, lane3Group, lane4Group;
var playerImage, human1, oldlady, kid, man, soap;
var num = 0, num2 = 0, num3 = 0, num4 = 0;

function preload(){
playerImage = loadImage("images/monster2.png");
playerImage.debug = true;
human1 = loadImage("images/businessman1.jpg");
human1.debug = true;
oldlady = loadImage("images/old lady.jpg");
oldlady.debug = true;
kid = loadImage("images/kid.jpg");
kid.debug = true;
man = loadImage("images/man.jpg");
man.debug = true;
soapImage = loadImage("images/sanitizer2.png");

}

function setup() {
  createCanvas(800, 600);
  soap=createSprite(700, 300, 50, 50);
  soap.addImage("soap", soapImage);
  soap.scale= 0.25;
  lane1 = createSprite(200, 300, 10, 600);
  lane1.shapeColor = "black";
  lane2 = createSprite(300, 300, 10, 600);
  lane2.shapeColor = "black";
  lane3 = createSprite(400, 300, 10, 600);
  lane3.shapeColor = "black";
  lane4 = createSprite(500, 300, 10, 600);
  lane4.shapeColor = "black";
  lane5 = createSprite(600, 300, 10, 600);
  lane5.shapeColor = "black";
  player = createSprite(100, 300, 20, 20);
  player.addImage("monster", playerImage);
  player.scale = 0.2;
  lane1Group = new Group();
  lane2Group = new Group();
  lane3Group = new Group();
  lane4Group = new Group();
  monsterGroup = new Group();
  monster2Group = new Group();
  monster3Group = new Group();
  monster4Group = new Group();
}

function draw() {
  background(255, 255, 255);  

  if(keyDown("LEFT_ARROW")) {
    player.x = player.x - 5;
  }

  if(keyDown("RIGHT_ARROW")) {
    player.x = player.x + 5;
  }

  if(keyDown("DOWN_ARROW")) {
    player.y = player.y + 5;
  }

  if(keyDown("UP_ARROW")) {
    player.y = player.y - 5;
  }

  if(player.isTouching(lane1Group)){
    num =1;
  }
  if(num === 0){
    lane1Spawn();
  } else{
    monsterSpawn();
  }

  if(player.isTouching(lane2Group)){
    num2 =1;
  }
  if(num2 === 0){
    lane2Spawn();
  } else{
    monster2Spawn();
  }
  
  if(player.isTouching(lane3Group)){
    num3 =1;
  }
  if(num3 === 0){
    lane3Spawn();
  } else{
    monster3Spawn();
  }

  if(player.isTouching(lane4Group)){
    num4 =1;
  }
  if(num4 === 0){
    lane4Spawn();
  } else{
    monster4Spawn();
  }

  drawSprites();
}

function lane1Spawn() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(250,0,15, 15);
    obstacle.addImage("oldlady", oldlady);
    //obstacle.debug=true;
    obstacle.setCollider('rectangle', 0, 0, 20, 20);
    obstacle.scale = 0.125;
    obstacle.x = random(225, 275);
    obstacle.velocityY = (4);
    obstacle.lifetime = 610;

    obstacle.depth = lane2.depth;
    lane2.depth = lane2.depth +1;
    obstacle.depth = lane1.depth;
    lane1.depth = lane1.depth +1;
    player.depth = obstacle.depth + 1;
    lane1Group.add(obstacle);
  }
}

function lane2Spawn() {
  if(frameCount % 40 === 0) {
    var obstacle2 = createSprite(350,0,15,15);
    obstacle2.addImage("man", man);
    obstacle2.setCollider('rectangle', 0, 0, 20, 20);
    obstacle2.scale = 0.1;
    obstacle2.x = random(325, 375);
    obstacle2.velocityY = (5);
    obstacle2.lifetime = 310;

    lane3.depth = lane3.depth +1;
    obstacle2.depth = lane3.depth;
    obstacle2.depth = lane2.depth;
    lane2.depth = lane2.depth +1;
    player.depth = obstacle2.depth + 1;
    lane2Group.add(obstacle2);
  }
}



function lane3Spawn() {
  if(frameCount % 30 === 0) {
    var obstacle3 = createSprite(450,0,15, 15);
    obstacle3.addImage("human", human1);
    obstacle3.setCollider('rectangle', 0, 0, 20, 20);
    obstacle3.scale = 0.1;
    obstacle3.x = random(425, 475);
    obstacle3.velocityY = (7);
    obstacle3.lifetime = 610;
    obstacle3.depth = lane4.depth;
    lane4.depth = lane4.depth +1;
    obstacle3.depth = lane3.depth;
    lane3.depth = lane3.depth +1;
    player.depth = obstacle3.depth + 1;
    lane3Group.add(obstacle3);
  }
}


function lane4Spawn() {
  if(frameCount % 20 === 0) {
    var obstacle4 = createSprite(550,0,15,15);
    obstacle4.addImage("kid", kid);
    obstacle4.setCollider('rectangle', 0, 0, 20, 20);
    obstacle4.scale = 0.05;
    obstacle4.x = random(525, 575);
    obstacle4.velocityY = (9);
    obstacle4.lifetime = 310;

    obstacle4.depth = lane5.depth;
    lane5.depth = lane5.depth +1;
    obstacle4.depth = lane4.depth;
    lane4.depth = lane4.depth +1;
    player.depth = obstacle4.depth + 1;
    lane4Group.add(obstacle4);
  }
}


function monsterSpawn(){
  if(frameCount % 60 === 0) {
    var obstacle1a = createSprite(250,0,15, 15);
    obstacle1a.addImage("monster", playerImage);
    obstacle1a.scale = 0.125;
    obstacle1a.x = random(225, 275);
    obstacle1a.velocityY = (4);
    obstacle1a.lifetime = 610;

    obstacle1a.depth = lane2.depth;
    lane2.depth = lane2.depth +1;
    obstacle1a.depth = lane1.depth;
    lane1.depth = lane1.depth +1;
    player.depth = obstacle1a.depth + 1;
    monsterGroup.add(obstacle1a);
  }
}

function monster2Spawn() {
  if(frameCount % 40 === 0) {
    var obstacle2a = createSprite(350,0,15,15);
    obstacle2a.addImage("monster", playerImage);
    obstacle2a.scale = 0.125;
    obstacle2a.x = random(325, 375);
    obstacle2a.velocityY = (5);
    obstacle2a.lifetime = 310;

    lane3.depth = lane3.depth +1;
    obstacle2a.depth = lane3.depth;
    obstacle2a.depth = lane2.depth;
    lane2.depth = lane2.depth +1;
    player.depth = obstacle2a.depth + 1;
    monster2Group.add(obstacle2a);
  }
}

function monster3Spawn() {
  if(frameCount % 30 === 0) {
    var obstacle3a = createSprite(450,0,15, 15);
    obstacle3a.addImage("monster", playerImage);
    obstacle3a.scale = 0.125;
    obstacle3a.x = random(425, 475);
    obstacle3a.velocityY = (7);
    obstacle3a.lifetime = 610;
    obstacle3a.depth = lane4.depth;
    lane4.depth = lane4.depth +1;
    obstacle3a.depth = lane3.depth;
    lane3.depth = lane3.depth +1;
    player.depth = obstacle3a.depth + 1;
    monster3Group.add(obstacle3a);
  }
}

function monster4Spawn() {
  if(frameCount % 20 === 0) {
    var obstacle4a = createSprite(550,0,15,15);
    obstacle4a.addImage("monster", playerImage);
    obstacle4a.scale = 0.125;
    obstacle4a.x = random(525, 575);
    obstacle4a.velocityY = (9);
    obstacle4a.lifetime = 310;

    obstacle4a.depth = lane5.depth;
    lane5.depth = lane5.depth +1;
    obstacle4a.depth = lane4.depth;
    lane4.depth = lane4.depth +1;
    player.depth = obstacle4a.depth + 1;
    monster4Group.add(obstacle4a);
  } 
}