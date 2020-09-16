import type { ISizeAnimation } from "./ISizeAnimation";
import type { ISizeRandom } from "./ISizeRandom";
export interface ISize {
    anim: ISizeAnimation;
    animation: ISizeAnimation;
    random: boolean | ISizeRandom;
    value: number;
}
