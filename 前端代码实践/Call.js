/*模拟call
1.将函数设为对象的属性
2.执行该函数
3.删除该函数
*/
Function.prototype.newCall=function(context){
    // this 参数可以传 null，当为 null 的时候，视为指向 window
    var context=context||window;
    // 首先获取调用call的函数
    context.fn=this;

    // 获取传入的参数
    var args=[];
    for(let i=1;i<arguments.length;i++){
        args.push(arguments[i]);
    }
    // 将参数展开
    var result=context.fn(...args);
    // 删除该属性
    delete context.fn;
    return result;
}

/*模拟apply
和call的参数处理不一样
*/
Function.prototype.newApply=function(context,arr){
    // this 参数可以传 null，当为 null 的时候，视为指向 window
    var context=context||window;
    // 首先获取调用call的函数
    context.fn=this;

    // 将参数展开
    var result=context.fn(...arr);
    // 删除该属性
    delete context.fn;
    return result;
}

/*模拟bind
1、bind会永久改变this指向，并返回该函数
2、可以在bind时传入参数，也可以通过返回的函数再传参
3、通过call实现bind
*/
Function.prototype.newBind=function(context){
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var self=this;
    // 提取出调用bind时传入的参数
    var args=Array.prototype.slice.call(arguments,1);

    var fBound=function(){
        var bindArgs=Array.prototype.slice.call(arguments);
        // 当指向构造函数时，this指向实例，需要将绑定函数的this指向该实例
        // 当作为普通函数时，this指向window,将绑定函数的this指向context
        return self.apply(this instanceof fBound? this: context,args.concat(bindArgs));
    }

    // 修改返回函数的prototype为绑定函数的prototype,实例就可以绑定函数的原型中的值
    fBound.prototype=this.prototype;
    return fBound;
}


// 测试一下
var value='global value';
var foo={
    value:1
};

function bar(name,id){
    console.log(this.value,name,id);
}

bar.newCall(foo,'Call','001');
bar.newApply(foo,['Apply','002']);
var fnBar=bar.newBind(foo,'Bind');
fnBar('003');
