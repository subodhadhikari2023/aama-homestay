import { homestay } from "./content";

export function buildWhatsAppURL(message: string): string {
  return `https://wa.me/${homestay.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const genericBookingURL = buildWhatsAppURL(
  homestay.genericWhatsappMessage
);

export function roomBookingURL(roomId: string): string {
  const room = homestay.rooms.find((r) => r.id === roomId);
  if (!room) return genericBookingURL;

  const priceNote =
    room.directPrice !== null
      ? `₹${room.directPrice.toLocaleString("en-IN")}/night`
      : "Price on request";

  const message = [
    "Hi Bikash bhai,",
    "",
    `I'd like to book the ${room.name} at Aama Homestay (${priceNote}).`,
    "",
    "Check-in: ",
    "Check-out: ",
    "Guests: ",
    "",
    "Could you please confirm availability and share the booking details?",
    "Thank you.",
  ].join("\n");

  return buildWhatsAppURL(message);
}
