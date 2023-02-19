// 泛型
let lastInArray = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
};

const l = lastInArray<string | number>(["a", 1]);

// 多个泛型
let makeTuple = <T, Y>(x: T, y: Y) => [x, y];
const v1 = makeTuple(1, "one");
const v2 = makeTuple<boolean, number>(true, 1);
