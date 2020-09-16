import type { IOptions } from "../Interfaces/IOptions";
import { Interactivity } from "./Interactivity/Interactivity";
import { Particles } from "./Particles/Particles";
import { BackgroundMask } from "./BackgroundMask/BackgroundMask";
import type { RecursivePartial } from "../../Types/RecursivePartial";
import { Background } from "./Background/Background";
import { Infection } from "./Infection/Infection";
import type { IOptionLoader } from "../Interfaces/IOptionLoader";
export declare class Options implements IOptions, IOptionLoader<IOptions> {
    get fps_limit(): number;
    set fps_limit(value: number);
    get retina_detect(): boolean;
    set retina_detect(value: boolean);
    background: Background;
    backgroundMask: BackgroundMask;
    detectRetina: boolean;
    fpsLimit: number;
    infection: Infection;
    interactivity: Interactivity;
    particles: Particles;
    pauseOnBlur: boolean;
    preset?: string | string[];
    constructor();
    load(data?: RecursivePartial<IOptions>): void;
    private importPreset;
}
