"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberRandomSize = void 0;
class AbsorberRandomSize {
    constructor() {
        this.enable = false;
        this.minimumValue = 1;
    }
    load(data) {
        if (data !== undefined) {
            if (data.enable !== undefined) {
                this.enable = data.enable;
            }
            if (data.minimumValue !== undefined) {
                this.minimumValue = data.minimumValue;
            }
        }
    }
}
exports.AbsorberRandomSize = AbsorberRandomSize;
