class Parent{
    profession:string
}

class Child extends Parent{
    Myfun(){
       this.profession="Teacher"
       console.log(this.profession)
    }
}

let obj = new Child()
obj.Myfun()