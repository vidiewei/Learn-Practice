/*
// 数组的reduce方法
Array.reduce(function(prev,cur,index,arr){
    ...
},init);

- arr: 原数组
- pre: 当提供init时，第一次执行时pre=init; 否则第一次执行pre为arr的第一项； 之后pre为上一次调用回调时的返回值，或者初始值init
- cur：当前正在处理的数组元素
- index:当前正在处理的数组元素的索引，若提供init则索引为0，否则为1
- init:表示初始值

常用的参数 pre和cur
*/

// 数组求和
var arr=[1,2,3,4,5]
var sum=arr.reduce((pre,cur)=>{
    return pre+cur;
},1)
console.log(sum)

// 计算每个元素出现的个数
var person=['a','a','b']
var num=person.reduce((pre,cur)=>{
    if(cur in pre){
        pre[cur]++;
    }
    else{
        pre[cur]=1;
    }
    return pre;
},{});
console.log(num)

// 数组去重
var arr3=[1,1,2,3]
var res=arr3.reduce((pre,cur)=>{
    if(!pre.includes(cur)){
        pre.push(cur)
    }
        
    return pre;
},[])
console.log(res)