Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/toolbar/toolbar-right.js';exports.default=ToolbarRight;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _styles=require('../styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var cs=_reactNative.StyleSheet.create(_styles.carbonStyles);var styles=_reactNative.StyleSheet.create({flex:1,flexDirection:'row',justifyContent:'flex-end',overflow:'hidden',paddingVertical:8,paddingLeft:6});function ToolbarRight(props){return _react2.default.createElement(_reactNative.View,_extends({},props,{style:[styles,props.style],__source:{fileName:_jsxFileName,lineNumber:19}}),props.children);}ToolbarRight.propTypes={children:_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node),_propTypes2.default.node]),color:_propTypes2.default.number,footer:_propTypes2.default.bool,header:_propTypes2.default.bool,style:_propTypes2.default.any};ToolbarRight.defaultProps={};