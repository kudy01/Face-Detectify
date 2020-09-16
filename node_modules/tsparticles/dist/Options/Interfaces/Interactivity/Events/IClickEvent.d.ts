import type { ClickMode } from "../../../../Enums";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
export interface IClickEvent {
    enable: boolean;
    mode: SingleOrMultiple<ClickMode | keyof typeof ClickMode | string>;
}
