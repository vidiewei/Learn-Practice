// 用js写出更好的条件语句

// includes方法
function printAnimals(animal){
    const anomals=['dog','cat']
    if(printAnimals.includes(animal)){
        console.log(anomal);
    }
}
// 对象解构实现 提前退出和提前返回：注意一定要={}
const printAnimalsDetail=({type,name,gender}={})=>{
    if(!type) return 'no type';
    if(!name) return 'no name';
    if(!gender) return 'no gender';
    return `${name} is a ${gender} ${type}`
}
console.log(printAnimalsDetail({type:'cat',name:'haha',gender:'male'}))

// 对象字面量代替switch
const fruitsColor={
    'red':['apple'],
    'yellow':['banana']
}
function printFruits(color){
    return fruitsColor[color]||[]
}
console.log(printFruits('red'));