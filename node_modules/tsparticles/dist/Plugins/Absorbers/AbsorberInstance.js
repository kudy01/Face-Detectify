"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsorberInstance = void 0;
const Utils_1 = require("../../Utils");
class AbsorberInstance {
    constructor(absorbers, container, options, position) {
        var _a, _b;
        this.absorbers = absorbers;
        this.container = container;
        this.initialPosition = position;
        this.options = options;
        this.dragging = false;
        let size = options.size.value * container.retina.pixelRatio;
        const random = typeof options.size.random === "boolean" ? options.size.random : options.size.random.enable;
        const minSize = typeof options.size.random === "boolean" ? 1 : options.size.random.minimumValue;
        if (random) {
            size = Utils_1.Utils.randomInRange(minSize, size);
        }
        this.opacity = this.options.opacity;
        this.size = size * container.retina.pixelRatio;
        this.mass = this.size * options.size.density;
        const limit = options.size.limit;
        this.limit = limit !== undefined ? limit * container.retina.pixelRatio : limit;
        const color = typeof options.color === "string" ? { value: options.color } : options.color;
        this.color = (_a = Utils_1.ColorUtils.colorToRgb(color)) !== null && _a !== void 0 ? _a : {
            b: 0,
            g: 0,
            r: 0,
        };
        this.position = (_b = this.initialPosition) !== null && _b !== void 0 ? _b : this.calcPosition();
    }
    attract(particle) {
        const options = this.options;
        if (options.draggable) {
            const mouse = this.container.interactivity.mouse;
            if (mouse.clicking && mouse.downPosition) {
                const mouseDist = Utils_1.Utils.getDistance(this.position, mouse.downPosition);
                if (mouseDist <= this.size) {
                    this.dragging = true;
                }
            }
            else {
                this.dragging = false;
            }
            if (this.dragging && mouse.position) {
                this.position.x = mouse.position.x;
                this.position.y = mouse.position.y;
            }
        }
        const pos = particle.getPosition();
        const { dx, dy, distance } = Utils_1.Utils.getDistances(this.position, pos);
        const angle = Math.atan2(dx, dy);
        const acceleration = this.mass / Math.pow(distance, 2);
        if (distance < this.size + particle.size.value) {
            const sizeFactor = particle.size.value * 0.033 * this.container.retina.pixelRatio;
            if (this.size > particle.size.value && distance < this.size - particle.size.value) {
                if (options.destroy) {
                    particle.destroy();
                }
                else {
                    particle.needsNewPosition = true;
                    this.updateParticlePosition(particle, angle, acceleration);
                }
            }
            else {
                if (options.destroy) {
                    particle.size.value -= sizeFactor;
                }
                this.updateParticlePosition(particle, angle, acceleration);
            }
            if (this.limit === undefined || this.size < this.limit) {
                this.size += sizeFactor;
            }
            this.mass += sizeFactor * this.options.size.density;
        }
        else {
            this.updateParticlePosition(particle, angle, acceleration);
        }
    }
    resize() {
        const initialPosition = this.initialPosition;
        this.position =
            initialPosition && Utils_1.Utils.isPointInside(initialPosition, this.container.canvas.size)
                ? initialPosition
                : this.calcPosition();
    }
    draw(context) {
        context.translate(this.position.x, this.position.y);
        context.beginPath();
        context.arc(0, 0, this.size, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStyle = Utils_1.ColorUtils.getStyleFromRgb(this.color, this.opacity);
        context.fill();
    }
    calcPosition() {
        var _a;
        const container = this.container;
        const percentPosition = (_a = this.options.position) !== null && _a !== void 0 ? _a : {
            x: Math.random() * 100,
            y: Math.random() * 100,
        };
        return {
            x: (percentPosition.x / 100) * container.canvas.size.width,
            y: (percentPosition.y / 100) * container.canvas.size.height,
        };
    }
    updateParticlePosition(particle, angle, acceleration) {
        var _a;
        if (particle.destroyed) {
            return;
        }
        const canvasSize = this.container.canvas.size;
        if (particle.needsNewPosition) {
            const pSize = particle.size.value;
            particle.position.x = Math.random() * (canvasSize.width - pSize * 2) + pSize;
            particle.position.y = Math.random() * (canvasSize.height - pSize * 2) + pSize;
            particle.needsNewPosition = false;
        }
        if (this.options.orbits) {
            if (particle.orbitRadius === undefined) {
                particle.orbitRadius = Utils_1.Utils.getDistance(particle.getPosition(), this.position);
            }
            if (particle.orbitRadius <= this.size && !this.options.destroy) {
                particle.orbitRadius = Math.random() * Math.max(canvasSize.width, canvasSize.height);
            }
            if (particle.orbitAngle === undefined) {
                particle.orbitAngle = Math.random() * Math.PI * 2;
            }
            const orbitRadius = particle.orbitRadius;
            const orbitAngle = particle.orbitAngle;
            particle.velocity.horizontal = 0;
            particle.velocity.vertical = 0;
            particle.position.x = this.position.x + orbitRadius * Math.cos(orbitAngle);
            particle.position.y = this.position.y + orbitRadius * Math.sin(orbitAngle);
            particle.orbitRadius -= acceleration;
            particle.orbitAngle += ((_a = particle.moveSpeed) !== null && _a !== void 0 ? _a : this.container.retina.moveSpeed) / 100;
        }
        else {
            particle.velocity.horizontal += Math.sin(angle) * acceleration;
            particle.velocity.vertical += Math.cos(angle) * acceleration;
        }
    }
}
exports.AbsorberInstance = AbsorberInstance;
