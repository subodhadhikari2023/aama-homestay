import { homestay } from "@/lib/content";

export default function Services() {
  return (
    <section className="bg-pine py-12">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10">
      <p className="text-pine-light text-xs font-semibold uppercase tracking-widest mb-2">
        What&apos;s included
      </p>
      <h2 className="font-display text-white text-3xl leading-snug mb-2 md:text-4xl">
        More than a room
      </h2>
      <p className="text-white/60 text-sm mb-8 leading-relaxed md:max-w-xl">
        These extras are only available when you book directly with Bikash — you won&apos;t find them listed anywhere else.
      </p>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {homestay.services.map((service) => (
          <div
            key={service.name}
            className="bg-white/10 border border-white/10 rounded-xl p-4"
          >
            <span className="text-2xl block mb-2">{service.icon}</span>
            <div className="font-semibold text-white text-sm mb-0.5">
              {service.name}
            </div>
            <div className="text-white/50 text-xs leading-snug">
              {service.detail}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
