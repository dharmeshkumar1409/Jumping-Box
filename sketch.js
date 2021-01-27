var box1, box2, box3, box4;
var mb;
var music;
var rightEdge, leftEdge, topEdge, bottomEdge;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(800, 600);

    //create 4 different surfaces
    box1 = createSprite(100, 550, 180, 30);
    box1.shapeColor = "blue";

    box2 = createSprite(300, 550, 180, 30);
    box2.shapeColor = "green";

    box3 = createSprite(500, 550, 180, 30);
    box3.shapeColor = "red";

    box4 = createSprite(700, 550, 180, 30);
    box4.shapeColor = "yellow";

    rightEdge = createSprite(800, 300, 5, 600);
    leftEdge = createSprite(0, 300, 5, 600);
    topEdge = createSprite(400, 0, 800, 5);
    bottomEdge = createSprite(400, 600, 800, 5);

    //create box sprite and give velocity

    mb = createSprite(random(20, 570), 50, 30, 30);
    mb.shapeColor = "white";
    mb.setVelocity(-4, 5);

}

function draw() {
    background(200);

    //create edgeSprite
    mb.bounceOff(rightEdge);
    mb.bounceOff(leftEdge);
    mb.bounceOff(topEdge);
    mb.bounceOff(bottomEdge);


    //add condition to check if box touching surface and make it box

    if (box1.isTouching(mb) && mb.bounceOff(box1)) {
        mb.shapeColor = ("blue");
    } else if (box2.isTouching(mb) && mb.bounceOff(box2)) {
        mb.shapeColor = ("green");
    } else if (box3.isTouching(mb) && mb.bounceOff(box3)) {
        mb.shapeColor = ("red");
        mb.setVelocity(0, 0);
    } else if (box4.isTouching(mb) && mb.bounceOff(box4)) {
        music.play();
        mb.shapeColor = ("yellow");
    }

    drawSprites();
}
