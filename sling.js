class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
           stiffness:1,
           angularStiffness:1,
           length:200   
    
        }
        this.pointB=pointB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
   
    display(){
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        push ();
        strokeWeight(3.5);
        stroke("lightBlue")
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop ();
    }}
}