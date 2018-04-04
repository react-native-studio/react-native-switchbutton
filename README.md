# react-native-switchbutton[![npm version](https://badge.fury.io/js/react-native-switchbutton.svg)](https://badge.fury.io/js/react-native-switchbutton)
基于android switchbutton https://github.com/scwang90/switchbutton 开发的插件，可提供类似ios的弹性刷新、加载
## 第一步
工程目录下运行 npm install --save react-native-switchbutton 或者 yarn add react-native-switchbutton(已经安装了yarn)
## 第二步
运行 react-native link react-native-switchbutton
## 第三部使用
在工程中导入：
```bash
import Switch from 'react-native-switchbutton';

//使用方法和RN官方的Switch类似，
<Switch/>
```

##属性
```js
View props... 

disabled bool 

如果为true，这个组件不能进行交互。

onValueChange function 

当值改变的时候调用此回调函数，参数为新的值。

value bool 

表示此开关是否打开。默认为false（关闭状态）。

onTintColor ColorPropType 

开启状态时的背景颜色。

thumbTintColor ColorPropType 

开关上圆形按钮的背景颜色。
```
