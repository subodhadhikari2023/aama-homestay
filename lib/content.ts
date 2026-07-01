export const homestay = {
  name: "Aama Homestay",
  location: "Kurseong, West Bengal",
  address: "Sudhapatole, Kurseong, West Bengal 734203",
  tagline: "Your home in the hills",
  description:
    "Nestled in Kurseong with mountain and river views, Aama Homestay offers warm hospitality, home-cooked Nepali meals, and a genuine hill experience.",

  phone: "+91 95601 28096",
  whatsappNumber: "919560128096",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",

  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.0!2d88.2774777!3d26.8869813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AChIJrTIZpogx5DkRRKiqmGX-Fto!2sAama+Homestay+Kurseong!5e0!3m2!1sen!2sin",
  googleMapsUrl:
    "https://www.google.com/maps/search/Aama+Homestay+Kurseong/@26.88685,88.277344,17z",

  stats: [
    { value: "4.7★", label: "Google Rating" },
    { value: "352+", label: "Reviews" },
    { value: "4,800ft", label: "Altitude" },
  ],

  rooms: [
    {
      id: "suite",
      name: "Suite Room",
      description:
        "Our most spacious room with a private bathtub, mountain-facing balcony, and stunning Kanchenjunga views on clear mornings.",
      directPrice: 2200 as number | null,
      capacity: "2 guests",
      amenities: [
        "Private bathtub",
        "Balcony",
        "Mountain view",
        "TV",
        "Free WiFi",
        "Electric kettle",
        "Bathrobes & slippers",
      ],
    },
    {
      id: "family",
      name: "Family Room",
      description:
        "Large room with kitchen access, terrace with river and lake views. Ideal for families. Accommodates up to 6 guests comfortably.",
      directPrice: 1800 as number | null,
      capacity: "Up to 6 guests",
      amenities: [
        "Kitchen access",
        "Terrace",
        "Lake & river view",
        "Free WiFi",
        "Baby safety gate",
        "Dressing room",
      ],
    },
    {
      id: "deluxe",
      name: "Deluxe Room",
      description:
        "Comfortable double room with a private bathroom, garden views, and all essential amenities for a peaceful hill stay.",
      directPrice: 1500 as number | null,
      capacity: "2 guests",
      amenities: [
        "Private bathroom",
        "Garden view",
        "Free WiFi",
        "Heater",
        "Towels & linen",
      ],
    },
  ],

  services: [
    { icon: "🚗", name: "Airport Taxi", detail: "Bagdogra ↔ Kurseong, on request" },
    { icon: "🗺️", name: "Day Trip Guide", detail: "Eagle's Crag, Makaibari, Dowhill" },
    { icon: "🍳", name: "Home-cooked Meals", detail: "Breakfast daily · Dinner on request" },
    { icon: "🔥", name: "Outdoor Fireplace", detail: "Evening bonfire by request" },
    { icon: "🎮", name: "Games Room", detail: "Available for all guests" },
    { icon: "🐾", name: "Pet Friendly", detail: "Pets welcome, no extra charge" },
    { icon: "🅿️", name: "Free Parking", detail: "Private parking on premises" },
    { icon: "🛒", name: "Mini Market", detail: "Basic supplies available on-site" },
  ],

  reviews: [
    {
      text: "The breathtaking hill views from the balcony — absolutely stunning and soul-soothing. Highly recommended.",
      author: "Priya R.",
      platform: "Google",
      stars: 5,
    },
    {
      text: "Bikash bhai went out of his way for us — even arranged pizza after 8pm when nothing was available nearby. Hospitality at its finest.",
      author: "Rahul M.",
      platform: "MakeMyTrip",
      stars: 5,
    },
    {
      text: "Very good location, clean rooms, strong WiFi. Host and family are very humble and tried to help in every possible way.",
      author: "Eva K.",
      platform: "Booking.com",
      stars: 5,
    },
  ],

  genericWhatsappMessage: [
    "Hi Bikash bhai,",
    "",
    "I'd like to book a room at Aama Homestay.",
    "",
    "Check-in: ",
    "Check-out: ",
    "Guests: ",
    "",
    "Could you please share availability and pricing?",
    "Thank you.",
  ].join("\n"),
};

export type Room = (typeof homestay.rooms)[number];
export type Service = (typeof homestay.services)[number];
export type Review = (typeof homestay.reviews)[number];
