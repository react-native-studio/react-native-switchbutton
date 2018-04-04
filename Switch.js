import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    requireNativeComponent,
    findNodeHandle,
    UIManager,
    Platform,
    Switch as SwitchIOS
} from 'react-native';
import {ViewPropTypes,PropTypes} from './Util'
const RCTSwitchButton = requireNativeComponent('RCTSwitchButton', RCTSwitchButton);

class Switch extends Component {

    _onValueChange=(event)=>{
        this.props.onValueChange && this.props.onValueChange(event.nativeEvent.checked)
    }
    render() {
        if(Platform.OS==='ios'){
            return (
                <SwitchIOS
                    {...this.props}
                />
            )
        }else{
        var props = {...this.props};
        props.style=[styles.rctSwitchButton,this.props.style];
        props.onSwitchButtonChange=this._onValueChange;
        props.checkedColor=this.props.onTintColor;
        props.buttonColor=this.props.thumbTintColor;
        props.enabled=!this.props.disabled
        return (
            <RCTSwitchButton
                {...props}
            />

        )
        }
    }
}
var styles = StyleSheet.create({
    rctSwitchButton: {
        height: 31,
        width: 51,
    }
});
Switch.propTypes = {
    disabled:PropTypes.bool,
    value:PropTypes.bool,
    onValueChange:PropTypes.func,
    onTintColor:PropTypes.string,
    thumbTintColor:PropTypes.string,
    ...ViewPropTypes,
}
export default Switch;