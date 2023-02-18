// 基于接口实现class
var Point1 = /** @class */ (function () {
    function Point1(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log('x: ', _this.x, 'y: ', _this.y);
        };
        this.getDistances = function (p) {
            console.log(p.getY());
            console.log(_this.y);
            return Math.pow(p.getX() - _this.x, 2) + Math.pow(p.getY() - _this.y, 2);
        };
        // 属性设置为private后，不能直接p.x赋值，只能通过函数的方式赋值
        // 可理解成内部与外部之间的缓冲带，放置一些恶意操作
        this.setX = function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            _this.x = value;
        };
        this.getX = function () {
            return _this.x;
        };
        this.setY = function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            _this.y = value;
        };
        this.getY = function () {
            return _this.y;
        };
    }
    return Point1;
}());
// 实例化
var point1 = new Point1(2, 3);
point1.setX(10);
point1.drawPoint();
// 访问修饰符
// pubilc private protected
// 自动帮我们完成赋值操作 this.x = x...,不需要再手动写
