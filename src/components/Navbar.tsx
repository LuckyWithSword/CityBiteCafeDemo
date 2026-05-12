import { useEffect, useRef, useState } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 50) {
        navRef.current.classList.add("glassmorphism", "py-4");
        navRef.current.classList.remove("py-6", "bg-transparent");
      } else {
        navRef.current.classList.add("py-6", "bg-transparent");
        navRef.current.classList.remove("glassmorphism", "py-4");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (isOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Full Menu", href: "/menu" },
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Ambience", href: isHome ? "#ambience" : "/#ambience" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" }
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6 transition-all duration-300"
      >
        <Link to="/" className="flex items-center gap-2 z-50 mix-blend-difference">
          <Coffee className="w-5 h-5 md:w-6 md:h-6 text-cream" />
          <span className="font-serif text-lg md:text-xl tracking-wide font-medium text-cream">
            City Bite Cafe
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs font-sans tracking-widest uppercase text-cream mix-blend-difference">
          {navItems.map((item) => (
            item.href.startsWith("#") ? (
              <a key={item.label} href={item.href} className="hover:text-mocha transition-colors">{item.label}</a>
            ) : (
              <Link key={item.label} to={item.href} className="hover:text-mocha transition-colors">{item.label}</Link>
            )
          ))}
        </div>

        <div className="md:hidden z-50 mix-blend-difference">
          <button onClick={() => setIsOpen(!isOpen)} className="text-cream p-1 sm:p-2 flex items-center justify-center">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 bg-espresso/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 sm:gap-8 opacity-0 pointer-events-none px-4"
      >
        {navItems.map((item) => (
          item.href.startsWith("#") ? (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="editorial-title text-5xl sm:text-6xl text-cream hover:text-mocha transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className="editorial-title text-5xl sm:text-6xl text-cream hover:text-mocha transition-colors"
            >
              {item.label}
            </Link>
          )
        ))}
        <div className="absolute bottom-8 sm:bottom-12 flex gap-3 text-mocha/50 font-sans tracking-widest text-[9px] sm:text-[10px] uppercase">
          <span>Durgapur</span>
          <span>&bull;</span>
          <span>Cafe & Lounge</span>
        </div>
      </div>
    </>
  );
}
