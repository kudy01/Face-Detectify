import { Particle } from "../../../Particle";
import type { Container } from "../../../Container";
import type { IParticlesInteractor } from "../../../Interfaces/IParticlesInteractor";
export declare class Collider implements IParticlesInteractor {
    private readonly container;
    constructor(container: Container);
    private static rotate;
    private static collisionVelocity;
    private static bounce;
    private static destroy;
    private static getRadius;
    isEnabled(particle: Particle): boolean;
    reset(): void;
    interact(p1: Particle): void;
    private resolveCollision;
    private absorb;
}
