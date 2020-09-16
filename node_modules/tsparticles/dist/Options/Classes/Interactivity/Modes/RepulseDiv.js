"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepulseDiv = void 0;
const RepulseBase_1 = require("./RepulseBase");
class RepulseDiv extends RepulseBase_1.RepulseBase {
    constructor() {
        super();
        this.ids = [];
    }
    load(data) {
        super.load(data);
        if (data === undefined) {
            return;
        }
        if (data.ids === undefined) {
            return;
        }
        this.ids = data.ids;
    }
}
exports.RepulseDiv = RepulseDiv;
