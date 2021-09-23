var ev=require('events');
var util=require('util');
const { connected } = require('process');
var em=new ev.EventEmitter();
// 事件处理器
var connectHandler=function connected(){
    console.log("连接成功！");
    em.emit('data_received');
}
// 绑定事件处理程序
em.on('connection',connectHandler);
// 绑定数据接收事件
em.on('data_received',function(){
    console.log("数据接收成功");
})
em.emit('connection');
console.log("程序执行完毕！");

class Person{
    // 实例属性
    constructor(name){
        this.name=name;
    }
}
// 让Person类继承事件类
util.inherits(Person,ev.EventEmitter);
var A=new Person('A');
var B=new Person('B')
var personArr=[A,B];

personArr.forEach(function(person){
    person.on('say',function(msg){
        console.log(person.name+" say "+msg);
    })
});

A.emit('say',"hello!");
B.emit('say',"world!");


