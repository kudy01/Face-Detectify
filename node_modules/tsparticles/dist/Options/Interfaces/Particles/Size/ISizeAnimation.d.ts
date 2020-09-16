import type { DestroyType, StartValueType } from "../../../../Enums";
export interface ISizeAnimation {
    enable: boolean;
    size_min: number;
    minimumValue: number;
    speed: number;
    sync: boolean;
    startValue: StartValueType | keyof typeof StartValueType;
    destroy: DestroyType | keyof typeof DestroyType;
}
