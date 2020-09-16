import type { Container } from "../../../Container";
import { Particle } from "../../../Particle";
import type { IExternalInteractor } from "../../../Interfaces/IExternalInteractor";
export declare class Bubbler implements IExternalInteractor {
    private readonly container;
    constructor(container: Container);
    private static calculateBubbleValue;
    isEnabled(): boolean;
    reset(particle: Particle, force?: boolean): void;
    interact(): void;
    private singleDivHover;
    private process;
    private clickBubble;
    private hoverBubble;
    private hoverBubbleSize;
    private hoverBubbleOpacity;
    private hoverBubbleColor;
}
