declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module "gsap/dist/gsap";
declare module "gsap/dist/ScrollTrigger";
