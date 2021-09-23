/*
1、原型链继承:
缺点：1）子对象的原型指向同一个父对象实例，修改某个子对象会影响其他子对象；
2）没有实现super,无法对父类进行传参
*/ 
function Parent(){
    this.name=['A'];
}
Parent.prototype.getName=function(){
    return this.name;
}
function Child(){

}
Child.prototype=new Parent();
Child.prototype.constuctor=Child;
const c1=new Child();
const c2=new Child();
c1.name[0]='B'
console.log(c1.name,c2.name);

/*
2、构造函数继承：在子类的构造函数中执行父类的构造函数，并为其绑定子类的this，
即将父类的成员和方法都挂载到子类的this上
优缺点：可以实现不同子对象对应不同的实例，但是无法继承父类原型上的方法和属性
*/
function Parent1(name){
    this.name=[name];
}
Parent1.prototype.getName=function(){
    return this.name;
}
function Child1(){
    Parent1.call(this,'C')
}

const c3=new Child1()
const c4=new Child1()
c3.name[0]='D'
console.log(c3.name,c4.name);

/*
3、组合式继承：结合原型继承和构造函数继承
缺点：每次子类进行实例化时都要执行一次new Parent()和Parent.call()
*/
function Parent2(name){
    this.name=[name];
}
Parent2.prototype.getName=function(){
    return this.name;
}
function Child2(){
    Parent2.call(this,'A')
}
Child2.prototype=new Parent2()
Child2.prototype.constuctor=Child2
const c5=new Child2()
const c6=new Child2()
c5.name[0]='E'
console.log(c5.name,c6.name);
console.log(c6.getName());

/*
4、寄生式继承：将new Parent()修改成Parent.prototype即可
缺点：对Child.prototype的操作会影响Parent.prototype
*/
function Parent3(name){
    this.name=[name];
}
Parent3.prototype.getName=function(){
    return this.name;
}
function Child3(){
    Parent3.call(this,'A')
}
Child3.prototype=Parent3.prototype
Child3.prototype.constuctor=Child3
const c7=new Child3()
const c8=new Child3()
c7.name[0]='E'
console.log(c7.name,c8.name);
console.log(c8.getName());

/*
4、最后的优化：将Child.prototype=Parent.prototype修改成浅拷贝操作Child.prototype=Object.create(Parent.prototype)
*/