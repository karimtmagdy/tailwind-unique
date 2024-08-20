"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../utils/utils");
var tailwind_variants_1 = require("tailwind-variants");
var Heading = function (_a) {
    var level = _a.level, className = _a.className, children = _a.children, text = _a.text;
    var styled = (0, tailwind_variants_1.tv)({
        // base: "font-bold leading-tight",
        variants: {
            level: {
                1: "text-4xl",
                2: "text-3xl",
                3: "text-2xl",
                4: "text-xl",
                5: "text-lg",
                6: "text-base",
            },
        },
        // compoundVariants: [
        //   {
        //     level: [1, 2, 3, 4, 5, 6],
        //   },
        // ],
        defaultVariants: {
            level: 1,
        },
    });
    // const Tag = `h${level}`;
    return ((0, jsx_runtime_1.jsxs)(Tag, __assign({ className: (0, utils_1.cn)(styled({ level: level }), className) }, { children: [text, children] })));
};
function Tag(_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (0, jsx_runtime_1.jsx)(Tag, __assign({}, props, { children: children }));
}
exports.default = Heading;
