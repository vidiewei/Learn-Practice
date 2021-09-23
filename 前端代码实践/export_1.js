var describe=function(num){
    console.log("the value of num is "+num);
}
var add=function(a,b){
    var sum=a+b;
    console.log("the sum is "+sum);
}
module.exports.describe=describe;
module.exports.add=add;