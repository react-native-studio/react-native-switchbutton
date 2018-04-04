package com.lmy.switchbutton;

import android.graphics.Color;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

public class SwitchManager extends SimpleViewManager<Switch> {
    private static final String REACT_CLASS="RCTSwitchButton";
    private Switch mSwitch;
    private ThemedReactContext themedReactContext;
    private RCTEventEmitter mEventEmitter;
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected Switch createViewInstance(ThemedReactContext reactContext) {
        mSwitch=new Switch(reactContext);
        themedReactContext=reactContext;
        mEventEmitter=reactContext.getJSModule(RCTEventEmitter.class);
        return mSwitch;
    }
    @Override
    public Map getExportedCustomDirectEventTypeConstants() {
        MapBuilder.Builder builder = MapBuilder.builder();
        for (Events event : Events.values()) {
            builder.put(event.toString(), MapBuilder.of("registrationName", event.toString()));
        }
        return builder.build();
    }
    @ReactProp(name = "enabled",defaultBoolean = false)
    public void setEnabled(Switch view,boolean enabled){
        view.setEnabled(enabled);
    }
    @ReactProp(name = "value",defaultBoolean = false)
    public void setValue(Switch view,boolean value){
        view.setChecked(value);
    }
    @ReactProp(name = "checkedColor")
    public void setCheckedColor(Switch view,String checkedColor){
        view.setChechedColor(Color.parseColor(checkedColor));
    }
    @ReactProp(name = "buttonColor")
    public void setButtonColor(Switch view,String buttonColor){
        view.setButtonColor(Color.parseColor(buttonColor));
    }
    @Override
    protected void addEventEmitters(ThemedReactContext reactContext, Switch view) {
        view.setOnCheckedChangeListener(new Switch.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(Switch view, boolean isChecked) {
                WritableMap writableMap= Arguments.createMap();
                writableMap.putBoolean("checked",isChecked);
                mEventEmitter.receiveEvent(getTargetId(),Events.SWITCH_BUTTON_CHANGE.toString(),writableMap);

            }
        });
        //super.addEventEmitters(reactContext, view);
    }

    private int getTargetId(){
        return mSwitch.getId();
    }

}
