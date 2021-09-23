/*
new的模拟实现
new的功能：创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
*/

function funcNew(){
    var obj=new Object();
    // 从参数中取出构造函数
    var Constructor=arguments[0];
    obj.__proto__=Constructor.prototype;
    // 从参数中取出传入的其他参数
    args=Array.prototype.slice.call(arguments,1);
    var res=Constructor.apply(obj,args);
    return typeof res==='object'?res:obj;
}

// 测试一下
function Person(name){
    this.name=name;
}
Person.prototype.getName=function(){
    return this.name;
}

var p1=new Person('p1');
console.log(p1.getName());

var p2=funcNew(Person,'p2');
console.log(p2.getName());