import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Star } from "lucide-react";

const reviews = [
  { text: "The vibe here is unmatched in Durgapur. The truffle pasta is to die for, and the coffee is always on point. A must-visit!", author: "Priya S.", source: "Google" },
  { text: "Finally, a place that feels like a premium city cafe right here in town. The momos are incredible and the lighting is perfect for pictures.", author: "Rahul M.", source: "Zomato" },
  { text: "My go-to spot for late afternoon coffee and work. The staff is warm, and the aesthetics make it my absolute favorite.", author: "Ananya D.", source: "Google" },
  { text: "Best burgers in the city, hands down. The dark, cozy aesthetic combined with top-tier food makes it addictive.", author: "Souvik B.", source: "Zomato" },
];

export function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const scrollEl = scrollRef.current;
    if (!el || !scrollEl) return;

    gsap.to(scrollEl, {
      x: () => -(scrollEl.scrollWidth - window.innerWidth + 48),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-espresso relative z-20 overflow-hidden">
      <div className="px-4 sm:px-6 md:px-12 mb-10 md:mb-16 max-w-7xl mx-auto">
        <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-cream text-center md:text-left">Word on the Street</h2>
      </div>

      <div className="flex pl-4 sm:pl-6 md:pl-12">
        <div ref={scrollRef} className="flex gap-4 sm:gap-6 w-max pr-4 sm:pr-6 md:pr-12">
          {reviews.map((r, i) => (
            <div key={i} className="w-[280px] sm:w-[320px] md:w-[400px] p-6 md:p-8 glassmorphism flex flex-col justify-between shrink-0 hover:bg-white/5 transition-colors">
              <div>
                <div className="flex gap-1 mb-4 md:mb-6 text-mocha text-sm md:text-base">
                  ★ ★ ★ ★ ★
                </div>
                <p className="font-serif italic text-cream/90 text-[13px] md:text-[15px] leading-relaxed mb-6 md:mb-8 text-balance">"{r.text}"</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 md:pt-6 border-t border-white/10">
                <span className="micro-label !text-[8px] md:!text-[9px] text-cream/60">— {r.author}, {r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
