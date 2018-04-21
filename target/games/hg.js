"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultBoard = [
    ["o", "o", "o"],
    ["o", "o", "o"],
    ["o", "o", "o"]
];
const result = defaultBoard.reduce((r, e) => (r.push(...e), r), []);
let spliced = result.splice(3, 1, "board");
exports.newArr = [];
while (result.length)
    exports.newArr.push(result.splice(0, 3));
console.log(exports.newArr);
//# sourceMappingURL=hg.js.map