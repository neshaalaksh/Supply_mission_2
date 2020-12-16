class Rect{
    constructor(x,y,w,h){
        var options={
            isStatic: true,
            friction:10
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill('red')
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}