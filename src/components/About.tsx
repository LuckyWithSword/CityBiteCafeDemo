import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !textRef.current) return;

    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-charcoal relative z-20 flex items-center justify-center overflow-hidden">
      {/* Decorative blurred background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-mocha/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 glassmorphism p-6 sm:p-8 md:p-16 w-full mx-4 sm:mx-0" ref={textRef}>
        <span className="micro-label block mb-6 md:mb-8 text-cream/70">Atmosphere</span>
        <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-cream leading-[1.2] md:leading-[1.2] mb-6 md:mb-8 text-balance mx-auto">
          A cozy social hub in the heart of the city.
        </h2>
        <p className="font-sans text-cream/80 text-[13px] sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed md:leading-relaxed px-2">
          We believe in grainy film, warm lighting, and authentic urban vibes. Whether you're catching up over steaming momos, reading a book with our artisanal coffee, or grabbing a late-night burger with friends, this is your space. Genuine, cozy, and always welcoming.
        </p>

        <div className="mt-10 md:mt-16 inline-flex items-center justify-center gap-3 md:gap-4">
          <div className="w-8 md:w-12 h-[1px] bg-white/20"></div>
          <span className="font-serif italic text-cream text-base md:text-lg">Since 2024</span>
          <div className="w-8 md:w-12 h-[1px] bg-white/20"></div>
        </div>
      </div>
    </section>
  );
}
