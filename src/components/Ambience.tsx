import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Ambience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    imagesRef.current.forEach((img, index) => {
      if (!img) return;
      gsap.to(img, {
        yPercent: -15 * (index % 2 === 0 ? 1 : -1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
  }, []);

  return (
    <section id="ambience" ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-charcoal relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="micro-label block mb-3 md:mb-4">The Vibe</span>
          <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-cream">Made for Moments</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 sm:gap-4 md:gap-6 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px]">
          
          {/* Main Hero Shot */}
          <div className="sm:col-span-2 md:col-span-8 row-span-1 md:row-span-2 overflow-hidden relative group rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 w-full h-[120%] -top-[10%] group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out">
              <img 
                ref={(el) => (imagesRef.current[0] = el)}
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop"
                alt="Main Ambience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
          </div>

          {/* Tall Portrait */}
          <div className="sm:col-span-1 md:col-span-4 row-span-1 md:row-span-2 overflow-hidden relative group rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 w-full h-[120%] -top-[10%] group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out">
              <img 
                ref={(el) => (imagesRef.current[1] = el)}
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop"
                alt="Barista at Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-espresso/40 group-hover:bg-espresso/10 transition-colors duration-700 pointer-events-none"></div>
          </div>

          {/* Square/Small */}
          <div className="sm:col-span-1 md:col-span-4 row-span-1 overflow-hidden relative group rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 w-full h-[120%] -top-[10%] group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out">
              <img 
                ref={(el) => (imagesRef.current[2] = el)}
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop"
                alt="Cozy Corner" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-espresso/40 group-hover:bg-espresso/10 transition-colors duration-700 pointer-events-none"></div>
          </div>

          {/* Wide Landscape */}
          <div className="sm:col-span-2 md:col-span-8 row-span-1 overflow-hidden relative group rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 w-full h-[120%] -top-[10%] group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out">
              <img 
                ref={(el) => (imagesRef.current[3] = el)}
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop"
                alt="Cafe Details" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-espresso/60 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
