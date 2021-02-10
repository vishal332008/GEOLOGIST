class Hammer{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white")
        rect(0, 0, this.width, this.height);
        pop();
      }
}