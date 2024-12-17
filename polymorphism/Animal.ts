class Animal{
    name:string

    Speak(){
        console.log("Animals makes a sound")
    }
}


class Dog extends Animal{
    Speak(){
        console.log("Dog barks")
    }
}

class Cat extends Animal{
    Speak() {
        console.log("Cat meows")
    }
}


let dog = new Dog()
let cat = new Cat()
let animal = new Animal()

dog.Speak()
cat.Speak()
animal.Speak()