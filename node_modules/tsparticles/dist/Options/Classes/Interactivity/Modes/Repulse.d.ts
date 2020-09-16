import type { IRepulse } from "../../../Interfaces/Interactivity/Modes/IRepulse";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import { RepulseDiv } from "./RepulseDiv";
import { RepulseBase } from "./RepulseBase";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Repulse extends RepulseBase implements IRepulse, IOptionLoader<IRepulse> {
    divs?: SingleOrMultiple<RepulseDiv>;
    load(data?: RecursivePartial<IRepulse>): void;
}
