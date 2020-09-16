import type { ISize } from "../../../Interfaces/Particles/Size/ISize";
import { SizeAnimation } from "./SizeAnimation";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { SizeRandom } from "./SizeRandom";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Size implements ISize, IOptionLoader<ISize> {
    get anim(): SizeAnimation;
    set anim(value: SizeAnimation);
    animation: SizeAnimation;
    random: SizeRandom;
    value: number;
    constructor();
    load(data?: RecursivePartial<ISize>): void;
}
