import type { IOpacityAnimation } from "../../../Interfaces/Particles/Opacity/IOpacityAnimation";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class OpacityAnimation implements IOpacityAnimation, IOptionLoader<IOpacityAnimation> {
    get opacity_min(): number;
    set opacity_min(value: number);
    enable: boolean;
    minimumValue: number;
    speed: number;
    sync: boolean;
    constructor();
    load(data?: RecursivePartial<IOpacityAnimation>): void;
}
