const debounce = function(fn, delay){
  let timer = null;
  return ()=>{ 
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay);
  }
}

const throttle = function(fn, delay){
  let timer = null;
  return ()=>{ 
    if(timer){
      return false;
    }
    timer = setTimeout(()=>{
      console.log(this);
      fn();
      clearTimeout(timer);
    }, delay);
  }
}

throttle(console.log("throttle"), 1000);