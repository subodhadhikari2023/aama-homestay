import { homestay } from "./content";

export function buildWhatsAppURL(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${homestay.whatsappNumber}?text=${encoded}`;
}

export const genericBookingURL = buildWhatsAppURL(
  homestay.genericWhatsappMessage
);

export function roomBookingURL(roomId: string): string {
  const room = homestay.rooms.find((r) => r.id === roomId);
  if (!room) return genericBookingURL;
  return buildWhatsAppURL(room.whatsappMessage);
}
