"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Size = void 0;
const SizeAnimation_1 = require("./SizeAnimation");
const SizeRandom_1 = require("./SizeRandom");
class Size {
    constructor() {
        this.animation = new SizeAnimation_1.SizeAnimation();
        this.random = new SizeRandom_1.SizeRandom();
        this.value = 3;
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
        const animation = (_a = data.animation) !== null && _a !== void 0 ? _a : data.anim;
        if (animation !== undefined) {
            this.animation.load(animation);
        }
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
exports.Size = Size;
