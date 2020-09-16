import type { ILinks } from "../../../Interfaces/Particles/Links/ILinks";
import { LinksShadow } from "./LinksShadow";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import { LinksTriangle } from "./LinksTriangle";
import { OptionsColor } from "../../OptionsColor";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
export declare class Links implements ILinks, IOptionLoader<ILinks> {
    id?: string;
    blink: boolean;
    color: OptionsColor;
    consent: boolean;
    distance: number;
    enable: boolean;
    opacity: number;
    shadow: LinksShadow;
    triangles: LinksTriangle;
    width: number;
    warp: boolean;
    constructor();
    load(data?: RecursivePartial<ILinks>): void;
}
