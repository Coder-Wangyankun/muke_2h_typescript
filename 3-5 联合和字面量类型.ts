// 联合类型：支持多种类型
let union: string | number

function merge(n1: number | string, n2: number | string, resultType: 'as-number' | 'as-string') {
  if (resultType == 'as-string') return n1.toString() + n2.toString()
  if(typeof n1 === 'string' || typeof n2 === 'string')
    return n1.toString() + n2.toString()
  else 
    return n1 + n2
}

let mergeNumber = merge(2, 5, 'as-number')
let mergeNumber2 = merge(2, 5, 'as-string')
let mergeString = merge('hello', 'world', 'as-string')
console.log(mergeNumber)
console.log(mergeNumber2)
console.log(mergeString)

// 字面量类型(限定取值范围)
let union2: 0 | 1 | 2;

// 字面量混合联合类型
let union3: 0 | 'a' | true | [1,2,3];