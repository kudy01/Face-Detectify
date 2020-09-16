import type { IColorAnimation } from "../../Interfaces/Particles/IColorAnimation";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class ColorAnimation implements IColorAnimation, IOptionLoader<IColorAnimation> {
    enable: boolean;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IColorAnimation>): void;
}
