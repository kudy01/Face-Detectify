import type { IAbsorberRandomSize } from "../Interfaces/IAbsorberRandomSize";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class AbsorberRandomSize implements IAbsorberRandomSize, IOptionLoader<IAbsorberRandomSize> {
    enable: boolean;
    minimumValue: number;
    constructor();
    load(data?: RecursivePartial<IAbsorberRandomSize>): void;
}
