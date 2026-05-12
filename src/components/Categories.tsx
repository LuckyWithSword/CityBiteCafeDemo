import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const categories = [
  { name: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop", desc: "Handcrafted perfection." },
  { name: "Pasta", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop", desc: "Rich, creamy, authentic." },
  { name: "Momos", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2070&auto=format&fit=crop", desc: "Steaming hot comfort." },
  { name: "Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop", desc: "Roasted to inspire." },
  { name: "Fast Food", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop", desc: "Craving satisfaction." },
  { name: "Sandwiches", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop", desc: "Fresh & toasted." },
];

export function Categories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let interval: NodeJS.Timeout;

    const startScroll = () => {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        if (!container) return;
        const { scrollLeft, scrollWidth, clientWidth } = container;
        const maxScroll = scrollWidth - clientWidth;
        
        if (scrollLeft >= maxScroll - 10) {
          // If at the end, smoothly scroll back to the start
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll forward by approximately one card width
          const cardWidth = container.querySelector(".group")?.clientWidth || 300;
          const gap = parseInt(window.getComputedStyle(container).gap) || 24;
          container.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
        }
      }, 3500); 
    };

    // Delay start slightly to allow intro animations to finish
    const initialDelay = setTimeout(() => {
      startScroll();
    }, 2000);

    const handleInteractStart = () => clearInterval(interval);
    const handleInteractEnd = () => startScroll();

    container.addEventListener("mouseenter", handleInteractStart);
    container.addEventListener("mouseleave", handleInteractEnd);
    container.addEventListener("touchstart", handleInteractStart, { passive: true });
    container.addEventListener("touchend", handleInteractEnd);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
      container.removeEventListener("mouseenter", handleInteractStart);
      container.removeEventListener("mouseleave", handleInteractEnd);
      container.removeEventListener("touchstart", handleInteractStart);
      container.removeEventListener("touchend", handleInteractEnd);
    };
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-charcoal relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 text-left">
          <div>
            <span className="micro-label block mb-4 md:mb-5">The Social Menu</span>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-6xl lg:text-7xl text-cream mb-0">
              Curated for <br className="hidden sm:block" /> the Urban Palate
            </h2>
          </div>
          <div className="md:pb-2 lg:pb-3">
            <p className="font-sans text-cream/70 text-sm md:text-base max-w-sm leading-relaxed">
              Freshly curated daily ingredients with a focus on urban street-culture aesthetics. Explore our distinctive menu.
            </p>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 sm:gap-6 md:gap-8 pb-8 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 scroll-smooth"
        >
          {categories.map((cat, i) => (
            <div 
              key={cat.name} 
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative h-[300px] sm:h-[350px] md:h-[400px] w-[85vw] sm:w-[45vw] lg:w-[30vw] min-w-[280px] shrink-0 overflow-hidden cursor-pointer rounded-2xl snap-center"
            >
              <div className="absolute inset-0 bg-espresso z-0">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="mb-3"><span className="tag">{cat.name}</span></div>
                <p className="font-sans text-cream/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.desc}</p>
                <div className="w-full h-[1px] bg-white/20 mt-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full w-full bg-olive -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
