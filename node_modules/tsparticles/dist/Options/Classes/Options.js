"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
const Interactivity_1 = require("./Interactivity/Interactivity");
const Particles_1 = require("./Particles/Particles");
const BackgroundMask_1 = require("./BackgroundMask/BackgroundMask");
const Background_1 = require("./Background/Background");
const Infection_1 = require("./Infection/Infection");
const Utils_1 = require("../../Utils");
class Options {
    constructor() {
        this.background = new Background_1.Background();
        this.backgroundMask = new BackgroundMask_1.BackgroundMask();
        this.detectRetina = true;
        this.fpsLimit = 30;
        this.infection = new Infection_1.Infection();
        this.interactivity = new Interactivity_1.Interactivity();
        this.particles = new Particles_1.Particles();
        this.pauseOnBlur = true;
    }
    get fps_limit() {
        return this.fpsLimit;
    }
    set fps_limit(value) {
        this.fpsLimit = value;
    }
    get retina_detect() {
        return this.detectRetina;
    }
    set retina_detect(value) {
        this.detectRetina = value;
    }
    load(data) {
        var _a, _b;
        if (data === undefined) {
            return;
        }
        if (data.preset !== undefined) {
            if (data.preset instanceof Array) {
                for (const preset of data.preset) {
                    this.importPreset(preset);
                }
            }
            else {
                this.importPreset(data.preset);
            }
        }
        const detectRetina = (_a = data.detectRetina) !== null && _a !== void 0 ? _a : data.retina_detect;
        if (detectRetina !== undefined) {
            this.detectRetina = detectRetina;
        }
        const fpsLimit = (_b = data.fpsLimit) !== null && _b !== void 0 ? _b : data.fps_limit;
        if (fpsLimit !== undefined) {
            this.fpsLimit = fpsLimit;
        }
        if (data.pauseOnBlur !== undefined) {
            this.pauseOnBlur = data.pauseOnBlur;
        }
        this.background.load(data.background);
        this.particles.load(data.particles);
        this.infection.load(data.infection);
        this.interactivity.load(data.interactivity);
        this.backgroundMask.load(data.backgroundMask);
        Utils_1.Plugins.loadOptions(this, data);
    }
    importPreset(preset) {
        this.load(Utils_1.Plugins.getPreset(preset));
    }
}
exports.Options = Options;
