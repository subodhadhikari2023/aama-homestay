import { homestay } from "@/lib/content";

export default function Reviews() {
  return (
    <section className="bg-cloud px-5 py-12">
      <p className="text-pine text-xs font-semibold uppercase tracking-widest mb-2">
        Guest reviews
      </p>
      <div className="flex items-baseline gap-3 mb-8">
        <span className="font-display text-bark text-3xl">4.7★</span>
        <span className="text-bark/50 text-sm">from 352+ reviews</span>
      </div>

      <div className="space-y-4">
        {homestay.reviews.map((review, i) => (
          <div key={i} className="border border-mist-dark rounded-2xl p-5">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: review.stars }).map((_, s) => (
                <span key={s} className="text-dawn text-sm">★</span>
              ))}
            </div>
            <p className="text-bark text-sm leading-relaxed mb-3 italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <span className="text-bark/60 text-xs font-medium">{review.author}</span>
              <span className="text-bark/30 text-xs">{review.platform}</span>
            </div>
          </div>
        ))}
      </div>

      <a
        href={homestay.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center gap-2 text-pine text-sm font-medium border border-pine/20 rounded-xl py-3 active:bg-pine/5 transition-colors"
      >
        Read all 352 reviews on Google Maps →
      </a>
    </section>
  );
}
