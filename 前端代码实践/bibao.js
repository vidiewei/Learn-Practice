// 异步任务最后执行，var有变量声明提升，并且有闭包
function a(){
    for(var i=0;i<3;i++){
        setTimeout(function(){
            console.log(i);
        },3000);
    }
}
a(); //输出三个3

//2、 修改作用域，用let限定
function a(){
    for(let i=0;i<3;i++){
        setTimeout(function(){
            console.log(i);
        },1000);
    }
}
a(); //输出012

//3、 使用匿名函数,将i以传参的方式引入
function a(){
    for(var i=0;i<3;i++){
        (function(i){
            setTimeout(function(){
            console.log(i);
        },1000);
        })(i);
    }
}
a(); //输出012

//4、 使用setTimeOut第三个参数,将i以传参的方式引入赋给function的参数
function a(){
    for(var i=0;i<3;i++){
        setTimeout(function(j){
            console.log(j);
        },1000,i);
    }
}
a(); //输出012