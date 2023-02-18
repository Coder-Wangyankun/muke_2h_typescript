// 枚举类型：真正类型是number
enum Color {
  red,
  green,
  blue
}

let color = Color.blue
console.log(color) // 2

// 也可以不从0开始计数，自己定义
enum Color2 {
  red = 5,
  green = 10,
  blue = 1
}

let color2 = Color2.red
console.log(color2) // 5

// 也可以不是number
enum Color3 {
  red = 'red',
  green = 'green',
  blue = 1
}
let color3 = Color3.green
console.log(color3) // green