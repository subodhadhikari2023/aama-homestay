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

  const message =
    room.directPrice !== null
      ? [
          "Hi Bikash bhai,",
          "",
          `I'd like to book the ${room.name} at Aama Homestay (₹${room.directPrice.toLocaleString("en-IN")}/night).`,
          "",
          "Check-in: ",
          "Check-out: ",
          "Guests: ",
          "",
          "Could you please confirm availability and share the booking details?",
          "Thank you.",
        ].join("\n")
      : [
          "Hi Bikash bhai,",
          "",
          `I'd like to book the ${room.name} at Aama Homestay.`,
          "",
          "Check-in: ",
          "Check-out: ",
          "Guests: ",
          "",
          "Could you please share the current pricing and confirm availability?",
          "Thank you.",
        ].join("\n");

  return buildWhatsAppURL(message);
}
