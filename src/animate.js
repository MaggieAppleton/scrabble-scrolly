import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animate(node, { type, ...args }) {
  let method = gsap[type];
  return method(node, args);
}