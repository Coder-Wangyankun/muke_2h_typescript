// class类
// 接口
interface IPoint {
  x: number;
  y: number;
  drawPoint: () => void;
  getDistances: (p: IPoint) => number
}

// 基于接口实现class
class Point implements IPoint {
  // x: number;
  // y: number;
  // 使用外部传入值初始化值
  constructor(public x: number, public y: number) {
    // x && (this.x = x);
    // y && (this.y = y);
  }
  drawPoint = () => {
    console.log('x: ', this.x, 'y: ', this.y)
  }
  getDistances = (p: IPoint) => {
    return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2)
  };
}

// 实例化
const point = new Point(2, 3)
point.drawPoint()

// 访问修饰符
// pubilc private protected
// 自动帮我们完成赋值操作 this.x = x...,不需要再手动写