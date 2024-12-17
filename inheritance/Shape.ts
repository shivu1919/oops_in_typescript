class Shape{
    len:number;
    b:number;
    height:number;
}

class rectangle extends Shape{
    Area(){
        this.len=12;
        this.b=15;
        console.log(this.len * this.b)
    }
}

class Square extends Shape{
    Area(){
        this.len=10;
        this.b=10;
        console.log(this.len * this.b)
    }
}


class parallelogram extends Shape{
    Area(){
        this.len=11.5;
        this.height=12;
        console.log(this.len * this.height)
    }
}


let rec_obj = new rectangle();
rec_obj.Area();

//Creating the object of Square class

let sqr_obj = new Square();
sqr_obj.Area();


//creating the object of parallelogram class

let p_obj = new parallelogram()
p_obj.Area();