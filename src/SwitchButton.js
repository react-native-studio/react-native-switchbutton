import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
export default class SwitchButton extends Component{
  constructor(props){
    super(props);
    let {onTintColor,tintColor,value}=props;
    this.state = {
      scale: new Animated.Value(value?0:1),
      left: new Animated.Value(value?21:1),
      background:value?onTintColor:tintColor,
      animatedColor:new Animated.Value(value?1:0),
      value,
    }
  }
  propTypes={
    value:PropTypes.bool,
    onValueChange:PropTypes.func,
    onTintColor:PropTypes.string,//开启时的背景颜色
    thumbTintColor:PropTypes.string,//原型按钮的背景颜色
    tintColor:PropTypes.string,//关闭时的背景颜色
  }
  //开关转换
  toggleSwitch=()=>{
    let {value} = this.state;
    let {onValueChange} = this.props;
    if(!value) {//处于关闭状态
      this.setState(preState=>({
        value:!preState.value,
      }),()=>{
        onValueChange(this.state.value)
        Animated.parallel([
          Animated.timing(this.state.scale,{
            toValue:0.01,
            duration:375,
            easing:Easing.bezier(0.0,0.0,0,1)
          }),
          Animated.spring(this.state.left,{
            toValue:51-29-1,
            duration:375,
            easing:Easing.bezier(0.4,0.0,0.2,1),
            bounciness:10,
            speed:10
          }),
          Animated.timing(this.state.animatedColor,{
            toValue:1,
            duration:375,
            easing:Easing.bezier(0.0,0.0,0,1)
          })
        ]).start();
      })
    } else {//处于打开状态
      this.setState(preState=>({
        value:!preState.value,
      }),()=>{
        onValueChange(this.state.value)
        Animated.parallel([
          Animated.timing(this.state.scale,{
            toValue:1,
            duration:375,
            easing:Easing.bezier(0.4,0.0,0.2,1)
          }),
          Animated.spring(this.state.left,{
            toValue:0,
            duration:375,
            easing:Easing.bezier(0.4,0.0,0.2,1),
            bounciness:10,
            speed:10
          }),
          Animated.timing(this.state.animatedColor,{
            toValue:0,
            duration:375,
            easing:Easing.bezier(0.0,0.0,0,1)
          })
        ]).start();
      })
    }
  }
  render(){
    let {onTintColor,tintColor,thumbTintColor} = this.props;
    return(
      <TouchableWithoutFeedback onPress={this.toggleSwitch}>
        <Animated.View style={
          [styles.container, {backgroundColor:this.state.animatedColor.interpolate({
              inputRange: [0,0.1,1],
              outputRange: [tintColor,onTintColor,onTintColor],
            })}]
        }>
          <Animated.View style={[styles.switchBtn,{transform:[{scale:this.state.scale}]}]}/>
          <Animated.View style={[styles.switchThumb,{left:this.state.left,backgroundColor:thumbTintColor}]}/>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}
SwitchButton.defaultProps={
  value:false,
  onValueChange:()=>{},
  onTintColor:'#00cc33',//开启时的背景颜色
  thumbTintColor:"#fff",//原型按钮的背景颜色
  tintColor:'#DDD'
}
const styles = StyleSheet.create({
  container:{
    height:31,
    width:51,
    borderRadius:31/2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  switchBtn:{
    height:29,
    width:50,
    backgroundColor:'#fff',
    borderRadius:29/2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
  },
  switchThumb:{
    height:29,
    width:29,
    borderRadius:29/2,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#ddd',
    position:'absolute',
  }
})
