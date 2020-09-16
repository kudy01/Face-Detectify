import type { IParticle } from "../Core/Interfaces/IParticle";
import type { IShapeDrawer } from "../Core/Interfaces/IShapeDrawer";
export declare class StarDrawer implements IShapeDrawer {
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
}
