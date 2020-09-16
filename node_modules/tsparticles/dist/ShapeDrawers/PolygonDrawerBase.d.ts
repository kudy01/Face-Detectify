import type { IShapeDrawer } from "../Core/Interfaces/IShapeDrawer";
import type { ISide } from "../Core/Interfaces/ISide";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { IParticle } from "../Core/Interfaces/IParticle";
export declare abstract class PolygonDrawerBase implements IShapeDrawer {
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
    abstract getSidesData(particle: IParticle, radius: number): ISide;
    abstract getCenter(particle: IParticle, radius: number): ICoordinates;
}
