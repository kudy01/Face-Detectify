import { MainSlim } from "./main.slim";
declare const tsParticles: MainSlim;
declare const particlesJS: import("./pjs").IParticlesJS, pJSDom: import("./Core/Container").Container[];
export * from "./Enums";
export { tsParticles, particlesJS, pJSDom };
