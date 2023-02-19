// class类
// 接口
interface IPoint {
  // x: number;
  // y: number;
  drawPoint: () => void;
  getDistances: (p: IPoint) => number;
  setX: (value) => void;
  setY: (value) => void;
  getX: () => number;
  getY: () => number;
}

// 基于接口实现class
class Point1 implements IPoint {
  constructor(private x: number, private y: number) {}
  drawPoint = () => {
    console.log("x: ", this.x, "y: ", this.y);
  };
  getDistances = (p: IPoint) => {
    console.log(p.getY());
    console.log(this.y);
    return Math.pow(p.X - this.x, 2) + Math.pow(p.Y - this.y, 2);
  };
  // 属性设置为private后，不能直接p.x赋值，只能通过函数的方式赋值
  // 可理解成内部与外部之间的缓冲带，放置一些恶意操作
  set X(value: number) {
    if (value < 0) {
      throw new Error("value不能小于0");
    }
    this.x = value;
  }
  get X() {
    return this.x;
  }
  set Y(value: number) {
    if (value < 0) {
      throw new Error("value不能小于0");
    }
    this.y = value;
  }
  get Y() {
    return this.y;
  }
}

// 实例化
const point1 = new Point1(2, 3);
point1.setX(10);
// point1.drawPoint()
point1.getDistances({ x: 100, y: 100 });

// 访问修饰符
// pubilc private protected
// 自动帮我们完成赋值操作 this.x = x...,不需要再手动写
