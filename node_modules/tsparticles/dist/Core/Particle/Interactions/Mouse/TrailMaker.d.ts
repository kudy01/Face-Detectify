import type { IExternalInteractor } from "../../../Interfaces/IExternalInteractor";
import type { Container } from "../../../Container";
import type { IDelta } from "../../../Interfaces/IDelta";
export declare class TrailMaker implements IExternalInteractor {
    private readonly container;
    private delay;
    constructor(container: Container);
    interact(delta: IDelta): void;
    isEnabled(): boolean;
    reset(): void;
}
