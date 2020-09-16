import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOpacityRandom } from "../../../Interfaces/Particles/Opacity/IOpacityRandom";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class OpacityRandom implements IOpacityRandom, IOptionLoader<IOpacityRandom> {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<IOpacityRandom> | undefined): void;
}
