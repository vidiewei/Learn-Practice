function test(){
    console.log('test AOP');
    return 'test';
}
Function.prototype.before = function (fn) {
    // 保存原函数的引用
    let __self = this;
    return function(){
        // 执行新函数，且保证this不被劫持，新函数接收原参数
        // 新函数在原函数之前执行
        fn.apply(this, arguments);
        // 执行原函数
        return __self.apply(__self, arguments);
    }
}
Function.prototype.after = function (fn) {
    let __self = this;
    return function(){
        // 先执行原函数
        let result = __self.apply(__self, arguments);
        // 再执行新函数
        fn.apply(__self, arguments);
        // 返回新函数执行的结果
        return result;
    }
}
test.after(function(){
    console.log(3);
}).before(function(){
    console.log(1);
})();
