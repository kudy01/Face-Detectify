import type { ICoordinates } from "../../Core/Interfaces/ICoordinates";
import type { Container } from "../../Core/Container";
import type { Particle } from "../../Core/Particle";
import type { IRgb } from "../../Core/Interfaces/IRgb";
import type { IAbsorber } from "./Options/Interfaces/IAbsorber";
import type { Absorbers } from "./Absorbers";
declare type OrbitingParticle = Particle & {
    orbitRadius?: number;
    orbitAngle?: number;
    needsNewPosition?: boolean;
};
export declare class AbsorberInstance {
    private readonly absorbers;
    private readonly container;
    color: IRgb;
    limit?: number;
    mass: number;
    opacity: number;
    position: ICoordinates;
    size: number;
    private readonly initialPosition?;
    private readonly options;
    private dragging;
    constructor(absorbers: Absorbers, container: Container, options: IAbsorber, position?: ICoordinates);
    attract(particle: OrbitingParticle): void;
    resize(): void;
    draw(context: CanvasRenderingContext2D): void;
    private calcPosition;
    private updateParticlePosition;
}
export {};
