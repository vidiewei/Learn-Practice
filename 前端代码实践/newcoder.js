// 牛客网前端代码练习
function formate (date,form){
    console.log(date)
    var strs=form.split(" ");
    var ymd=strs[0].split("-");
    var time=strs[1].split("-");
    var y=date.getFullYear();
    var m=date.getMonth()+1;
    var d=date.getDate();
    var h=date.getHours();
    var minutes=date.getMinutes();
    var s=date.getSeconds();
    console.log(y,m,d,h,matchMedia,s)


}

// formate(Date.now(),"yy-mm hh-mm");
var today=new Date();
console.log(today.getFullYear());