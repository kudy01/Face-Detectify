import type { IRotate } from "../../../Interfaces/Particles/Rotate/IRotate";
import { RotateAnimation } from "./RotateAnimation";
import { RotateDirection, RotateDirectionAlt } from "../../../../Enums";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Rotate implements IRotate, IOptionLoader<IRotate> {
    animation: RotateAnimation;
    direction: RotateDirection | keyof typeof RotateDirection | RotateDirectionAlt;
    path: boolean;
    random: boolean;
    value: number;
    constructor();
    load(data?: RecursivePartial<IRotate>): void;
}
