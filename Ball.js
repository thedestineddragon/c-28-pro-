class Ball extends BaseClass {
  constructor(x,y,radius){
  super(x,y,radius);
  this.image = loadImage("ball.png");
    
  }
  display(){
 super.display();
  }
}