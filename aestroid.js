class Aestroid {
    constructor (x,y,width,height){
        var options={
            isStatic: true
            }
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.image=loadImage("ateroid.png")
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
       
    }
    display(){
        var position=this.body.position
        push ()
        translate (position.x,position.y)
        imageMode(CENTER);
        image(this.image,50,50,this.width,this.height);
        pop ()
    }

}