import type { IContainerPlugin } from "../../Core/Interfaces/IContainerPlugin";
import { EmitterInstance } from "./EmitterInstance";
import type { Container } from "../../Core/Container";
import type { RecursivePartial } from "../../Types/RecursivePartial";
import { Emitter } from "./Options/Classes/Emitter";
import type { IOptions } from "../../Options/Interfaces/IOptions";
import type { SingleOrMultiple } from "../../Types/SingleOrMultiple";
import { IEmitterOptions } from "./Options/Interfaces/IEmitterOptions";
export declare class Emitters implements IContainerPlugin {
    private readonly container;
    array: EmitterInstance[];
    emitters: SingleOrMultiple<Emitter>;
    interactivityEmitters: SingleOrMultiple<Emitter>;
    constructor(container: Container);
    init(options?: RecursivePartial<IOptions & IEmitterOptions>): void;
    play(): void;
    pause(): void;
    stop(): void;
    handleClickMode(mode: string): void;
    resize(): void;
    addEmitter(emitter: EmitterInstance): void;
    removeEmitter(emitter: EmitterInstance): void;
}
