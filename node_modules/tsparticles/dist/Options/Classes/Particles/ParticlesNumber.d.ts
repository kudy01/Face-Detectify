import type { IParticlesNumber } from "../../Interfaces/Particles/IParticlesNumber";
import { Density } from "./Density";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class ParticlesNumber implements IParticlesNumber, IOptionLoader<IParticlesNumber> {
    get max(): number;
    set max(value: number);
    density: Density;
    limit: number;
    value: number;
    constructor();
    load(data?: RecursivePartial<IParticlesNumber>): void;
}
