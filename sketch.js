const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var spaceship;
var bg;
var ground;
var Aestroid1,Aestroid2,Aestroid3,Aestroid4,Aestroid5




function setup(){
    createCanvas(displayWidth,displayHeight);
    engine=Engine.create();
    world=engine.world;
    spaceship=new Spaceship(650,600,250,250);
    ground=new Ground(5,750,width,10)
    Aestroid1=new Aestroid(100,50,170,170)
    Aestroid2=new Aestroid(500,130,170,170)
    Aestroid3=new Aestroid(800,200,170,170)
    Aestroid4=new Aestroid(100,300,170,170)
    Aestroid5=new Aestroid(1200,200,170,170)

    
bg= loadImage("download.png")




}
function draw(){
    background(bg);
Engine .update (engine);
spaceship.display()
ground.display()
Aestroid1.display()
Aestroid2.display()
Aestroid3.display()
Aestroid4.display()
Aestroid5.display()
console.log(mouseX,mouseY)
keyPressed()
}
function keyPressed(){
    if (keyCode===RIGHT_ARROW){
        Matter.Body.applyForce(spaceship,{x:0,y:0},{x:0.05,y:0})
    }
}