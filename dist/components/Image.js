"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../utils/utils");
var tailwind_variants_1 = require("tailwind-variants");
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, className = _a.className, size = _a.size, shape = _a.shape, fit = _a.fit;
    var styled = (0, tailwind_variants_1.tv)({
        base: "w-full h-full object-cover",
        variants: {
            size: {
                xs: "w-8 h-8",
                sm: "w-10 h-10",
                md: "w-16 h-16",
                lg: "w-32 h-32",
                xl: "w-64 h-64",
                full: "w-full h-full",
            },
            shape: {
                default: "rounded-md",
                pill: "rounded-full",
                rounded: "rounded-lg",
                square: "rounded-xl",
            },
            fit: {
                contain: "object-contain",
                cover: "object-cover",
                // fill:"object-fill",
                fit: "object-fit",
            },
        },
        compoundVariants: [
            {
                size: ["xs", "sm", "md", "lg", "xl", "full"],
                shape: ["default", "pill", "rounded", "square"],
                fit: ["contain", "cover", "fit"],
            },
        ],
        defaultVariants: {
            size: "md",
            shape: "default",
            fit: "contain",
        },
    });
    return ((0, jsx_runtime_1.jsx)("img", { src: src, alt: alt, className: (0, utils_1.cn)(styled({ size: size, shape: shape, fit: fit }), className) }));
};
// imageStyle({ size, shape, fit }), className)
exports.default = Image;
