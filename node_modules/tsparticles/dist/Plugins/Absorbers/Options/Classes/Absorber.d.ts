import type { IAbsorber } from "../Interfaces/IAbsorber";
import type { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { AbsorberSize } from "./AbsorberSize";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class Absorber implements IAbsorber, IOptionLoader<IAbsorber> {
    color: OptionsColor;
    draggable: boolean;
    opacity: number;
    position?: ICoordinates;
    size: AbsorberSize;
    destroy: boolean;
    orbits: boolean;
    constructor();
    load(data?: RecursivePartial<IAbsorber>): void;
}
