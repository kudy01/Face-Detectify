import type { IBackgroundMask } from "../../Interfaces/BackgroundMask/IBackgroundMask";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import { BackgroundMaskCover } from "./BackgroundMaskCover";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class BackgroundMask implements IBackgroundMask, IOptionLoader<IBackgroundMask> {
    cover: BackgroundMaskCover;
    enable: boolean;
    constructor();
    load(data?: RecursivePartial<IBackgroundMask>): void;
}
