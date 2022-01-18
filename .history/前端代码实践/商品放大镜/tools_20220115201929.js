// 显示和隐藏元素
function show(ele){
  ele.style.display = "block";
}

function hide(ele){
  ele.style.display = "none";
}

// 封装scroll
function scroll(){
  // ie9+高版本浏览器
  if(window.pageXOffset !== null){
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    };
  } else if (document.compatMode === "CSS1Compat"){
    // 标准浏览器，判断有没有声明DTD
    return {
      left: document.documentElement.scrollLeft,
      top: document.documentElement.scrollTop
    };
  }
  return {   // 未声明 DTD
    left: document.body.scrollLeft,
    top: document.body.scrollTop
}
}