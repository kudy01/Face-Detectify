"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiseRandom = void 0;
class NoiseRandom {
    constructor() {
        this.enable = false;
        this.minimumValue = 0;
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
exports.NoiseRandom = NoiseRandom;
