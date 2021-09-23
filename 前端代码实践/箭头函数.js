

// =>作用域与父级上下文绑定，且无法修改
var obj={
    id:1,
    say: ()=>{
        console.log(this.id);
    }
}
// 此时父级上下文是window对象，而window没有定义id属性
obj.say(); //输出：undefined

var newobj={
    id:1,
    say: function(){
        return ()=>{
            console.log(this.id);
        };
    }
}
// 此时父级上下文是newobj对象，而newobj定义id属性为1
newobj.say()(); //输出：1
