// 手写instanceOf
const myInstanceOf = function(left, right){
  // 获取right的原型对象
  if(right instanceof Function){
    var prototype = right.prototype;
  } else {
    throw new TypeError(`${right} is not a function`);
  }
  // 获取left的原型对象
  let leftProto = left.__proto__;
  while(true){
    // 遍历到了原型链末端
    if(leftProto===null){
      return false;
    }
    // 判断对象的类型是否符合
    if(leftProto === prototype){
      return true;
    }
    leftProto = leftProto.__proto__;
  }
}

let a = [1,2];
let b = [1,2];
console.log(myInstanceOf(a, Array));
console.log(myInstanceOf(a, b));