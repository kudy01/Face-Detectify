"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineDrawer = void 0;
class LineDrawer {
    draw(context, particle, radius) {
        context.moveTo(0, -radius / 2);
        context.lineTo(0, radius / 2);
    }
}
exports.LineDrawer = LineDrawer;
