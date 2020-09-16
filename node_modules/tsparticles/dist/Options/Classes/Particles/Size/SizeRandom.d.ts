import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { ISizeRandom } from "../../../Interfaces/Particles/Size/ISizeRandom";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class SizeRandom implements ISizeRandom, IOptionLoader<ISizeRandom> {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<ISizeRandom> | undefined): void;
}
