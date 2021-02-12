"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Button = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Button, _React$PureComponent);

  var _super = _createSuper(Button);

  function Button(props) {
    (0, _classCallCheck2["default"])(this, Button);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          width = _this$props.width,
          height = _this$props.height,
          backgroundImage = _this$props.backgroundImage;
      var disabledClass = disabled ? "Button__disabled" : null;
      console.log(backgroundImage);

      var _backgroundImage = backgroundImage ? {
        backgroundImage: "url(".concat(backgroundImage, ")"),
        backgroundSize: "100%",
        backgroundPosition: "center center"
      } : null;

      var buttonImageClass = backgroundImage ? "ButtonImage" : null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classNames["default"])("Button", disabledClass, buttonImageClass),
        onClick: onClick,
        style: _objectSpread({
          width: width,
          height: height
        }, _backgroundImage)
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "ButtonTitle"
      }, children));
    }
  }]);
  return Button;
}(_react["default"].PureComponent);

exports["default"] = Button;