// 定义自调用函数，防止作用域内部变量被外部js文件访问到
(function f(){
  // 记录游戏对象
  var that;
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  }

  // 开始渲染
  Game.prototype.start = function () {
    // 1. 现将蛇和食物对象渲染到地图上
    this.food.render(this.map);
    this.snake.render(this.map);
    // 2.开始游戏逻辑
    // 2.1 让蛇移动起来
    snakeRun(150);
    // 2.2 通过键盘操作蛇头
    controlSnake();
    // 2.3 当蛇遇到食物，蛇变长，食物重新生成
    // 2.4 当蛇遇到边界，游戏结束
  }

  // 2.1 让蛇移动起来
  function snakeRun(speedTime) {
    let timerId = setInterval(()=>{
      // 让蛇走一格
      that.snake.move(that.food, that.map);
      that.snake.render(that.map);

      // 2.4 当蛇遇到边界，游戏结束
      let maxX = that.map.offsetWidth / that.snake.width;
      let maxY = that.map.offsetHeight / that.snake.height;
      let headX = that.snake.body[0].x;
      let headY = that.snake.body[0].y;
      if(headX<0 || headX>=maxX || headY<0 || headY>=maxY){
        clearInterval(timerId);
        window.alert("Game over!");
      }
    }, speedTime);
  }

  // 2.2 通过键盘操作蛇头
  function controlSnake(){
    document.addEventListener('keydown', function(e){
      // console.log(e.key);
      switch(e.key){
        case 'ArrowLeft':
          that.snake.direction = 'left';
          break;
        case 'ArrowRight':
          that.snake.direction = 'right';
          break;
        case 'ArrowUp':
          that.snake.direction = 'up';
          break;
        case 'ArrowDown':
          that.snake.direction = 'down';
          break;
      }
    }, false)
  }



  // 在window中挂载Food，使得外部可以访问
  window.Game = Game;
})()
