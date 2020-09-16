import type { IDimension } from "../Core/Interfaces/IDimension";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { IRgb } from "../Core/Interfaces/IRgb";
import type { ILinksShadow } from "../Options/Interfaces/Particles/Links/ILinksShadow";
import type { IParticle } from "../Core/Interfaces/IParticle";
import type { IShadow } from "../Options/Interfaces/Particles/IShadow";
import type { Container } from "../Core/Container";
import type { IContainerPlugin } from "../Core/Interfaces/IContainerPlugin";
import { IDelta } from "../Core/Interfaces/IDelta";
export declare class CanvasUtils {
    static paintBase(context: CanvasRenderingContext2D, dimension: IDimension, baseColor?: string): void;
    static clear(context: CanvasRenderingContext2D, dimension: IDimension): void;
    static drawLinkLine(context: CanvasRenderingContext2D, width: number, begin: ICoordinates, end: ICoordinates, maxDistance: number, canvasSize: IDimension, warp: boolean, backgroundMask: boolean, colorLine: IRgb, opacity: number, shadow: ILinksShadow): void;
    static drawLinkTriangle(context: CanvasRenderingContext2D, width: number, pos1: ICoordinates, pos2: ICoordinates, pos3: ICoordinates, backgroundMask: boolean, colorTriangle: IRgb, opacityTriangle: number): void;
    static drawConnectLine(context: CanvasRenderingContext2D, width: number, lineStyle: CanvasGradient, begin: ICoordinates, end: ICoordinates): void;
    static gradient(context: CanvasRenderingContext2D, p1: IParticle, p2: IParticle, opacity: number): CanvasGradient | undefined;
    static drawGrabLine(context: CanvasRenderingContext2D, width: number, begin: ICoordinates, end: ICoordinates, colorLine: IRgb, opacity: number): void;
    static drawParticle(container: Container, context: CanvasRenderingContext2D, particle: IParticle, delta: IDelta, fillColorValue: string, strokeColorValue: string, backgroundMask: boolean, radius: number, opacity: number, shadow: IShadow): void;
    static drawShape(container: Container, context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number, delta: IDelta): void;
    static drawShapeAfterEffect(container: Container, context: CanvasRenderingContext2D, particle: IParticle, radius: number, opacity: number, delta: IDelta): void;
    static drawPlugin(context: CanvasRenderingContext2D, plugin: IContainerPlugin, delta: IDelta): void;
    private static drawLine;
    private static drawTriangle;
}
