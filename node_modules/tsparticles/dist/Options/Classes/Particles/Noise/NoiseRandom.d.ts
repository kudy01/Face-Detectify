import type { INoiseRandom } from "../../../Interfaces/Particles/Noise/INoiseRandom";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class NoiseRandom implements INoiseRandom, IOptionLoader<INoiseRandom> {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<INoiseRandom>): void;
}
