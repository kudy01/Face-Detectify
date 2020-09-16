"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Infecter = void 0;
const Utils_1 = require("../../../../Utils");
class Infecter {
    constructor(container) {
        this.container = container;
    }
    isEnabled() {
        return this.container.options.infection.enable;
    }
    reset() {
    }
    interact(p1, delta) {
        var _a, _b;
        const infecter1 = p1.infecter;
        infecter1.updateInfection(delta.value);
        if (infecter1.infectionStage === undefined) {
            return;
        }
        const container = this.container;
        const options = container.options;
        const infectionOptions = options.infection;
        if (!infectionOptions.enable || infectionOptions.stages.length < 1) {
            return;
        }
        const infectionStage1 = infectionOptions.stages[infecter1.infectionStage];
        const pxRatio = container.retina.pixelRatio;
        const radius = p1.size.value * 2 + infectionStage1.radius * pxRatio;
        const pos = p1.getPosition();
        const infectedStage1 = (_a = infectionStage1.infectedStage) !== null && _a !== void 0 ? _a : infecter1.infectionStage;
        const query = container.particles.quadTree
            .query(new Utils_1.Circle(pos.x, pos.y, radius))
            .filter((p) => p.infecter.infectionStage === undefined || p.infecter.infectionStage !== infecter1.infectionStage);
        const infections = infectionStage1.rate;
        const neighbors = query.length;
        for (const p2 of query) {
            const infecter2 = p2.infecter;
            if (Math.random() < infections / neighbors) {
                if (infecter2.infectionStage === undefined) {
                    infecter2.startInfection(infectedStage1);
                }
                else if (infecter2.infectionStage < infecter1.infectionStage) {
                    infecter2.updateInfectionStage(infectedStage1);
                }
                else if (infecter2.infectionStage > infecter1.infectionStage) {
                    const infectionStage2 = infectionOptions.stages[infecter2.infectionStage];
                    const infectedStage2 = (_b = infectionStage2 === null || infectionStage2 === void 0 ? void 0 : infectionStage2.infectedStage) !== null && _b !== void 0 ? _b : infecter2.infectionStage;
                    infecter1.updateInfectionStage(infectedStage2);
                }
            }
        }
    }
}
exports.Infecter = Infecter;
