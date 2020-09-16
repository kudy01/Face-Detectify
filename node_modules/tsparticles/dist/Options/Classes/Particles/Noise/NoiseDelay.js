"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoiseDelay = void 0;
const NoiseRandom_1 = require("./NoiseRandom");
class NoiseDelay {
    constructor() {
        this.random = new NoiseRandom_1.NoiseRandom();
        this.value = 0;
    }
    load(data) {
        var _a;
        if (data === undefined) {
            return;
        }
        (_a = this.random) === null || _a === void 0 ? void 0 : _a.load(data.random);
        if (data.value !== undefined) {
            this.value = data.value;
        }
    }
}
exports.NoiseDelay = NoiseDelay;
