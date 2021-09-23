// ES6提出的map
// map:key-value,其中key可以为任意类型
// 解决了ES5的对象中，key只能为字符串的缺点; 可以用map来代替对象

const fruits=new Map().set('red',['apple']).set('yellow',['banana']);
function printFruits(color){
    return fruits.get(color)||[]
}
console.log(printFruits('red'))