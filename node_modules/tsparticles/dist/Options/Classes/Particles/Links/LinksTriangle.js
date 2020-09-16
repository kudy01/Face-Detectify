"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksTriangle = void 0;
const OptionsColor_1 = require("../../OptionsColor");
class LinksTriangle {
    constructor() {
        this.enable = false;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.color !== undefined) {
            this.color = OptionsColor_1.OptionsColor.create(this.color, data.color);
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.opacity !== undefined) {
            this.opacity = data.opacity;
        }
    }
}
exports.LinksTriangle = LinksTriangle;
