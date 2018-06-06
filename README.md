# react-native-switchbutton[![npm version](https://badge.fury.io/js/react-native-switchbutton.svg)](https://badge.fury.io/js/react-native-switchbutton)
一个IOS样式的跨平台（cross-platform）平台的switch组件
## 第一步
工程目录下运行:<br/>
` npm install --save react-native-switchbutton`<br/>
或者(已经安装了yarn):<br/>` yarn add react-native-switchbutton`
## 第二部使用
在工程中导入：
```js
import Switch from 'react-native-switchbutton';

//使用方法和RN官方的Switch类似，
<Switch/>
```
## 属性
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

## 示例
<!--![image](https://github.com/2534290808/react-native-android-danmaku/blob/master/images/Screenshot_1513176625.png)-->
<img src="https://github.com/react-native-studio/react-native-switchbutton/blob/master/1.gif" width = "300"  alt="图片名称" align=center />
