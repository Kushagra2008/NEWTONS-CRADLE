class bob
{
    constructor(x, y)
    {
        var options = {
            isStatic: false,
            restitution: 1, 
            friction: 0,
            density: 0.8
         }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y,40/2, options);
        World.add(world, this.body)
    }
    display()
    {
        var posi = this.body.position;
        push()
        translate(posi.x, posi.y)
        ellipseMode(CENTER);
        ellipse(0, 0, 40, 40);
        pop()
    }
}
