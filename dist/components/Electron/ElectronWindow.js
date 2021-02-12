"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ElectronWindow = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ElectronWindow, _React$PureComponent);

  var _super = _createSuper(ElectronWindow);

  function ElectronWindow(props) {
    (0, _classCallCheck2["default"])(this, ElectronWindow);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(ElectronWindow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          border = _this$props.border,
          style = _this$props.style;
      var borderClass = border ? 'ElectronWindow__Border' : null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classNames["default"])("ElectronWindow", borderClass),
        style: style
      }, this.props.children);
    }
  }]);
  return ElectronWindow;
}(_react["default"].PureComponent);

var _default = ElectronWindow;
exports["default"] = _default;