// 联合类型：支持多种类型
var union;
function merge(n1, n2, resultType) {
    if (resultType == 'as-string')
        return n1.toString() + n2.toString();
    if (typeof n1 === 'string' || typeof n2 === 'string')
        return n1.toString() + n2.toString();
    else
        return n1 + n2;
}
var mergeNumber = merge(2, 5, 'as-number');
var mergeNumber2 = merge(2, 5, 'as-string');
var mergeString = merge('hello', 'world', 'as-string');
console.log(mergeNumber);
console.log(mergeNumber2);
console.log(mergeString);
// 字面量类型(限定取值范围)
var union2;
// 字面量混合联合类型
var union3;
