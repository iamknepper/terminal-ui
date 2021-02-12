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

var _icons = _interopRequireDefault(require("../../assets/icons.svg"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var WinCtrls = {
  left: "left",
  right: "right"
};

var ElectronHeader = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ElectronHeader, _React$PureComponent);

  var _super = _createSuper(ElectronHeader);

  function ElectronHeader(props) {
    (0, _classCallCheck2["default"])(this, ElectronHeader);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(ElectronHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          winCtrls = _this$props.winCtrls,
          onMin = _this$props.onMin,
          onMax = _this$props.onMax,
          onClose = _this$props.onClose;
      var left = winCtrls === WinCtrls.left;
      var leftWinCtrls = left ? "ElectronHeader__WindowControlsLeft" : null;
      var maxButtonHref = this.props.maximized ? "".concat(_icons["default"], "#restore-window") : "".concat(_icons["default"], "#maximize-window");
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "ElectronHeader"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "ElectronHeader__Title"
      }, title), winCtrls && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classNames["default"])("ElectronHeader__WindowControls", leftWinCtrls)
      }, onMin && /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          return onMin();
        }
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "ElectronHeader_Shape"
      }, /*#__PURE__*/_react["default"].createElement("use", {
        xlinkHref: "".concat(_icons["default"], "#minimize-window")
      }))), onMax && /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          return onMax();
        }
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "ElectronHeader_Shape"
      }, /*#__PURE__*/_react["default"].createElement("use", {
        xlinkHref: maxButtonHref
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        onClick: function onClick() {
          return onClose();
        },
        className: (0, _classNames["default"])("ElectronHeader__WindowControl_Close", left ? "ElectronHeader__WindowControl_CloseLeft" : null)
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "ElectronHeader_Shape"
      }, /*#__PURE__*/_react["default"].createElement("use", {
        xlinkHref: "".concat(_icons["default"], "#close-window")
      })))));
    }
  }]);
  return ElectronHeader;
}(_react["default"].PureComponent);

var _default = ElectronHeader;
exports["default"] = _default;