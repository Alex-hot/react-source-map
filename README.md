# 装饰器模式-2

- 安装 customize-cra react-app-rewired babel-plugin-import

  ```javascript
  npm i customize-cra react-app-rewired -D
  npm i babel-plugin-import -D
  ```

- 修改package.json中的启动命令

  ```javascript
  "script":{
    // - "start": "react-scripts start",
   	 "start": "react-app-rewired start",
   	// - "build": "react-scripts build",
   	 "build": "react-app-rewired build",
    // - "test": "react-scripts test",
   	 "test": "react-app-rewired test",
     "start": "react-scripts start",
  }
  ```

- 根目录下创建config-overrides.js

- 引入customize-cra中的一些配置

  ```javascript
  const {override,addDecoratorsLegacy} = require('customize-cra')
  
  module.export = override(
  addDecoratorsLegacy(),
  )
  ```
