"use client";
import { useEffect } from "react";
import { track } from "./track";

const MILESTONES = [25, 50, 75, 100];

export function useScrollDepth() {
  useEffect(() => {
    const reached = new Set();

    const onScroll = () => {
      // The page scrolls inside <body> on desktop and inside the document
      // element on some mobile browsers, so measure both and take whichever
      // actually moves.
      const candidates = [document.body, document.documentElement];
      const scroller = candidates.reduce((best, el) =>
        el.scrollHeight - el.clientHeight > best.scrollHeight - best.clientHeight
          ? el
          : best,
      );

      const scrollable = scroller.scrollHeight - scroller.clientHeight;
      if (scrollable <= 0) return;

      const scrolled = Math.max(scroller.scrollTop, window.scrollY);
      const percent = Math.min(100, Math.round((scrolled / scrollable) * 100));

      for (const milestone of MILESTONES) {
        if (percent >= milestone && !reached.has(milestone)) {
          reached.add(milestone);
          track("scroll_depth_reached", { depth: milestone });
        }
      }
    };

    document.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    return () =>
      document.removeEventListener("scroll", onScroll, { capture: true });
  }, []);
}
