// 数组扁平化
// 1.递归的方法
let arr=[1,2,[3,4,[5,6]]];
let res=[];
function flatArr(a){
    for(item of a){
        if(Array.isArray(item)){
            flatArr(item);
        }
        else{
            res.push(item);
        }
    }
}
flatArr(arr);
console.log(res);

// 2.扩展运算符
function expendArr(a){
    while(a.some(item=>Array.isArray(item))){
        a=[].concat(...a);
    }
    return a;
}
let res1=expendArr(arr);
console.log(res1);

// reduce
function reduceArr(a){
    return a.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?reduceArr(cur):cur)
    },[])
}
var res2=reduceArr(arr)
console.log(res2)