"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Input = function (_a) {
    var value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder;
    return ((0, jsx_runtime_1.jsx)("input", { value: value, onChange: onChange, placeholder: placeholder, className: "px-4 py-2 border border-gray-300 rounded" }));
};
exports.default = Input;
