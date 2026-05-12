import { useEffect, useRef } from "react";
import gsap from "gsap";

const dishes = [
  {
    name: "Truffle Mushroom Pasta",
    desc: "Hand-tossed fettuccine in a rich earthy truffle cream sauce with wild mushrooms and parmesan shavings.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=2070&auto=format&fit=crop",
    price: "₹349",
    className: "md:col-span-7 md:row-span-2 min-h-[120px] md:min-h-[400px]"
  },
  {
    name: "Pan-Fried Momos",
    desc: "Crispy bottomed, juicy chicken momos tossed in a fiery robust chili garlic sauce.",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=2070&auto=format&fit=crop",
    price: "₹189",
    className: "md:col-span-5 md:row-span-1 min-h-[120px] md:min-h-[300px]"
  },
  {
    name: "Classic Smash Burger",
    desc: "Double smashed tenderloin patties, caramelized onions, melted cheddar.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop",
    price: "₹299",
    className: "md:col-span-5 md:row-span-1 min-h-[120px] md:min-h-[300px]"
  },
  {
    name: "Artisanal Pour Over",
    desc: "Single-origin Ethiopian beans brewed precisely for a clean, fruit-forward cup.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    price: "₹249",
    className: "md:col-span-12 md:row-span-1 min-h-[120px] md:min-h-[350px]"
  }
];

export function SignatureDishes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    itemsRef.current.forEach((item, i) => {
      if(!item) return;
      gsap.fromTo(item, 
        { opacity: 0, y: 60 },
        {
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-espresso relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="micro-label block mb-3 md:mb-4">Chef's Selection</span>
          <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-cream">Signature Dishes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {dishes.map((dish, i) => (
            <div 
              key={dish.name}
              ref={(el) => (itemsRef.current[i] = el)}
              className={`group relative rounded-2xl md:rounded-3xl overflow-hidden glassmorphism flex flex-row md:block p-2 md:p-0 ${dish.className} md:h-full`}
            >
               <div className="w-[100px] sm:w-[140px] md:w-full min-h-[100px] sm:min-h-[120px] md:h-full relative md:absolute md:inset-0 bg-espresso z-0 shrink-0 rounded-xl md:rounded-none overflow-hidden">
                 <img 
                   src={dish.image} 
                   alt={dish.name}
                   className="w-full h-full object-cover transform md:scale-105 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                 />
               </div>
               
               {/* Cinematic gradient overlays for depth (desktop only) */}
               <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-70"></div>
               <div className="hidden md:block absolute inset-0 bg-noise opacity-[0.7] mix-blend-overlay z-10 pointer-events-none"></div>

               <div className="relative md:absolute md:bottom-0 md:left-0 w-full p-4 sm:p-5 md:p-8 lg:p-10 z-20 flex flex-col justify-center md:justify-end h-full">
                 <div className="transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-center md:justify-end h-full">
                   <div className="flex flex-col sm:flex-row md:items-end justify-between gap-1 sm:gap-2 mb-2 md:mb-3">
                     <h3 className="editorial-title text-[22px] sm:text-2xl md:text-3xl lg:text-5xl text-cream">{dish.name}</h3>
                     <div className="flex sm:justify-end"><span className="tag whitespace-nowrap self-start md:mb-2">{dish.price}</span></div>
                   </div>
                   
                   <div className="overflow-hidden">
                     <p className="font-sans text-cream/70 md:text-cream/70 text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-md md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform md:translate-y-4 group-hover:translate-y-0 line-clamp-3 md:line-clamp-none">
                       {dish.desc}
                     </p>
                   </div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
