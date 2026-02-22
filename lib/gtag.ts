export const GA_TRACKING_ID = "AW-17969647792";

export const CONVERSION_IDS = {
  formulaire: "AW-17969647792/rLTkCMmMjf0bELChzPhC",
  appel: "AW-17969647792/MIqrCMyMjf0bELChzPhC",
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
