import type { ILocalSvg } from "../Interfaces/ILocalSvg";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { IDimension } from "../../../../Core/Interfaces/IDimension";
import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
export declare class LocalSvg implements ILocalSvg, IOptionLoader<ILocalSvg> {
    path: SingleOrMultiple<string>;
    size: IDimension;
    constructor();
    load(data?: RecursivePartial<ILocalSvg>): void;
}
