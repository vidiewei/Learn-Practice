// 函数内部作用域：阿里笔试题
/*
function fn(a,c){
    console.log(a); //function a() {}
    var a=123;
    console.log(a); //123
    console.log(c); //function c() {}
    function a(){};
    if(false){
        var d=678;
    }
    console.log(d); //undefined
    console.log(b); //undefined
    var b=function(){}
    console.log(b); //function(){}
    function c(){} 
    console.log(c) //function c(){}
}
fn(1,2)
*/
/*
创建ao对象 AO{}
预编译的过程和值的变化
AO{
    1.找形参和变量声明且值为undefined |  2.实参形参相统一 | 3.在函数体内找函数声明，赋值
        a:undefined                 |       1          |    function a(){}
        c:undefined                 |       2          |    function c(){}
        d:undefined                 |                  |
        b:undefined                 |                  |
}
预编译结束后，按照函数体内代码顺序执行
*/

// 全局作用域理解
var global;
function a(){
    function b(){
        var bb=234;
        aa=0;
        console.log(aa); //0
        console.log(bb); //234
    }
    var aa=123;
    b();
}
a();
/*
a执行[[scope]]-->scope chain(a作用域链，首位放AO,第二个GO)-->scope chain[0]指向AO{}, scope chain[1]指向GO{}
AO{
    aa:123,
    b:function
}
GO{
    global:undefined,
    a:function
}

b执行[[scope]]-->scope chain(b作用域链，首位放b的AO,第二个a的AO,第三个GO)
-->scope chain[0]指向b的AO{},scope chain[1]指向b的AO{}, scope chain[2]指向GO{}
b的AO{
    this:window,
    bb:234
}
a的AO{
    aa:123,
    b:function
}
GO{
    global:undefined,
    a:function
}
*/