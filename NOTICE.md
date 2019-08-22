1. `npm i eslint -D npx eslint --init`自动初始化eslint配置,可以选择语言vue/react,可以选择airbnb/google等规范
2. `npx eslint src`检查src下的代码,`npx eslint src --fix`修复src下的代码
3. webpack的resolve.alias在eslint中会报错,详情见`https://blog.csdn.net/weixin_34195364/article/details/91445085`
4. `https://www.jianshu.com/p/d078b5f3036a`
5. 配置babel问题,如果安装了`npm i @babel/runtime -S`,plugins中的corejs就是false；如果安装了`npm i @babel/runtime-corejs2/3 -S`,plugins中的corejs就是2/3;如果配置了`useBuiltIns:'usage'`,就会提示安装core-js,虽然没啥影响;以上打包之后的js体积从小到大依次为`@babel/runtime < @babel/runtime-corejs2 < @babel/runtime-corejs3`
6. 关于5的相关资料`https://blog.csdn.net/weixin_34151004/article/details/93175123`
`https://segmentfault.com/q/1010000018937075/`这个仅供参考说是transform-runtime和useBuiltIns只能用一个
`https://www.jianshu.com/p/d078b5f3036a`这个也蛮好的，可惜讲的是babel7.1,现在都用7.5.5了
```
  {
    "presets": [
      ["@babel/preset-env", {
        "modules": false,
        "targets": {
          "browsers": [">1%", "last 2 versions"]
        },
        "useBuiltIns": "usage"
      }]
    ],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        {
          "corejs": 2,
          "helpers": true,
          "regenerator": true,
          "useESModules": false
        }
      ]
    ]
  }

```

