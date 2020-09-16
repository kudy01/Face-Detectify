import type { INoiseDelay } from "../../../Interfaces/Particles/Noise/INoiseDelay";
import { NoiseRandom } from "./NoiseRandom";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class NoiseDelay implements INoiseDelay, IOptionLoader<INoiseDelay> {
    random: NoiseRandom;
    value: number;
    constructor();
    load(data?: RecursivePartial<INoiseDelay>): void;
}
