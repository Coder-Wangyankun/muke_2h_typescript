// 类型断言(类型适配) Type Assertions
let message: any;

// 将message断言为string类型
// 断言 方式1 (<>)
let ddd: boolean = (<string>message).endsWith('c')

// 断言 方式2 as
let ddd2: boolean = (message as string).endsWith('c')