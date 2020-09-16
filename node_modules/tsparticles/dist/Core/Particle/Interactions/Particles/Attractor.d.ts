import type { IParticle } from "../../../Interfaces/IParticle";
import type { Container } from "../../../Container";
import { Particle } from "../../../Particle";
import { IParticlesInteractor } from "../../../Interfaces/IParticlesInteractor";
export declare class Attractor implements IParticlesInteractor {
    private readonly container;
    constructor(container: Container);
    interact(p1: IParticle): void;
    isEnabled(particle: Particle): boolean;
    reset(): void;
}
