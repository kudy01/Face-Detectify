"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opacity = void 0;
const OpacityAnimation_1 = require("./OpacityAnimation");
const OpacityRandom_1 = require("./OpacityRandom");
class Opacity {
    constructor() {
        this.animation = new OpacityAnimation_1.OpacityAnimation();
        this.random = new OpacityRandom_1.OpacityRandom();
        this.value = 1;
    }
    get anim() {
        return this.animation;
    }
    set anim(value) {
        this.animation = value;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        this.animation.load((_a = data.animation) !== null && _a !== void 0 ? _a : data.anim);
        if (data.random !== undefined) {
            if (typeof data.random === "boolean") {
                this.random.enable = data.random;
            }
            else {
                this.random.load(data.random);
            }
        }
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.Opacity = Opacity;
