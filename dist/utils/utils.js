"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cn = void 0;
var tailwind_merge_1 = require("tailwind-merge");
var clsx_1 = require("clsx");
function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return (0, tailwind_merge_1.twMerge)(clsx_1.clsx.apply(void 0, inputs));
}
exports.cn = cn;
// export function style(...inputs: Parameters<typeof tv>) {
//   return tv(...inputs);
// }
// export function style(...inputs: Parameters<typeof tv>): TVReturnType {
//   return tv(...inputs) as unknown as TVReturnType;
// }
