import type { ICollisions } from "../../Interfaces/Particles/ICollisions";
import { CollisionMode } from "../../../Enums";
import type { RecursivePartial } from "../../../Types/RecursivePartial";
import type { IOptionLoader } from "../../Interfaces/IOptionLoader";
export declare class Collisions implements ICollisions, IOptionLoader<ICollisions> {
    enable: boolean;
    mode: CollisionMode | keyof typeof CollisionMode;
    constructor();
    load(data?: RecursivePartial<ICollisions>): void;
}
