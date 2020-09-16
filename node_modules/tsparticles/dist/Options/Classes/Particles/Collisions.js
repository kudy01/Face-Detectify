"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collisions = void 0;
const Enums_1 = require("../../../Enums");
class Collisions {
    constructor() {
        this.enable = false;
        this.mode = Enums_1.CollisionMode.bounce;
    }
    load(data) {
        if (data === undefined) {
            return;
        }
        if (data.enable !== undefined) {
            this.enable = data.enable;
        }
        if (data.mode !== undefined) {
            this.mode = data.mode;
        }
    }
}
exports.Collisions = Collisions;
