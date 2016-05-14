var Shape = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};

Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

var Rectangle = function (id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width  = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
