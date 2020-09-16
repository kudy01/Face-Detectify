import type { IInteractivity } from "./Interactivity/IInteractivity";
import type { IParticles } from "./Particles/IParticles";
import type { IBackgroundMask } from "./BackgroundMask/IBackgroundMask";
import type { IBackground } from "./Background/IBackground";
import type { IInfection } from "./Infection/IInfection";
export interface IOptions {
    background: IBackground;
    backgroundMask: IBackgroundMask;
    detectRetina: boolean;
    fps_limit: number;
    fpsLimit: number;
    infection: IInfection;
    interactivity: IInteractivity;
    particles: IParticles;
    pauseOnBlur: boolean;
    preset?: string | string[];
    retina_detect: boolean;
}
