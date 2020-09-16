import type { IOpacityAnimation } from "./IOpacityAnimation";
import type { IOpacityRandom } from "./IOpacityRandom";
export interface IOpacity {
    value: number;
    random: boolean | IOpacityRandom;
    anim: IOpacityAnimation;
    animation: IOpacityAnimation;
}
