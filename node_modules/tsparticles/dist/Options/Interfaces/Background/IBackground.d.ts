import type { IColor } from "../../../Core/Interfaces/IColor";
export interface IBackground {
    color?: IColor | string;
    opacity?: number;
    image?: string;
    position?: string;
    repeat?: string;
    size?: string;
}
