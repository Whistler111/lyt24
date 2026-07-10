import { PARTNERS } from "@/lib/lyt24Data";

export default function PartnerCarousel() {
  const items = [...PARTNERS, ...PARTNERS];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-obsidian to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-obsidian to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12">
        {items.map((partner, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap font-heading text-lg font-semibold text-white/30 transition-colors hover:text-white/60"
          >
            <span className="h-2 w-2 rounded-full bg-aqua/40" />
            {partner}
          </div>
        ))}
      </div>
    </div>
  );
}
