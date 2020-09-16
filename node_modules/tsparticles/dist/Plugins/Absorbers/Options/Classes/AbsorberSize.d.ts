import type { IAbsorberSize } from "../Interfaces/IAbsorberSize";
import { AbsorberRandomSize } from "./AbsorberRandomSize";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class AbsorberSize implements IAbsorberSize, IOptionLoader<IAbsorberSize> {
    density: number;
    limit?: number;
    random: AbsorberRandomSize;
    value: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberSize>): void;
}
