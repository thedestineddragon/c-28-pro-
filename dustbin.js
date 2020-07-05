class Dustbin {
    constructor() {
        var option = {
            isStatic:true
        }
     this.leftbody=Matter.Bodies.rectangle(550,600,15,100,option);
     this.bottombody=Matter.Bodies.rectangle(625,665,100,15,option);
     this.rightbody=Matter.Bodies.rectangle(700,600,15,100,option);
     World.add(world,this.leftbody);
     World.add(world,this.bottombody);
     World.add(world,this.rightbody);
    }
    display(){
     rectMode(CENTER)
     rect(this.leftbody.position.x,this.leftbody.position.y,49,180);
     rect(this.bottombody.position.x,this.bottombody.position.y,100,50);
     rect(this.rightbody.position.x,this.rightbody.position.y,49,180);
    }
   
}
