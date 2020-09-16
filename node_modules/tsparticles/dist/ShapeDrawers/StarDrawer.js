"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarDrawer = void 0;
class StarDrawer {
    draw(context, particle, radius) {
        var _a, _b, _c;
        const star = particle.shapeData;
        const sides = (_b = (_a = star === null || star === void 0 ? void 0 : star.sides) !== null && _a !== void 0 ? _a : star === null || star === void 0 ? void 0 : star.nb_sides) !== null && _b !== void 0 ? _b : 5;
        const inset = (_c = star === null || star === void 0 ? void 0 : star.inset) !== null && _c !== void 0 ? _c : 2;
        context.moveTo(0, 0 - radius);
        for (let i = 0; i < sides; i++) {
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius * inset);
            context.rotate(Math.PI / sides);
            context.lineTo(0, 0 - radius);
        }
    }
}
exports.StarDrawer = StarDrawer;
