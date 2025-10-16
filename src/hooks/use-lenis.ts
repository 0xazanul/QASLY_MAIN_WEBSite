"use client";

import { useLenis } from "lenis/react";

export function useSmoothScroll() {
  const lenis = useLenis();

  const scrollTo = (target: string | number, options?: { offset?: number; duration?: number }) => {
    if (!lenis) return;
    
    lenis.scrollTo(target, {
      offset: options?.offset || 0,
      duration: options?.duration || 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  const scrollToTop = () => {
    scrollTo(0);
  };

  const scrollToSection = (sectionId: string, offset = -100) => {
    scrollTo(`#${sectionId}`, { offset });
  };

  return {
    lenis,
    scrollTo,
    scrollToTop,
    scrollToSection,
  };
}
