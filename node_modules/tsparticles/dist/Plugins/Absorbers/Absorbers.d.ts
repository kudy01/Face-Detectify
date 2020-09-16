import type { IContainerPlugin } from "../../Core/Interfaces/IContainerPlugin";
import { AbsorberInstance } from "./AbsorberInstance";
import { Container } from "../../Core/Container";
import type { Particle } from "../../Core/Particle";
import { Absorber } from "./Options/Classes/Absorber";
import type { SingleOrMultiple } from "../../Types/SingleOrMultiple";
import type { IOptions } from "../../Options/Interfaces/IOptions";
import type { RecursivePartial } from "../../Types/RecursivePartial";
import { IAbsorberOptions } from "./Options/Interfaces/IAbsorberOptions";
export declare class Absorbers implements IContainerPlugin {
    private readonly container;
    array: AbsorberInstance[];
    absorbers: SingleOrMultiple<Absorber>;
    interactivityAbsorbers: SingleOrMultiple<Absorber>;
    constructor(container: Container);
    init(options?: RecursivePartial<IOptions & IAbsorberOptions>): void;
    particleUpdate(particle: Particle): void;
    draw(context: CanvasRenderingContext2D): void;
    stop(): void;
    resize(): void;
    handleClickMode(mode: string): void;
    addAbsorber(absorber: AbsorberInstance): void;
    removeAbsorber(absorber: AbsorberInstance): void;
}
