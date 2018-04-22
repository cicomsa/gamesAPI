"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
let ColorValidator = class ColorValidator {
    validate(text) {
        return text === "brown";
    }
    defaultMessage() {
        return `Only red, blue, green, magenta and yellow as color, please!`;
    }
};
ColorValidator = __decorate([
    class_validator_1.ValidatorConstraint({ name: "randomColor", async: true })
], ColorValidator);
exports.ColorValidator = ColorValidator;
//# sourceMappingURL=colorValidator.js.map