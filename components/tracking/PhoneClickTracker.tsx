"use client";

import { useEffect } from "react";
import { trackConversion, CONVERSION_IDS } from "@/lib/gtag";

export function PhoneClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (target?.href?.startsWith("tel:")) {
        trackConversion(CONVERSION_IDS.appel);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
