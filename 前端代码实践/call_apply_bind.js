let obj={
    name:'a'
}

function Child(name){
    this.name=name;
}

Child.prototype={
    constructor: Child,
    showName:function(){
        console.log(this.name)
    }
}

var child1=new Child('鹿晗')
child1.showName()

// call:改变this指向，只改变一次，传入参数为参数列表
child1.showName.call(obj)
// apply：改变this指向，改变一次，传入参数为参数数组
child1.showName.apply(obj)
// bind：改变this指向，永久改变，并返回函数
let bindObj=child1.showName.bind(obj)
bindObj()

// 将伪数组转换为数组
// 1.arguments转数组
function printArg () {
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
}
printArg(1,2,3,4,5)
// 2.对象转数组，一定要设置length属性，否则会报错
var arrlike={
    0:'a',
    1:'b',
    2:'c',
    length:2
}
var arrTransform=Array.prototype.slice.call(arrlike)
console.log(arrTransform)

//apply实现数组拼接,会改变第一个参数
arr1=[1,2,3]
arr2=[4,5,6]
Array.prototype.push.apply(arr1,arr2)
console.log(arr1)

// call实现判断数据类型
let type = Object.prototype.toString.call(arr1);
console.log(type);

// 实现一个call函数
Function.prototype.myCall = function(obj){
  let context = obj || window;
  // 将调用的函数作为对象的一个属性
  context.fn = this;
  // 将obj后面的参数取出来
  let args = [...arguments].slice(1);
  let results = context.fn(...args);
  // 删除fn
  delete context.fn;
  return results;
}

// 实现一个apply函数
Function.prototype.myApply = function(obj){
  let context = obj || window;
  // 将调用的函数作为对象的一个属性
  context.fn = this;
  // 将obj后面传入的的参数数组展开
  let results;
  if(arguments[1]){
    results = context.fn(...arguments[1]);
  } else {
    results = context.fn();
  }
  // 删除fn
  delete context.fn;
  return results;
}

// 实现bind函数
Function.prototype.myBind = function(obj){
  if(typeof this !=='function'){
    throw new TypeError('Error');
  }
  let _this = this;
  let args = [...arguments].slice(1);
  // 返回一个函数
  return function F(){
    if(this instanceof F){
      return new _this(...args, ...arguments);
    }
    return _this.apply(obj, args.concat(...arguments));
  }
}

let bindArr = Array.prototype.concat.myBind(arr1);
console.log(bindArr(1,2,3));



