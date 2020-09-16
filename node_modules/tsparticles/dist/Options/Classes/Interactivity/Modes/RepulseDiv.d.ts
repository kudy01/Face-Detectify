import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { IRepulseDiv } from "../../../Interfaces/Interactivity/Modes/IRepulseDiv";
import { RepulseBase } from "./RepulseBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class RepulseDiv extends RepulseBase implements IRepulseDiv, IOptionLoader<IRepulseDiv> {
    ids: SingleOrMultiple<string>;
    constructor();
    load(data?: RecursivePartial<IRepulseDiv>): void;
}
