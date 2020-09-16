import type { IEmitterLife } from "../Interfaces/IEmitterLife";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class EmitterLife implements IEmitterLife, IOptionLoader<IEmitterLife> {
    count?: number;
    delay?: number;
    duration?: number;
    load(data?: RecursivePartial<IEmitterLife>): void;
}
