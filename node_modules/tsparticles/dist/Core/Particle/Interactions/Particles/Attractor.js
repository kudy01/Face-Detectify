"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attractor = void 0;
const Utils_1 = require("../../../../Utils");
class Attractor {
    constructor(container) {
        this.container = container;
    }
    interact(p1) {
        var _a;
        const container = this.container;
        const options = container.options;
        const distance = (_a = p1.linksDistance) !== null && _a !== void 0 ? _a : container.retina.linksDistance;
        const pos1 = p1.getPosition();
        const query = container.particles.quadTree.query(new Utils_1.Circle(pos1.x, pos1.y, distance));
        for (const p2 of query) {
            if (p1 === p2 || p2.particlesOptions.move.attract.enable) {
                continue;
            }
            const pos2 = p2.getPosition();
            const { dx, dy } = Utils_1.Utils.getDistances(pos1, pos2);
            const rotate = options.particles.move.attract.rotate;
            const ax = dx / (rotate.x * 1000);
            const ay = dy / (rotate.y * 1000);
            p1.velocity.horizontal -= ax;
            p1.velocity.vertical -= ay;
            p2.velocity.horizontal += ax;
            p2.velocity.vertical += ay;
        }
    }
    isEnabled(particle) {
        return particle.particlesOptions.move.attract.enable;
    }
    reset() {
    }
}
exports.Attractor = Attractor;
