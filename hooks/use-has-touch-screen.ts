"use client";

import { useEffect, useState } from "react";

export function useHasTouchScreen() {
  const [hasTouchScreen, setHasTouchScreen] = useState(false);

  useEffect(() => {
    const detectTouchScreen = () => {
      let detected = false;

      if (typeof navigator !== "object") return false;

      if ("maxTouchPoints" in navigator) {
        detected = navigator.maxTouchPoints > 0;
      } else if ("msMaxTouchPoints" in navigator) {
        detected =
          (navigator as { msMaxTouchPoints: number }).msMaxTouchPoints > 0;
      } else {
        const mQ = matchMedia?.("(pointer:coarse)");
        if (mQ?.media === "(pointer:coarse)") {
          detected = !!mQ.matches;
        } else if ("orientation" in window) {
          detected = true; // deprecated, but good fallback
        } else {
          // Only as a last resort, fall back to user agent sniffing
          const UA = (navigator as { userAgent: string }).userAgent;
          detected =
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
      }

      return detected;
    };

    setHasTouchScreen(detectTouchScreen());
  }, []);

  return hasTouchScreen;
}
