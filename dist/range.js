Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/range.js';exports.default=Toggle;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _styles=require('./styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function Toggle(props){return _react2.default.createElement(_reactNative.Slider,_extends({},props,{style:[props.style],__source:{fileName:_jsxFileName,lineNumber:9}}));}Toggle.propTypes={color:_propTypes2.default.string,style:_propTypes2.default.any};Toggle.defaultProps={color:'stable'};