import { useEffect, useRef } from "react";
import { Footer } from "../components/Footer";
import { gsap } from "gsap";

const menuData = [
  {
    category: "Coffee & Espresso",
    items: [
      { name: "Artisanal Pour Over", price: "₹249", desc: "Single-origin Ethiopian beans brewed precisely for a clean, fruit-forward cup." },
      { name: "Cortado", price: "₹189", desc: "Equal parts espresso and steamed milk, served warm." },
      { name: "Iced Sea Salt Caramel Latte", price: "₹269", desc: "Our signature espresso shaken with house-made caramel and a pinch of sea salt." },
      { name: "Vietnamese Cold Brew", price: "₹279", desc: "Slow-steeped cold brew with condensed milk." },
    ]
  },
  {
    category: "Small Plates & Bites",
    items: [
      { name: "Pan-Fried Momos", price: "₹189", desc: "Crispy bottomed, juicy chicken momos tossed in a fiery robust chili garlic sauce." },
      { name: "Truffle Fries", price: "₹229", desc: "Shoestring fries tossed in truffle oil and parmesan dust." },
      { name: "Avocado Sourdough Toast", price: "₹349", desc: "Mashed Hass avocado, cherry tomatoes, and microgreens on toasted sourdough." },
      { name: "Crispy Calamari Rings", price: "₹399", desc: "Lightly battered calamari served with a zesty lemon aioli." },
    ]
  },
  {
    category: "Mains & Bowls",
    items: [
      { name: "Truffle Mushroom Pasta", price: "₹349", desc: "Hand-tossed fettuccine in a rich earthy truffle cream sauce with wild mushrooms and parmesan shavings." },
      { name: "Classic Smash Burger", price: "₹299", desc: "Double smashed tenderloin patties, caramelized onions, melted cheddar." },
      { name: "Teriyaki Chicken Bowl", price: "₹389", desc: "Grilled teriyaki chicken, jasmine rice, edamame, and pickled ginger." },
      { name: "Spicy Arrabbiata Penne", price: "₹329", desc: "Penne pasta in a fiery tomato and basil sauce with black olives and capers." },
    ]
  },
  {
    category: "Desserts & Pastries",
    items: [
      { name: "Basque Cheesecake", price: "₹289", desc: "Caramelized burnt top with a creamy, gooey center." },
      { name: "Dark Chocolate Tart", price: "₹259", desc: "Rich 70% dark chocolate ganache in a crisp butter shell." },
      { name: "Tiramisu Classic", price: "₹319", desc: "Espresso-soaked ladyfingers layered with mascarpone cream." },
    ]
  }
];

export function MenuPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
       gsap.fromTo(".menu-section", 
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
       );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="relative z-10 w-full min-h-screen bg-charcoal pb-0 pt-32 md:pt-40" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 mb-20 md:mb-32 text-center md:text-left">
        <span className="micro-label block mb-4">Complete Selection</span>
        <h1 className="editorial-title text-5xl sm:text-6xl md:text-7xl lg:text-[100px] text-cream">Our Menu</h1>
        <p className="font-sans text-cream/70 text-sm md:text-base max-w-md mt-6 md:mt-8 mx-auto md:mx-0">
          A curated selection of artisanal coffee, gourmet bites, and hearty mains crafted with passion.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 pb-32">
        {menuData.map((section, idx) => (
          <div key={idx} className="menu-section mb-20 md:mb-32 last:mb-0">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="editorial-title text-3xl sm:text-4xl md:text-5xl text-cream shrink-0">{section.category}</h2>
              <div className="h-[1px] w-full bg-white/10 hidden sm:block"></div>
            </div>

            <div className="flex flex-col gap-10 md:gap-12">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
                  <div className="md:flex-1 shrink-0">
                    <div className="flex items-baseline justify-between md:justify-start gap-4 mb-2">
                       <h3 className="font-serif text-xl sm:text-2xl text-cream md:group-hover:text-olive transition-colors">{item.name}</h3>
                       <div className="md:hidden border-b border-dashed border-white/20 flex-1 mx-2"></div>
                       <span className="font-sans text-base sm:text-lg text-cream/90 md:hidden">{item.price}</span>
                    </div>
                    <p className="font-sans text-cream/60 text-xs sm:text-[13px] md:text-sm leading-relaxed max-w-lg md:pr-12">
                      {item.desc}
                    </p>
                  </div>
                  <div className="hidden md:flex items-baseline gap-4 w-1/4">
                     <div className="border-b border-dashed border-white/20 flex-1 translate-y-[-8px]"></div>
                     <span className="font-sans text-lg text-cream/90">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
  );
}
