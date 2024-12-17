abstract class Shape{
    abstract Area():number;
}

class Circle extends Shape{
    constructor(public r:number){
        super()
    }
    Area(): number {
        return Math.PI * this.r * this.r
    }
}

class Square extends Shape{

    constructor(public side:number){
        super()
    }

    Area():number{
        return this.side* this.side;
    }
}

let c1 = new Circle(10)
console.log(c1.Area())

let s1 = new Square(1.2)
console.log(s1.Area())
