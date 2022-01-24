## 装饰器模式-

​	经过eject后在package.json中进行配置

- 使用@babel-proposal-decorators

  - 根目录下npm run eject 。如果项目有改动，需要先commit后才能进行eject，不然会报错

  - 在package.json中的babel中添加plugins

    ```javascript
    {
      "babel":{
        "presets":["react-app"],
        "plugins": [
          [
            "@babel/plugin-proposal-decorators",
            {
              "legacy": true
            }
          ]
        ]
      },
    }
    ```

- 安装babel插件在babellrc中配置

  - 安装 babel-preset-stage-2 ，babel-preset-react-native-stage-0

  - 根目录下创建.babelrc文件,对.babelrc文件做一些配置

  - ```javascript
    {
      "presets":["react-native-stage-0/decorator-support"]
    }
    ```

    

