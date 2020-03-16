/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import ReactReduxContext from "./Context";
import { bindActionCreators } from "../redux";
/**
 * @param {*} mapStateToProps 把仓库中的状态映射为组件属性对象
 * @param {*} mapDispatchToProps 把dispatch方法映射组件属性对象
 */
export default function(mapStateToProps, mapDispatchToProps) {
  return function(OldComponent) {
    return function(props) {
      //这里才是返回被connect的那个组件
      let reduxContext = useContext(ReactReduxContext);
      // 从store.getState()=>mapStateToProps=>对象成为OldComponent的属性对象
      let [state, setState] = useState(mapStateToProps(reduxContext.store.getState()));

      // 把actions进行绑定，然后把绑定后的结果boundActions作为属性对象传递给OldComponent
      //useState的参数可以是一个函数，都行惰性初始化 可以使得只绑定一次
      let [boundActions] = useState(() =>
        bindActionCreators(mapDispatchToProps, reduxContext.store.dispatch)
      );
      useEffect(() => {
        // 订阅store状态变化事件，当仓库状态发生改变之后，要刷新当组件以及 OldComponent
        return reduxContext.store.subscribe(() => {
          setState(mapStateToProps(reduxContext.store.getState()));
        });
      }, []);

      return <OldComponent {...state} {...boundActions} />;
    };
  };
}
