// 手写Array.prototype.map

var arr=[1,2,3];
function map(arr,mapCallback){
    // 检查参数
    if(!Array.isArray(arr)||!arr.length||typeof mapCallback!=='function'){
        return [];
    }
    else{
        let result=[];
        // 对每个元素进行操作
        for(let i=0;i<arr.length;i++){
            // mapCallback传入的参数是（元素值，下标，数组本身）
            result.push(mapCallback(arr[i],i,arr))
        }
        return result;
    }
}

var res=map(arr,(item)=>{
    return item*2;
})

console.log(res);