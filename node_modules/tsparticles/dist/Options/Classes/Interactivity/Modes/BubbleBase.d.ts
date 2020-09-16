import type { IBubbleBase } from "../../../Interfaces/Interactivity/Modes/IBubbleBase";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import { OptionsColor } from "../../OptionsColor";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
export declare abstract class BubbleBase implements IBubbleBase {
    distance: number;
    duration: number;
    opacity?: number;
    size?: number;
    color?: SingleOrMultiple<OptionsColor>;
    constructor();
    load(data?: RecursivePartial<IBubbleBase>): void;
}
