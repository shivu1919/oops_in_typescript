var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    rectangle.prototype.Area = function () {
        this.len = 12;
        this.b = 15;
        console.log(this.len * this.b);
    };
    return rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.Area = function () {
        this.len = 10;
        this.b = 10;
        console.log(this.len * this.b);
    };
    return Square;
}(Shape));
var parallelogram = /** @class */ (function (_super) {
    __extends(parallelogram, _super);
    function parallelogram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    parallelogram.prototype.Area = function () {
        this.len = 11.5;
        this.height = 12;
        console.log(this.len * this.height);
    };
    return parallelogram;
}(Shape));
var rec_obj = new rectangle();
rec_obj.Area();
//Creating the object of Square class
var sqr_obj = new Square();
sqr_obj.Area();
//creating the object of parallelogram class
var p_obj = new parallelogram();
p_obj.Area();
