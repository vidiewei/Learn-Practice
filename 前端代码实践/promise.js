/* 实现一个小型的promise
1、Promise本身是一个状态机，每一个Promise实例只能有三个状态，pending、fulfilled、reject，状态之间的转化只能是pending->fulfilled、pending->reject，状态变化不可逆。
2、 Promise有一个then方法，该方法可以被调用多次，并且返回一个Promise对象（返回新的Promise还是老的Promise对象，规范没有提）。
3、 支持链式调用。
4、 内部保存有一个value值，用来保存上次执行的结果值，如果报错，则保存的是异常信息
*/

var PENDING=0;
var FUILFILLED=1;
var REJECTED=2;

function promise(fn){
    var state=PENDING;
    var value=null; // 存储成功或失败的结果值
    var handlers=[]; //存储成功或者失败的处理程序，通过调用.then方法或者.done方法

    function fulfill(result){
        state=FUILFILLED;
        value=result;
        handlers.forEach(handle);
        handlers=null;
    }

    function reject(error){
        state=REJECTED;
        value=error;
        handlers.forEach(handle);
        handlers=null;
    }

    // resolve方法可以接受两种参数，一种为普通的值/对象，另外一种为一个Promise对象，如果是普通的值/对象，则直接把结果传递到下一个对象；
    // 如果是一个 Promise 对象，则必须先等待这个子任务序列完成
    // resolve需要两个辅助方法getThen、和doResolve
    function resolve(result){
        try{
            var then=getThen(reslut);
            if(then){
                doReoslove(then.bind(result),resolve,reject);
                return;
            }
            fulfill(result);
        }catch(e){
            reject(e);
        }
    }

    // getThen 检查如果value是一个Promise对象，则返回then方法等待执行完成
    function getThen(value){
        var t=typeof value;
        if(value&&(t==='object'||t==='function')){
            var then=value.then;
            if(typeof then==='function'){
                return then;
            }
        }
        return null;
    }

    // 异常参数检查函数，确保onFulfilled和onRejected两个函数中只执行一个且只执行一次，但是不保证异步
    function doReoslove(fn,onFulfilled,onRejected){
        var done=false;
        try{
            fn(
                function(value){
                    if(done) return;
                    done=true;
                    onFulfilled(value);
                },
                function(reason){
                    if(done) return;
                    done=true;
                    onRejected(reason);
                }
            );
        }catch(ex){
            if(done) return;
            done=true;
            onRejected(ex);
        }
    }

    // 不同状态，进行不同的处理
    function handle(handler){
        if(state===PENDING){
            handlers.push(handler);
        }
        else{
            if(state===FUILFILLED&&typeof handle.onFulfilled==='function'){
                handler.onFulfilled(value);
            }
            if (state === REJECTED && typeof handler.onRejected === 'function') {
                handler.onRejected(value);
            }
        }

        this.done = function (onFulfilled, onRejected) {
            // 保证异步
            setTimeout(function () {
              handle({onFulfilled: onFulfilled, onRejected: onRejected});
            }, 0);
        }
    }

    // then方法
    this.then = function(onFulfilled, onRejected) {
        var self = this;
        return new Promise(function (resolve, reject) {
          self.done(function (result) {
            if (typeof onFulfilled === 'function') {
              try {
                // onFulfilled方法要有返回值！
                return resolve(onFulfilled(result));
              } catch (ex) {
                return reject(ex);
              }
            } else {
              return resolve(result);
            }
          }, function (error) {
            if (typeof onRejected === 'function') {
              try {
                return resolve(onRejected(error));
              } catch (ex) {
                return reject(ex);
              }
            } else {
              return reject(error);
            }
          });
        });
    }

    // catch方法
    this.catch = function(errorHandle) {
        return this.then(null, errorHandle);
    }
}