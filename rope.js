class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
     fly (){
      this.rope.bodyA=null;
     }

    display(){
        
        if(this.rope.bodyA!==null){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB;
        strokeWeight(4);
        stroke("green");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}