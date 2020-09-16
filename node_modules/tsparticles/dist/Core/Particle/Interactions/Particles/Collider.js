"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collider = void 0;
const Utils_1 = require("../../../../Utils");
const Enums_1 = require("../../../../Enums");
class Collider {
    constructor(container) {
        this.container = container;
    }
    static rotate(velocity, angle) {
        return {
            horizontal: velocity.horizontal * Math.cos(angle) - velocity.vertical * Math.sin(angle),
            vertical: velocity.horizontal * Math.sin(angle) + velocity.vertical * Math.cos(angle),
        };
    }
    static collisionVelocity(v1, v2, m1, m2) {
        return {
            horizontal: (v1.horizontal * (m1 - m2)) / (m1 + m2) + (v2.horizontal * 2 * m2) / (m1 + m2),
            vertical: v1.vertical,
        };
    }
    static bounce(p1, p2) {
        const pos1 = p1.getPosition();
        const pos2 = p2.getPosition();
        const xVelocityDiff = p1.velocity.horizontal - p2.velocity.horizontal;
        const yVelocityDiff = p1.velocity.vertical - p2.velocity.vertical;
        const xDist = pos2.x - pos1.x;
        const yDist = pos2.y - pos1.y;
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            const angle = -Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x);
            const m1 = p1.size.value;
            const m2 = p2.size.value;
            const u1 = Collider.rotate(p1.velocity, angle);
            const u2 = Collider.rotate(p2.velocity, angle);
            const v1 = Collider.collisionVelocity(u1, u2, m1, m2);
            const v2 = Collider.collisionVelocity(u2, u1, m1, m2);
            const vFinal1 = Collider.rotate(v1, -angle);
            const vFinal2 = Collider.rotate(v2, -angle);
            p1.velocity.horizontal = vFinal1.horizontal;
            p1.velocity.vertical = vFinal1.vertical;
            p2.velocity.horizontal = vFinal2.horizontal;
            p2.velocity.vertical = vFinal2.vertical;
        }
    }
    static destroy(p1, p2) {
        if (p1.size.value === undefined && p2.size.value !== undefined) {
            p1.destroy();
        }
        else if (p1.size.value !== undefined && p2.size.value === undefined) {
            p2.destroy();
        }
        else if (p1.size.value !== undefined && p2.size.value !== undefined) {
            if (p1.size.value >= p2.size.value) {
                p2.destroy();
            }
            else {
                p1.destroy();
            }
        }
    }
    static getRadius(particle, fallback) {
        return particle.bubble.radius || particle.size.value || fallback;
    }
    isEnabled(particle) {
        return particle.particlesOptions.collisions.enable;
    }
    reset() {
    }
    interact(p1) {
        const container = this.container;
        const pos1 = p1.getPosition();
        const query = container.particles.quadTree.query(new Utils_1.Circle(pos1.x, pos1.y, p1.size.value * 2));
        for (const p2 of query) {
            if (p1 === p2 ||
                !p2.particlesOptions.collisions.enable ||
                p1.particlesOptions.collisions.mode !== p2.particlesOptions.collisions.mode) {
                continue;
            }
            const pos2 = p2.getPosition();
            const dist = Utils_1.Utils.getDistance(pos1, pos2);
            const defaultSize = container.retina.sizeValue;
            const radius1 = Collider.getRadius(p1, defaultSize);
            const radius2 = Collider.getRadius(p2, defaultSize);
            const distP = radius1 + radius2;
            if (dist <= distP) {
                this.resolveCollision(p1, p2);
            }
        }
    }
    resolveCollision(p1, p2) {
        switch (p1.particlesOptions.collisions.mode) {
            case Enums_1.CollisionMode.absorb: {
                this.absorb(p1, p2);
                break;
            }
            case Enums_1.CollisionMode.bounce: {
                Collider.bounce(p1, p2);
                break;
            }
            case Enums_1.CollisionMode.destroy: {
                Collider.destroy(p1, p2);
                break;
            }
        }
    }
    absorb(p1, p2) {
        const container = this.container;
        const fps = container.options.fpsLimit / 1000;
        if (p1.size.value === undefined && p2.size.value !== undefined) {
            p1.destroy();
        }
        else if (p1.size.value !== undefined && p2.size.value === undefined) {
            p2.destroy();
        }
        else if (p1.size.value !== undefined && p2.size.value !== undefined) {
            if (p1.size.value >= p2.size.value) {
                const factor = Utils_1.Utils.clamp(p1.size.value / p2.size.value, 0, p2.size.value) * fps;
                p1.size.value += factor;
                p2.size.value -= factor;
                if (p2.size.value <= container.retina.pixelRatio) {
                    p2.size.value = 0;
                    p2.destroy();
                }
            }
            else {
                const factor = Utils_1.Utils.clamp(p2.size.value / p1.size.value, 0, p1.size.value) * fps;
                p1.size.value -= factor;
                p2.size.value += factor;
                if (p1.size.value <= container.retina.pixelRatio) {
                    p1.size.value = 0;
                    p1.destroy();
                }
            }
        }
    }
}
exports.Collider = Collider;
