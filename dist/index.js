"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ElectronWindow", {
  enumerable: true,
  get: function get() {
    return _ElectronWindow["default"];
  }
});
Object.defineProperty(exports, "ElectronHeader", {
  enumerable: true,
  get: function get() {
    return _ElectronHeader["default"];
  }
});
Object.defineProperty(exports, "ElectronContent", {
  enumerable: true,
  get: function get() {
    return _ElectronContent["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});

var _ElectronWindow = _interopRequireDefault(require("./components/Electron/ElectronWindow"));

var _ElectronHeader = _interopRequireDefault(require("./components/Electron/ElectronHeader"));

var _ElectronContent = _interopRequireDefault(require("./components/Electron/ElectronContent"));

var _Button = _interopRequireDefault(require("./components/Button/Button"));