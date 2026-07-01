import Image from "next/image";
import { homestay } from "@/lib/content";
import { genericBookingURL } from "@/lib/whatsapp";

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Sunset view from Aama Homestay balcony, Kurseong"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bark/40 via-transparent to-bark/85" />
      </div>

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-between px-5 py-5">
        <span className="font-display text-white text-xl tracking-tight drop-shadow">
          Aama Homestay
        </span>
        <a
          href={`tel:${homestay.phone}`}
          className="text-white/90 text-sm border border-white/40 rounded-full px-3.5 py-1.5 backdrop-blur-sm active:bg-white/10 transition-colors"
        >
          Call us
        </a>
      </div>

      {/* Content pinned to bottom */}
      <div className="relative z-10 mt-auto">
        <div className="max-w-screen-xl mx-auto px-5 pb-28 lg:pb-24 lg:grid lg:grid-cols-2 lg:items-end lg:gap-16">
          {/* Left: headline + CTA */}
          <div>
            <div className="flex gap-6 mb-5">
              {homestay.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-dawn font-semibold text-lg leading-none lg:text-xl">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <h1 className="font-display text-white text-4xl leading-tight tracking-tight mb-2 lg:text-6xl">
              Your home<br />in the hills
            </h1>
            <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-xs lg:text-base lg:max-w-sm">
              {homestay.location} · Book directly with Bikash
            </p>

            <a
              href={genericBookingURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-wa-green text-white font-semibold text-base py-3.5 px-6 rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-transform"
            >
              <WaIcon />
              Book on WhatsApp
            </a>
          </div>

          {/* Right: quick-info card — desktop only */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-xs ml-auto">
              <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
                Quick info
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Check-in</span>
                  <span className="text-white font-medium">{homestay.checkIn}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Check-out</span>
                  <span className="text-white font-medium">{homestay.checkOut}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Rooms from</span>
                  <span className="text-dawn font-semibold">₹1,500 / night</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Payment</span>
                  <span className="text-white font-medium">On arrival</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
