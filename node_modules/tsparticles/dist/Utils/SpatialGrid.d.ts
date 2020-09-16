import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { IDimension } from "../Core/Interfaces/IDimension";
import type { Particle } from "../Core/Particle";
export declare class SpatialGrid {
    private readonly cellSize;
    private widthSegment;
    private heightSegment;
    private grid;
    constructor(canvas: IDimension);
    init(dimension?: IDimension): void;
    setGrid(particles: Particle[], dimension?: IDimension): void;
    insert(particle: Particle): void;
    queryInCell(position: ICoordinates): Particle[];
    queryRadius(position: ICoordinates, radius: number): Particle[];
    queryRadiusWithDistance(position: ICoordinates, radius: number): {
        distance: number;
        particle: Particle;
    }[];
    private select;
    private index;
    private radius;
    private indexOp;
    private clamp;
}
