var Pubsub = (function fn(){
  // 定义存放订阅者的缓存列表
  let list = {};

  // 增加订阅者
  const listen = function(key, fn){
    if(!list[key]){
      list[key] = [];
    }
    list[key].push(fn);
  }

  // 移除订阅者
  const remove = function(key, fn) {
    let fns = list[key];
    if(!fns){
      return false;
    }
    if(!fn){
      fns&&(fns.length=0);
    } else {
      for(let i=fns.length-1;i>=0;i--){
        let _fn = fns[i];
        if(_fn === fn){
          fns.splice(i,1);
        }
      }
    }
  }

  // 发布消息
  const trigger = function(){
    // 取出key值
    let key = Array.prototype.shift.call(arguments);
    let fns = list[key];
    if(!fns || fns.length==0){
      return;
    }
    // 遍历缓存列表，然后执行该函数
    for(let fn of fns){
      fn.apply(this, arguments);
    }
  }
  
  return {
    listen: listen,
    trigger: trigger,
    remove: remove,
  }
})();