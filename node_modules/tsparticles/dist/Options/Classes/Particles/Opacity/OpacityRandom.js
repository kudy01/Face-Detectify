"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityRandom = void 0;
class OpacityRandom {
    constructor() {
        this.enable = false;
        this.minimumValue = 1;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}
exports.OpacityRandom = OpacityRandom;
