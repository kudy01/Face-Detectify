import type { DivMode, DivType } from "../../../../Enums";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
export interface IDivEvent {
    enable: boolean;
    mode: SingleOrMultiple<DivMode | keyof typeof DivMode | string>;
    el: SingleOrMultiple<string>;
    elementId: SingleOrMultiple<string>;
    ids: SingleOrMultiple<string>;
    type: DivType;
}
