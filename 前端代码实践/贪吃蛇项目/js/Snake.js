// 定义自调用函数，防止作用域内部变量被外部js文件访问到
(function f(){
  // 全局变量
  var position = 'absolute';
  // 记录上一次的食物位置
  var elements = [];
  // 初始化body, x,y表示蛇节距离左上角多少个蛇节
  var initBody = [
    { x: 3, y:2, color:'red', },
    { x: 2, y:2, color:'blue', },
    { x: 1, y:2, color:'blue', },
  ];

  function Snake(options) {
    options = options || {};
    // 蛇节大小
    this.width = options.width || 20;
    this.height = options.height || 20;
    // 蛇的身体
    this.body = options.body || initBody;
    // 初始方向
    this.direction = options.direction || 'right';
  }

  // 生成蛇
  Snake.prototype.render = function (map) {
    // 渲染前删除之前的蛇
    remove();
    // 渲染蛇节
    for(let i=0;i<this.body.length;i++){
      let object = this.body[i];
      let div = document.createElement('div');
      map.appendChild(div);
      // 用elements记录生成的蛇节
      elements.push(div);
      // 设置div样式
      div.style.position = position;
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
      div.style.left = object.x*this.width+'px';
      div.style.top = object.y*this.height+'px';
      div.style.backgroundColor = object.color;
    }
  }

  // 移动蛇
  Snake.prototype.move = function (food, map) {
    // 控制身体移动
    for(let i=this.body.length-1;i>0;i--){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
    // 控制蛇头方向的移动
    let head = this.body[0];
    switch(this.direction){
      case 'right':
        head.x +=1;
        break;
      case 'left':
        head.x -=1;
        break;
      case 'up':
        head.y -=1;
        break;
      case 'down':
        head.y +=1;
        break;
    }

    // 2.3 当蛇遇到食物，蛇变长，食物重新生成
    let headX = head.x*this.width;
    let headY = head.y*this.height;
    if(headX === food.x && headY === food.y){
      // 蛇变长一节
      // 先获取蛇的最后一节，添加到body中
      let last = this.body[this.body.length-1];
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color,
      })
      // 生成新的食物
      food.render(map);
    }
  }

  // 删除蛇
  function remove(){
    for(let i=elements.length-1; i>=0;i--){
      // 删除div
      elements[i].parentNode.removeChild(elements[i]);
      // 删除数组中的元素
      elements.splice(i,1);
    }
  }

  // 在window中挂载Food，使得外部可以访问
  window.Snake = Snake;
})()


// 测试一下
// 先获取map
// let map = document.getElementById('map');
// let snake = new Snake();
// snake.render(map);
