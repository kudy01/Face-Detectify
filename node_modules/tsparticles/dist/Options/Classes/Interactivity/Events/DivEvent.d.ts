import type { IDivEvent } from "../../../Interfaces/Interactivity/Events/IDivEvent";
import { DivMode, DivType } from "../../../../Enums";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class DivEvent implements IDivEvent, IOptionLoader<IDivEvent> {
    get elementId(): SingleOrMultiple<string>;
    set elementId(value: SingleOrMultiple<string>);
    get el(): SingleOrMultiple<string>;
    set el(value: SingleOrMultiple<string>);
    ids: SingleOrMultiple<string>;
    enable: boolean;
    mode: SingleOrMultiple<DivMode | keyof typeof DivMode | string>;
    type: DivType;
    constructor();
    load(data?: RecursivePartial<IDivEvent>): void;
}
