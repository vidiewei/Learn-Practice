
// 实现一个简答的监听者
function observer(obj){
    if(!obj||typeof obj !='object'){
        return;
    }  
    for(key in obj){
        var value=obj[key];
        if(typeof value === 'object'){
            observer(obj[key]);
        }
        else{
            Object.defineProperty(obj,key,{
                enumerable: true,
                configurable: true,
                get:function(){
                    console.log(`获取${key}`);
                    return value;
                },
                set:function(newVal){
                    if (value !== newVal) {
                        value = newVal;
                    }
                    console.log(`设置${newVal}`);
                }
            })
        }
    }
}

let obj={
    id:1,
    name:'zuowei',
    age:24,
    
};
// 开始监听属性
observer(obj);
let a=obj.age; //输出：获取age
obj.age=23; //输出：设置23
