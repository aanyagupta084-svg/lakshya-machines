const WHATSAPP_NUMBER = "917905633007"; // country code + number

/**
 * Generates a WhatsApp wa.me link with optional pre-filled message.
 */
export function getWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp in a new tab with optional pre-filled message.
 */
export function openWhatsApp(message?: string): void {
  window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
}

export const WHATSAPP_DISPLAY = "+91 79056 33007";
export const WHATSAPP_RAW = "7905633007";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Lakshya Keshari, I'm interested in your food processing machinery. Please share more details.";
