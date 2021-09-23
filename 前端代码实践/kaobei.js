var person={
    name:"person",
    hoby:["a","b"]
}
// 直接赋值，两个变量指向同一个内存地址
var p1=person;
p1.name="p1";
console.log("p1",p1);
console.log("person",person);
// p1,p2指向不同内存，但是p1,p2的hoby（因为他是引用对象）指向同一个内存
var p2=new Object();
Object.assign(p2,person);
p2.name="p2";
p2.hoby[0]="c";
console.log("p2",p2);
console.log("person",person);
