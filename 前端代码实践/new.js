// 手写实现new
function myNew(){
  // 创建一个空对象
  let obj = new Object();
  // 获取构造函数
  let Con = Array.prototype.shift.call(arguments);
  // 改变空对象的原型
  obj.__proto__ = Con.prototype;
  // 绑定this，执行构造函数
  let result = Con.apply(obj, arguments);
  // 确保new出来的是一个对象
  return typeof result==='object'? result : obj;
}

function Person(name){
  this.name = name;
}

let obj = myNew(Person, '2');
console.log(obj); // Person { name: '2' }