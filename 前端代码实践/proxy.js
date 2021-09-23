var handler = {
    get: function(target, name) {
      return 'Hello, ' + target.name+name;
    },
  };
  
  var fproxy = new Proxy({name:"haha"}, handler);
  
  console.log(fproxy.name);