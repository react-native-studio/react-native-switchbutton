import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    ViewPropTypes,
    Switch as SwitchNative,
} from 'react-native';
import PropTypes from 'prop-types';
import SwitchButton from './src/SwitchButton';

class Switch extends Component {

    render() {
        if(this.props.useNative){
            return (
                <SwitchNative
                    {...this.props}
                />
            )
        }else{
            return (
                <SwitchButton
                    {...this.props}
                />
            )
        }
    }
}
Switch.propTypes = {
    disabled:PropTypes.bool,
    value:PropTypes.bool,
    onValueChange:PropTypes.func,
    onTintColor:PropTypes.string,
    thumbTintColor:PropTypes.string,
    tintColor:PropTypes.string,
    useNative:PropTypes.bool,//使用RN官方提供的switch
    tintColorUsage:PropTypes.oneOf(['border','background']),//tintColor的使用方式，在useNative为false时有效
    useNativeDriver:PropTypes.bool,//是否使用原生动画，在useNative为false时有效
    ...ViewPropTypes,
}
export default Switch;
