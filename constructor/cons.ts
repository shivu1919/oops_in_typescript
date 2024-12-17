class Human{
    name:string;
    age:number;

    constructor(n:string , a:number){
        this.name=n;
        this.age=a;
        console.log("Human class object is created")
    }
}

let obj = new Human("ABhishek",22);

console.log(obj.name +" "+obj.age)

