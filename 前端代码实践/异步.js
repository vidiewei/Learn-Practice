// 理解异步操作
console.log(0);
setTimeout({ 
    setTimeout(console.log(2),100)
    },100);