var Human = /** @class */ (function () {
    function Human(n, a) {
        this.name = n;
        this.age = a;
        console.log("Human class object is created");
    }
    return Human;
}());
var obj = new Human("ABhishek", 22);
console.log(obj.name + " " + obj.age);
