// 定义数组的两种方式
let list1: number[] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4]

// 不同类型(联合类型)
let list3: (number | string)[] = [1, 'a']

// 元祖：特殊数组(固定长度、固定类型)
let person1: [number, string] = [1, 'a']

// 元祖的bug
person1.push(1) // 不会报错