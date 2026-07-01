import { homestay } from "@/lib/content";

export default function Services() {
  return (
    <section className="bg-pine px-5 py-12">
      <p className="text-pine-light text-xs font-semibold uppercase tracking-widest mb-2">
        What&apos;s included
      </p>
      <h2 className="font-display text-white text-3xl leading-snug mb-2">
        More than a room
      </h2>
      <p className="text-white/60 text-sm mb-8 leading-relaxed">
        These extras are only available when you book directly with Bikash — you won&apos;t find them listed anywhere else.
      </p>

      <div className="grid grid-cols-2 gap-3">
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
    </section>
  );
}
