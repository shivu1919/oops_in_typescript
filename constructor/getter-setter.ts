class Human{
    public name:string;
    private age:number;

    setAge(a:number){
        this.age=a
    }

    getAge(){
        return this.age
    }

}

//object for human class

let h = new Human();

h.name="Shivam";

h.setAge(15)
console.log("Name of human is: "+h.name+" Age of human is: "+h.getAge())