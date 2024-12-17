var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.setAge = function (a) {
        this.age = a;
    };
    Human.prototype.getAge = function () {
        return this.age;
    };
    return Human;
}());
//object for human class
var h = new Human();
h.name = "Shivam";
h.setAge(15);
console.log("Name of human is: " + h.name + " Age of human is: " + h.getAge());
