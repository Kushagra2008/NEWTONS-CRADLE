class chain
{
    constructor(bodya, bodyb, xoffset, yoffset)
    {
        this.offsetx = xoffset;
        this.offsety = yoffset;
        var options = 
        {
            bodyA: bodyb, 
            bodyB: bodya,
            pointB: {x: this.offsetx, y: this.offsety}
        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    display()
    {
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;
        push();
        strokeWeight(5);
        line(pos1.x, pos1.y, pos2.x + this.offsetx, pos2.y+ this.offsety);
        pop();
    }
}

