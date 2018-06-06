import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    ViewPropTypes,
    SwitchIOS,
} from 'react-native';
import PropTypes from 'prop-types';
import SwitchButton from './src/SwitchButton';

class Switch extends Component {

    render() {
        if(Platform.OS==='ios'){
            return (
                <SwitchIOS
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
    ...ViewPropTypes,
}
export default Switch;
