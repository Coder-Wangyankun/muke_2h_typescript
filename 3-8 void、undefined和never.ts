// void
function f(): void {

}

// undefined
function f2(): undefined {
  return
}

// never：永远不会执行到结束的函数
function throwError(message: string, errorCode: number): never {
  throw {
    message,
    errorCode
  }
}
throwError('not found', 404)