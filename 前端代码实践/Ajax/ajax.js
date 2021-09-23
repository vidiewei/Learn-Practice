/*
注意：访问本地文件会出现跨域问题，获取不到数据
为什么谷歌获取不到，会出现跨域的问题？这里要提一点，访问本地计算机中的文件，使用的是file协议
file协议主要用于访问本地计算机中的文件，就如同在Windows资源管理器中打开文件一样，注意它是针对本地（本机）的，简单来说，file协议是访问你本机的文件资源

*/

const { Script } = require("vm");

// 创建ajax通信服务器对象
function getHTTPObject(){
    "use strict";
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new window.XMLHttpRequest();
    }
    // 如果是老版本ie,则只支持Active对象
    else if(window.ActiveXObject){
        xhr=new window.ActiveXObject("Msxml2.XMLHTTP");
    }
    return xhr;
}

// 通常在实际的开发项目中，不可能仅仅有一个Ajax调用,为了复用，将这个Ajax程序封装成复用函数
// dataUrl:请求地址，outputElement：渲染数据的位置，callback：传入一个回调函数
function ajaxCall(dataUrl,outputElement,callback){
    "use strict";
    var request=new getHTTPObject();
    // 提醒用户正在加载...
    outputElement.innerHTML="Loading...";
    // 使用GET请求数据文件
    request.open("GET",dataUrl,true);
    request.send(null);
    // 监听状态改变
    request.onreadystatechange=function(){
        //当readyState全等于“4”状态，status全等于“200”状态 
        // 代表服务器状态服务及客户端请求正常，得以返回
        if(request.readyState===4||request.status===200){
            console.log("请求成功！");
            var contacts=JSON.parse(request.responseText);
            console.log(request.contacts);
            // 调用回调函数处理返回的JSON数据
            if(callback==="function"){
                callback(contacts);
            }
        }
        else{
            console.log("请求出错！");
        }
    };
}

// 将请求的JSON数据显示到HTML文档中
"use strict";
var searchForm=document.getElementById("search-form"),
    searchField=document.getElementById('q'),
    searchButton=document.getElementById("btn-search"),
    getAllButton=document.getElementById("get-all"),
    target=document.getElementById("output");

var serach={
    salad:function(event){
        var output=document.getElementById("output");
        var callback=function(data){
            console.log(data);
            //需要检索的值
            var searchValue=searchField.value,
                // 从json文件中找到食材条目
                fruit=data.fruit,
                count=fruit.length;
            // 阻止默认行为
            event.preventDefault();

            // 初始化渲染区域
            target.innerHTML="";
            if(count>0||searchValue!==""){
                for(let i=0;i<count;i++){
                    var obj=fruit[i];
                    var contain=obj.name.indexOf(searchValue);
                    // 如果找到了就写入到DOM中
                    if(contain!=-1){
                        target.innerHTML+='<p>'+obj.name+'<a href="mailto:" '+obj.color+'>'+obj.color+'</a></p>';

                    }
                }
            }
        } 
        ajaxCall('./test.txt',output,callback); //有同源访问限制
        
    }
}

// 绑定事件监听器,点击鼠标后调用函数请求JSON文件
searchButton.addEventListener("click",serach.salad,false);

