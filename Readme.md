# 什么是Typescript
理解成JS的超集，强类型
* 注意
  目前Typescript无法再浏览器中运行

# 为什么使用Typescript
* 省得再判断类型

# 编译ts文件
tsc 文件名 <br>
生成一个js文件

# 查看Typescript版本
tsc -v

# 区别devDependencies和dependencies
* devDependencies <br>
  只参与开发，不会打包放到服务器上
  yarn add -D
* dependencies
  会打包放到服务器上
  yarn add -S

# lite-server插件
自动开3000端口，监听根目录下文件 <br>
好处：html文件自动刷新