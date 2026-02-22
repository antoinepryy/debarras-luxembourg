export const GA_TRACKING_ID = "AW-309816355";

export const CONVERSION_IDS = {
  formulaire: "AW-309816355/vId8CIuOi_0bEKPY3ZMB",
  appel: "AW-309816355/uolwCI6Oi_0bEKPY3ZMB",
} as const;

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackConversion(conversionId: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: conversionId,
    });
  }
}
