import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 10,
        ease: "none",
        repeat: -1,
        yoyo: true
      });
    }

    tl.fromTo(headlineRef.current?.children || [], 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.5 }
    )
    .fromTo(subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    );

    // Parallax effect on scroll
    gsap.to(imageRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="/img/hero.png" 
          alt="Cinematic Cafe Interior" 
          className="w-full h-[120%] object-cover -top-[10%] relative"
        />
        {/* Dark environmental gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-espresso/80 to-espresso"></div>
        <div className="absolute inset-0 bg-black/30 w-full h-full mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-12 sm:mt-0">
        <span className="micro-label text-cream/80 mb-4 sm:mb-6">Est. 2024 / Durgapur</span>
        <h1 
          ref={headlineRef} 
          className="editorial-title text-5xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[120px] text-cream mb-4 sm:mb-6 overflow-hidden px-2"
        >
          <span className="block">Bites. Coffee.</span>
          <span className="block">Conversations.</span>
        </h1>
        
        <p ref={subRef} className="font-sans text-cream/80 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm font-light mb-10 sm:mb-12 text-balance px-4">
          City Bite is more than a café; it's the urban heartbeat where flavor meets the rhythm of the street.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto sm:w-auto px-4 sm:px-0">
          <Link to="/menu" className="group relative px-6 sm:px-8 py-3.5 sm:py-3 bg-cream text-espresso rounded-[30px] font-sans font-bold uppercase text-[10px] sm:text-xs overflow-hidden flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center transition-transform hover:scale-105 active:scale-95 duration-300">
            <span className="relative z-10">View Menu</span>
            <div className="absolute inset-0 bg-mocha origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          </Link>
          
          <a href="#contact" className="px-6 sm:px-8 py-3.5 sm:py-3 bg-transparent border border-white/40 rounded-[30px] text-cream font-sans font-bold uppercase text-[10px] sm:text-xs hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center flex">
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-10 opacity-70">
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/70">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cream/70 to-transparent"></div>
      </div>
    </section>
  );
}
