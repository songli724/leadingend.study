1: npm : node package manager ,node包管理器,类似于maven
作用:
    1:快速构建nodejs工程
        - npm init
        -得到package.json这个文件里的内容如下:
        {
        "name" : "npmpro" ,//工程名
        "version" : "1.0.1"，//版本
        "description" : "我是一个node工程",//描述
        "main" : "index.js",//入口js
        " scripts " : {//运行脚本
             "test" : "echo \ "Error: no test specified \" && exit 1"},
        "author" :"学相伴",//开发者
        "license" : "ISC"//授权协议
        }
        

2:快速安装和依赖第三个模块。比如npm install mysql redis等等。
    2-1 :快速安装依赖第三方模块?
        npm install xxxxx 或者 npm i  xxx 模块名
    2-2:安装模块放在什么地方?
        安装的模块会放入在项目的mode_modules文件夹中
    2-3:安装模块如何使用呢?
        调入模块  const redis = require("redis");
    2-4:模块和package.json有什么关系呢?
        "dependencies":{
            "redis"：^3.0.2
        }
        通过 npm install xxx 命令下载的文件会记录在package.json这个文件中。
        就类似于maven中的pom.xml一个含义，记录作用：复用
        1：package.json记录的依赖模块 通过npm install 全部拉取到本地。
    2-5:如果安装模块很慢怎么?
        npm install -g cnpm --registry=https: / /registry.npm.taobao.org
    2-6:如何运行?
        node xxxx.js 运行过程.js是可以省去的   终止命令行:CTRL +C
    2-7:如何下载多个?
        npm install xxxx xxxx xxxx
    2-8:下载指定版本号的依赖
        npm install xxx@版本号
