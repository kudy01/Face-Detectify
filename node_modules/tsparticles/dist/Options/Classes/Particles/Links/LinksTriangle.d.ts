import type { ILinksTriangle } from "../../../Interfaces/Particles/Links/ILinksTriangle";
import { OptionsColor } from "../../OptionsColor";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class LinksTriangle implements ILinksTriangle, IOptionLoader<ILinksTriangle> {
    color?: OptionsColor;
    enable: boolean;
    opacity?: number;
    constructor();
    load(data?: RecursivePartial<ILinksTriangle>): void;
}
