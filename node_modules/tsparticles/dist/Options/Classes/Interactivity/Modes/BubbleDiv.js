"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleDiv = void 0;
const BubbleBase_1 = require("./BubbleBase");
class BubbleDiv extends BubbleBase_1.BubbleBase {
    constructor() {
        super();
        this.ids = [];
    }
    load(data) {
        super.load(data);
        if (!(data !== undefined && data.ids !== undefined)) {
            return;
        }
        this.ids = data.ids;
    }
}
exports.BubbleDiv = BubbleDiv;
