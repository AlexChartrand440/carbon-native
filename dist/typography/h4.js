Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/typography/h4.js';exports.default=H4;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({marginBottom:10,fontSize:18,fontWeight:'500'});function H4(props){return _react2.default.createElement(_reactNative.Text,_extends({},props,{style:[styles,props.style],__source:{fileName:_jsxFileName,lineNumber:13}}),props.children);}H4.propTypes={children:_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node),_propTypes2.default.node,_propTypes2.default.string]),style:_propTypes2.default.any};H4.defaultProps={};