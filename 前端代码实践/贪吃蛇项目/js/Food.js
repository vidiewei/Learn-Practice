// 定义自调用函数，防止作用域内部变量被外部js文件访问到
(function f(){
  // 全局变量
  var position = 'absolute';
  // 记录上一次的食物位置
  var elements = [];

  function Food(options) {
    options = options || {};
    this.x = options.x || 0;
    this.y = options.y || 0;

    this.width = options.width || 20;
    this.height = options.height || 20;

    this.color = options.color || 'green';
  }

  // 生成食物
  Food.prototype.render = function (map) {
    // 删除之前的食物
    remove();
    // 动态创建div， 页面上显示食物
    let div = document.createElement('div');
    map.appendChild(div);
    // 记录生成的食物
    elements.push(div);
    // 随机生成坐标
    this.x = Tools.getRandom(0, map.offsetWidth/this.width-1)*this.width;
    this.y = Tools.getRandom(0, map.offsetHeight/this.height-1)*this.height;

    // 设置div样式
    div.style.position = position;
    div.style.left = this.x+'px';
    div.style.top = this.y+'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
  }

  // 当蛇遇到食物：需要删除原来的食物，定义remove函数以供内部使用
  function remove(){
    for(let i=elements.length-1; i>=0;i--){
      // 删除div
      elements[i].parentNode.removeChild(elements[i]);
      // 删除数组中的元素
      elements.splice(i,1);
    }
  }

  // 在window中挂载Food，使得外部可以访问
  window.Food = Food;
})()




// 测试一下
// 先获取map
// let map = document.getElementById('map');
// let food = new Food();
// food.render(map);
