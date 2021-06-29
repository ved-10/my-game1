var bg1




function preload(){
  bg1 = loadImage("mainbg1.png")

}




function setup() {
  createCanvas(1000,1000);

  wall1 = createSprite(300,965,800,5);
  wall2 = createSprite(505,40,900,5);
  wall3 = createSprite(950,500,5,912);
  wall4 = createSprite(905,500,5,800);
  wall5 = createSprite(790,500,5,790);
  wall6 = createSprite(450,100,775,5);
  wall7 = createSprite(450,160,715,5);
  wall8 = createSprite(875,420,5,649);
  wall9 = createSprite(830,420,5,649);
  wall10 = createSprite(740,355,5,285);
  wall11 = createSprite(310,347,5,259);
  wall12 = createSprite(260,347,5,255);
  wall13 = createSprite(90,275,5,230);
  wall14 = createSprite(498,600,5,268);
  wall15 = createSprite(615,495,5,320);
  wall16 = createSprite(742,756,5,399);
  wall16 = createSprite(620,845,5,250);
  wall17 = createSprite(570,870,5,180);
  wall18 = createSprite(330,818,5,180);
  wall19 = createSprite(262,780,5,245);
  wall20 = createSprite(215,810,5,185);
  wall21 = createSprite(446,625,5,200);
  wall22 = createSprite(570,525,5,250);
  wall23 = createSprite(380,845,5,120);
  wall24 = createSprite(130,768,5,101);
  wall25 = createSprite(78,650,5,400);
  wall26 = createSprite(46,940,5,75);
  wall27 = createSprite(70,60,5,75);
  wall28 = createSprite(670,535,5,75);
  wall29 = createSprite(430,440,5,68);
  wall30 = createSprite(380,390,5,150);
  wall31 = createSprite(140,320,5,200);
  wall32 = createSprite(415,253,5,65);
  wall33 = createSprite(465,253,5,65);
  wall34 = createSprite(535,940,5,70);
  wall35 = createSprite(260,558,5,68);
  wall35 = createSprite(310,558,5,68);
  wall36 = createSprite(160,470,195,5);
  wall37 = createSprite(200,220,130,5);
  wall38 = createSprite(360,220,110,5);
  wall39 = createSprite(600,220,285,5);
  wall40 = createSprite(450,280,110,5);
  wall41 = createSprite(500,350,230,5);
  wall42 = createSprite(495,410,139,5);
  wall43 = createSprite(480,470,100,5);
  wall44 = createSprite(350,470,70,5);
  wall45 = createSprite(380,530,140,5);
  wall46 = createSprite(165,530,190,5);
  wall47 = createSprite(165,660,190,5);
  wall48 = createSprite(385,730,120,5);
  wall49 = createSprite(550,730,130,5);
  wall50 = createSprite(470,790,195,5);
  wall50 = createSprite(470,905,195,5);
  wall50 = createSprite(300,905,80,5);
  wall50 = createSprite(120,905,195,5);
  wall50 = createSprite(100,820,60,5);
  wall50 = createSprite(170,720,90,5);
  wall50 = createSprite(300,590,90,5);
  wall50 = createSprite(100,365,90,5);
  wall50 = createSprite(600,655,90,5);
  wall50 = createSprite(710,555,70,5);
  wall50 = createSprite(710,495,75,5);
  wall50 = createSprite(850,745,75,5);
  wall50 = createSprite(850,895,115,5);
  wall50 = createSprite(850,955,205,5);

chest1 = createSprite(100,800,10,10);
chest2 = createSprite(100,500,10,10);
chest3 = createSprite(110,350,10,10);
chest4 = createSprite(600,640,10,10);
chest5 = createSprite(850,730,10,10);
chest6 = createSprite(590,950,10,10);
chest7 = createSprite(520,940,10,10);
chest8 = createSprite(930,640,10,10);

tchest1 = createSprite(290,570,10,10)
tchest2 = createSprite(680,530,10,10)
tchest3 = createSprite(440,270,10,10)

obstical1 = createSprite(100,750,60,5)
obstical2 = createSprite(150,500,5,60)
obstical3 = createSprite(290,550,60,5)
obstical4 = createSprite(110,320,60,5)
obstical5 = createSprite(600,600,60,5)
obstical6 = createSprite(100,750,60,5)
obstical7 = createSprite(850,700,60,5)
obstical8 = createSprite(590,910,60,5)
obstical9 = createSprite(480,940,5,60)
obstical10 = createSprite(930,600,60,5)
obstical11 = createSprite(930,680,60,5)
obstical12 = createSprite(100,750,60,5)
obstical13 = createSprite(720,530,5,60)
obstical14 = createSprite(440,240,60,5)
obstical15 = createSprite(130,70,5,60)

exit1 = createSprite(80,70,10,10)
}

 


function draw() {
  background(bg1);  
  drawSprites();
}