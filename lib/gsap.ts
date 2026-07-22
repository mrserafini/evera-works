import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins exactly once, in a single place.
// ALWAYS import gsap/ScrollTrigger/useGSAP from "@/lib/gsap" in components —
// never directly from "gsap" — so plugins are guaranteed to be registered.
gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };
