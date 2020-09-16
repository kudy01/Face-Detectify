import type { IColor } from "../../../Core/Interfaces/IColor";
import type { IBackgroundMaskCover } from "./IBackgroundMaskCover";
export interface IBackgroundMask {
    cover: IBackgroundMaskCover | IColor | string;
    enable: boolean;
}
