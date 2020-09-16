import type { ICoordinates } from "../../../../Core/Interfaces/ICoordinates";
import type { IColor } from "../../../../Core/Interfaces/IColor";
import type { IAbsorberSize } from "./IAbsorberSize";
export interface IAbsorber {
    color: IColor | string;
    opacity: number;
    position?: ICoordinates;
    size: IAbsorberSize;
    draggable: boolean;
    destroy: boolean;
    orbits: boolean;
}
