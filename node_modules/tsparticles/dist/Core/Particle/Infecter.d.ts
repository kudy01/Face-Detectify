import { Particle } from "../Particle";
import { Container } from "../Container";
export declare class Infecter {
    private readonly container;
    private readonly particle;
    infectionStage?: number;
    infectionTime?: number;
    infectionDelay?: number;
    infectionDelayStage?: number;
    constructor(container: Container, particle: Particle);
    startInfection(stage: number): void;
    updateInfectionStage(stage: number): void;
    updateInfection(delta: number): void;
    private nextInfectionStage;
}
