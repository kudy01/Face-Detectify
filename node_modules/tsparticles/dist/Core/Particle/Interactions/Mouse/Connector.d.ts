import type { Container } from "../../../Container";
import { IExternalInteractor } from "../../../Interfaces/IExternalInteractor";
export declare class Connector implements IExternalInteractor {
    private readonly container;
    constructor(container: Container);
    isEnabled(): boolean;
    reset(): void;
    interact(): void;
}
