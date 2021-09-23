// ES5
function Person(name){
    this.name=name;
}
function Children(name,b){
    // 将父类属性和方法绑定到子类的this对象 
    Person.call(this,name);
    // 将子类属性和方法绑定到子类的this对象 
    this.b=b;
    // 绑定子类原型对象
    Children.prototype=Object.create(Person.prototype);
    // 修改子类原型对象的constructor
    Children.prototype.constructor=Children;
}

let c=new Children("childA",1);
console.log(c);

// ES6
// 子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法
// 然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象
class Person{
    constructor(name){
        this.name=name;
    }
}

class Children extends Person{
    constructor(name,b){
        // 父类的构造函数，用来新建父类的this对象
        super(name);
        // 将子类属性和方法绑定到子类的this对象 
        this.b=b;
    }
}
let c=new Children("childA",1);
console.log(c);