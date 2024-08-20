"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styled = void 0;
var tailwind_variants_1 = require("tailwind-variants"); // Adjust the imports based on how you're using tailwind-variants.
function styled() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return tailwind_variants_1.tv.apply(void 0, inputs); // this will combine the classnames or use variants
}
exports.styled = styled;
