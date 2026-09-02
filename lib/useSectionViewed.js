"use client";
import { useEffect, useRef } from "react";
import { track } from "./track";

// Fires section_viewed once, the first time the block is meaningfully on screen.
// Sections here are often taller than the viewport, so "visible" means the
// visible slice covers half the block or a third of the screen, whichever
// comes first.
export function useSectionViewed(section) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let done = false;

    const check = () => {
      if (done) return;

      const rect = node.getBoundingClientRect();
      const visible =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      if (visible <= 0) return;

      if (visible >= rect.height / 2 || visible >= window.innerHeight / 3) {
        done = true;
        track("section_viewed", { section });
        document.removeEventListener("scroll", check, { capture: true });
        window.removeEventListener("resize", check);
      }
    };

    check();
    document.addEventListener("scroll", check, { passive: true, capture: true });
    window.addEventListener("resize", check, { passive: true });

    return () => {
      document.removeEventListener("scroll", check, { capture: true });
      window.removeEventListener("resize", check);
    };
  }, [section]);

  return ref;
}
