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
var Button = function (_a) {
    var className = _a.className, icon = _a.icon, label = _a.label, shape = _a.shape, size = _a.size, half = _a.half, color = _a.color, fullWidth = _a.fullWidth, style = _a.style, square = _a.square, onClick = _a.onClick, children = _a.children, disabled = _a.disabled, props = __rest(_a, ["className", "icon", "label", "shape", "size", "half", "color", "fullWidth", "style", "square", "onClick", "children", "disabled"]);
    var styled = (0, tailwind_variants_1.tv)({
        base: [
            "outline-none",
            "border border-transparent",
            "transition-all duration-100",
            "leading-tight font-medium",
            "flex items-center",
            "".concat(square ? "justify-around border-inherent" : "justify-center"),
        ],
        variants: {
            fullWidth: { true: "w-full", false: "w-auto" },
            square: {
                1: "size-6",
                2: "size-7",
                3: "size-8",
            },
            half: {
                left: ["rounded-l-none"],
                right: ["rounded-r-none"],
            },
            shape: {
                default: "rounded-md",
                rounded: "rounded-lg",
                pill: "rounded-full",
                none: "rounded-none",
                square: "rounded-xl",
            },
            size: {
                xs: ["h-8", "text-[12px]", "px-[0.75rem]", "py-[0.5rem]"],
                sm: ["py-[10px]", "text-[14px]", "px-[1rem]", "h-9"],
                md: ["h-10", "px-[1.25rem]", "py-[0.75rem]", "text-[16px]"],
                lg: ["py-[0.875rem]", "px-[1.5rem]", "h-11", "text-[18px]"],
                xl: ["py-[0.940rem]", "px-[1.75rem]", "h-12", "text-[20px]"],
                //
                // xs: ["h-7 px-2 py-1 text-xs"],
                // sm: ["h-9 px-3 py-1.5 text-sm"],
                // md: ["h-10 px-4 py-2 text-base"],
                // lg: ["h-11 px-5 py-2.5 text-lg"],
            },
            color: {
                base: ["bg-black dark:bg-white", "text-white dark:text-black"],
                smooth: ["bg-transparent text-black", "bg-transparent dark:text-white"],
                primary: [],
                warning: [],
                danger: [],
                success: [],
            },
        },
        compoundVariants: [
            {
                shape: ["default", "rounded", "pill", "none", "square"],
                half: ["left", "right"],
                square: [1, 2, 3],
                fullWidth: [true, false],
                size: ["xs", "sm", "md", "lg", "xl"],
                color: ["base", "smooth", "primary", "warning", "danger", "success"],
                // className: ["rounded-md"],
                // state: ['default', 'disabled'],
            },
        ],
        defaultVariants: __assign(__assign({ shape: "default" }, (size ? {} : { fullWidth: true })), (square ? {} : { size: "sm", color: "base" })),
    });
    var appliedProps = square
        ? { shape: shape, square: square, half: half }
        : { size: size, shape: shape, fullWidth: fullWidth, color: color, half: half };
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ className: (0, utils_1.cn)(styled(appliedProps), className), disabled: disabled, onClick: onClick, style: style }, props, { role: "button" }, { children: [icon, label, children] })));
};
exports.default = Button;
