/**
 * 实现思路：
 * 利用<a>标签进行url的切换，js代码监测url的变化，从而改变特定区域的显示内容
 * 注意：<a>标签的href必须以"#"开头，如<a href="#/....">, 因为有“#”,页面不会刷新，这就是单页面应用程序路由切换的原理
 */

// 立即执行函数，避免变量被污染
(function(){
  let Router = function(){
    this.router = {} // 保存路由
    this.curUrl = '' // 获取当前的hash值
  }

  Router.prototype.init = function(){
    // 监听到页面路径变化后，就执行加载页面的操作
    window.addEventListener('hashchange', this.reloadPage.bind(this));
  }

  // 加载页面
  Router.prototype.reloadPage = function(){
    // 获取当前hash值
    this.curUrl = location.hash.substring(1) || '/';
    // console.log(location.hash);
    // 运行hash值对应的回调函数
    this.router[this.curUrl]();
  }

  // 添加跳转路径以及需要执行的回调函数
  Router.prototype.map = function(key, callback){
    this.router[key] = callback;
  }

  // 将Router暴露出去
  window.Rou = Router;
})();

let router = new Rou();
router.init();
router.map('/', function(){
  // 展示主页
  let mainPage = document.getElementById('content');
  mainPage.innerText = '主页内容';
})
router.map('/html', function(){
  // 展示html
  let mainPage = document.getElementById('content');
  mainPage.innerText = 'HTML内容';
})
router.map('/css', function(){
  // 展示css
  let mainPage = document.getElementById('content');
  mainPage.innerText = 'CSS内容';
})
router.map('/js', function(){
  // 展示js
  let mainPage = document.getElementById('content');
  mainPage.innerText = 'JS内容';
})
