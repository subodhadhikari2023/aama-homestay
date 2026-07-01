import { homestay } from "@/lib/content";
import { roomBookingURL } from "@/lib/whatsapp";

const PLACEHOLDER_LABELS = ["A", "B", "C"];

const PLACEHOLDER_GRADIENTS = [
  "from-pine/25 to-pine/10",
  "from-dawn/20 to-dawn/5",
  "from-bark/20 to-bark/5",
];

const WaIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Rooms() {
  return (
    <section className="bg-mist py-12">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
        <p className="text-pine text-xs font-semibold uppercase tracking-widest mb-2">
          Rooms
        </p>
        <h2 className="font-display text-bark text-3xl leading-snug mb-8 md:text-4xl">
          Choose your room
        </h2>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
          {homestay.rooms.map((room, index) => (
            <div
              key={room.id}
              className="bg-cloud rounded-2xl overflow-hidden border border-mist-dark flex flex-col"
            >
              {/* Placeholder until room interior photos are available */}
              <div
                className={`h-52 bg-gradient-to-br ${PLACEHOLDER_GRADIENTS[index]} flex items-center justify-center shrink-0`}
              >
                <span className="font-display text-8xl font-bold text-bark/10 select-none">
                  {PLACEHOLDER_LABELS[index]}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-display text-bark text-xl">{room.name}</h3>
                  <span className="text-bark/50 text-xs mt-1">{room.capacity}</span>
                </div>

                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-dawn text-2xl font-bold">
                    ₹{room.directPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-bark/40">/night</span>
                </div>

                <p className="text-bark/70 text-sm leading-relaxed mb-4">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {room.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-xs text-pine bg-pine/10 border border-pine/15 rounded-full px-2.5 py-1"
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <a
                  href={roomBookingURL(room.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full bg-pine text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-pine-light active:bg-pine-light transition-colors"
                >
                  <WaIcon />
                  Book {room.name} on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
