// any
let randomValue: any = 666;

// unknown
// 当确定了unknown的值之后，才能进行操作
let randomValue2: unknown = 666;

if(typeof randomValue2 === 'function') randomValue2()

if(typeof randomValue2 === 'string') randomValue2.toUpperCase()