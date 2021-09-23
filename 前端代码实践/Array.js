/*************************数组常用方法**************************/

let arr=[1,2,3];

// jion()用指定的分隔符将数组每一项拼接为字符串, 原数组不变
console.log(arr.join("-")); //1-2-3

// push() 方法从数组末尾向数组添加元素，可以添加一个或多个元素，改变原数组
// pop() 方法用于删除数组的最后一个元素并返回删除的元素，改变原数组
arr.push(4);
console.log(arr); //[1,2,3,4]
arr.pop();
console.log(arr); //[1,2,3]

// shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值
// unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
arr.unshift(0);
console.log(arr); //[ 0, 1, 2, 3 ]
arr.shift();
console.log(arr); //[ 1, 2, 3 ]

// sort() 方法用于对数组的元素进行排序,默认按字母升序
// 排序顺序可以是字母或数字，并按升序或降序
// 可以通过compare(a,b)函数修改比较方法；如果a要位于b前面就返回负数
function compare(a,b){
    if(a>b){
        return -1;
    }
    else if(a<b){
        return 1;
    }
    else{
        return 0;
    }
}
arr.sort(compare);
console.log(arr); //[ 3, 2, 1 ]

// reverse() 方法用于颠倒数组中元素的顺序
arr.reverse();
console.log(arr); //[1,2,3]

// concat() 方法用于连接两个或多个数组, 不改变原数组，返回一个副本
var newArr=arr.concat([4,5,6]);
console.log(newArr); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arr);   //[ 1, 2, 3]

// slice()：返回从原数组中指定开始下标i到结束下标j之间的项(闭区间)组成的新数组
var subArr=arr.slice(1,2);
console.log(subArr); //[2,3]

// splice(起始位置,要删除的项数,要插入的数): 可用于删除中间数据
// 删除第一项
arr.splice(0,1);
console.log(arr); //[ 2, 3 ]
// 在第一项插入6
arr.splice(0,0,6); //[6,2,3]
console.log(arr);
// 将第一项替换成1
arr.splice(0,1,1);
console.log(arr); //[1,2,3]

// indexOf(), 从数组的开头（位置 0）开始向后查找索引，无则返回-1
// lastIndexOf：从数组的末尾开始向前查找索引，无则返回-1
var index1=arr.indexOf(1);
console.log(index1); //0

// forEach()：对数组进行遍历循环，对数组中的每一项运行给定函数。无返回值，不改变原数组
// 三个参数：遍历的数组内容；第对应的数组索引，数组本身
arr.forEach((x,index,a)=>{
    console.log(x+'|'+index+'|'+(a==arr));
});

// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
var mapArr=arr.map((x)=>{
    return x*x;
})
console.log(mapArr); //[ 1, 4, 9 ]

// filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组
var filterArr=arr.filter((x,index)=>{
    return index%2==0&&x>0;
})
console.log(filterArr); //[1,3]

// every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回 true
// some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true
console.log(arr.every(x=>{
    return x>0;
})); //true
console.log(arr.some(x=>{
    return x<0;
})); //false

// includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false
// includes使用===运算符来进行值比较
console.log(arr.includes(0)); //false

//  toString(),将数组转换为字符串
console.log(arr.toString()); //1,2,3

// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
// 不影响原数组
// Node环境不支持
let arr1=new Array([0, 1, 2, [3, 4]]);
// console(arr1.flat());

// entries()，keys()和values() —— 用于遍历数组。
// 它们都返回一个遍历器对象，可以用for...of循环进行遍历
let entries=arr.entries();
for(e of entries){
    console.log(e);
}
let keys=arr.keys();
for( k of keys){
    console.log(k);
}
let values=arr.values();
for(v of values){
    console.log(v);
}

// 数组扁平化
let flatArr=[1,2,[3,4,[5,6]]];
let res=[];
let funcFlat=function(arr){
    for(item of arr){
        if(Array.isArray(item)){
            funcFlat(item);
        }
        else{
            res.push(item);
        }
    }
}
funcFlat(flatArr);
console.log(res);

// 判断一个对象是否为数组,可以直接调用Array.isArray()
function isArray(arg){
    if(typeof arg==='object'){
        return Object.prototype.toString.call(arg)==='[object Array]'
    }
}
console.log(isArray(arr));