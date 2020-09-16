import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { IBubbleDiv } from "../../../Interfaces/Interactivity/Modes/IBubbleDiv";
import { BubbleBase } from "./BubbleBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class BubbleDiv extends BubbleBase implements IBubbleDiv, IOptionLoader<IBubbleDiv> {
    ids: SingleOrMultiple<string>;
    constructor();
    load(data?: RecursivePartial<IBubbleDiv>): void;
}
