"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialGrid = void 0;
const Utils_1 = require("./Utils");
class SpatialGrid {
    constructor(canvas) {
        this.grid = [];
        this.cellSize = 20;
        this.widthSegment = Math.round(canvas.width / this.cellSize);
        this.heightSegment = Math.round(canvas.height / this.cellSize);
    }
    init(dimension) {
        this.widthSegment = (dimension === null || dimension === void 0 ? void 0 : dimension.width) ? (dimension === null || dimension === void 0 ? void 0 : dimension.width) / this.cellSize : this.widthSegment;
        this.heightSegment = (dimension === null || dimension === void 0 ? void 0 : dimension.height) ? (dimension === null || dimension === void 0 ? void 0 : dimension.height) / this.cellSize : this.heightSegment;
        this.grid = [];
    }
    setGrid(particles, dimension) {
        this.init(dimension);
        for (const particle of particles) {
            this.insert(particle);
        }
    }
    insert(particle) {
        const pos = particle.getPosition();
        const posIndex = this.index(pos);
        if (!Array.isArray(this.grid[posIndex.x]))
            this.grid[posIndex.x] = [];
        if (!Array.isArray(this.grid[posIndex.x][posIndex.y]))
            this.grid[posIndex.x][posIndex.y] = [];
        this.grid[posIndex.x][posIndex.y].push(particle);
    }
    queryInCell(position) {
        const pos = this.index(position);
        return Array.isArray(this.grid[pos.x]) && Array.isArray(this.grid[pos.x][pos.y])
            ? this.grid[pos.x][pos.y] || []
            : [];
    }
    queryRadius(position, radius) {
        const pos = this.index(position);
        const rad = this.radius({ x: radius, y: radius });
        const items = this.select(this.indexOp(pos, "-", rad), this.indexOp(pos, "+", rad));
        const out = [];
        for (const item of items) {
            const itemPos = item.getPosition();
            if (Utils_1.Utils.getDistance(itemPos, position) <= radius) {
                out.push(item);
            }
        }
        return out;
    }
    queryRadiusWithDistance(position, radius) {
        const pos = this.index(position);
        const rad = this.radius({ x: radius, y: radius });
        const items = this.select(this.indexOp(pos, "-", rad), this.indexOp(pos, "+", rad));
        const out = [];
        for (const item of items) {
            const itemPos = item.getPosition();
            const distance = Utils_1.Utils.getDistance(itemPos, position);
            if (distance <= radius) {
                out.push({
                    distance: distance,
                    particle: item,
                });
            }
        }
        return out;
    }
    select(start, end) {
        const out = [];
        for (let x = start.x; x <= end.x; x++) {
            if (!Array.isArray(this.grid[x])) {
                continue;
            }
            for (let y = start.y; y <= end.y; y++) {
                if (!Array.isArray(this.grid[x][y])) {
                    continue;
                }
                for (const item of this.grid[x][y]) {
                    out.push(item);
                }
            }
        }
        return out;
    }
    index(position) {
        return {
            x: Math.round(position.x / this.widthSegment),
            y: Math.round(position.y / this.heightSegment),
        };
    }
    radius(radius) {
        return {
            x: Math.ceil(radius.x / this.widthSegment),
            y: Math.ceil(radius.y / this.heightSegment),
        };
    }
    indexOp(left, op, right) {
        if (op === "+") {
            return {
                x: this.clamp(left.x + right.x),
                y: this.clamp(left.y + right.y),
            };
        }
        else {
            return {
                x: this.clamp(left.x - right.x),
                y: this.clamp(left.y - right.y),
            };
        }
    }
    clamp(num) {
        return Utils_1.Utils.clamp(num, 0, this.cellSize);
    }
}
exports.SpatialGrid = SpatialGrid;
