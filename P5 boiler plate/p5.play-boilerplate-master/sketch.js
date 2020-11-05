var fixed_rectangle;
var moving_rectangle;
var kabir;
var k;

function setup() {
createCanvas(800,400);

fixed_rectangle = createSprite(600,200,50,100);
fixed_rectangle.shapeColor = "green";

moving_rectangle = createSprite(600,600,100,50);
moving_rectangle.shapeColor = "green";

moving_rectangle.velocityY = -5;

moving_rectangle.debug = true;
fixed_rectangle.debug = true;

kabir = createSprite(100,100,30,30);

k = createSprite(500,300,30,40);

}

function draw() {

background(0,0,0);

bounce_Off(moving_rectangle,fixed_rectangle);

//kabir.x = World.mouseX;

//kabir.y = World.mouseY;  



drawSprites();

}