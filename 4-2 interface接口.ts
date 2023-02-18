// interface
interface Point {
  x: number,
  y: number
}

const drawPoint = (point: Point) => {
  console.log({ x: point.x, y: point.y })
}