# Learn-Practice
## 一、代码检查 && 格式化
```
Eslint校验代码语法，prettier统一格式化代码，按下保存自动修复eslint错误，自动格式化代码
```
### 1、操作步骤
- 安装vscode插件 **Eslint** 和 **Prettier**, Eslint用于代码规则校验，Prettier用于代码格式检查；
-  在项目的.vscode文件夹下新建setting.json的文件，用于工作区配置，这样该项目会优先使用该文件内配置的规则
-  Eslint配置：根目录新建.eslintrc.js文件，添加相应配置
-  Prettier配置：根目录新建.prettierrc.json文件，添加相应配置
-  按 shift+alt+f，会弹出提示，让你选择默认的 code formatter 项，此时选择Prettier-Code formatter
### 2、参考资料
- [VSCode 配置 ESLint + Prettier](https://my.oschina.net/u/3347851/blog/4760687)
- [VSCode 使用 ESLint + Prettier 来统一 JS 代码](https://www.cnblogs.com/xjnotxj/p/10828183.html)