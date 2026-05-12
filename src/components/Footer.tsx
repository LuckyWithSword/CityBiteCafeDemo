import { Coffee, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-espresso pt-16 md:pt-20 pb-6 md:pb-8 px-4 sm:px-6 md:px-12 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center mb-10 md:mb-14 text-center">
          <Coffee className="w-8 h-8 md:w-10 md:h-10 text-olive mb-4 md:mb-6" />
          <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-cream mb-3 md:mb-4">City Bite Cafe</h2>
          <p className="micro-label">Durgapur's Native Social Vibe</p>
          
          <div className="mt-8 flex gap-4">
             <a href="https://www.instagram.com/citybitecafe_dgp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 rounded-full text-cream/50 hover:text-cream hover:bg-olive hover:border-olive transition-all flex items-center justify-center">
               <Instagram className="w-4 h-4" />
             </a>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-6 md:pt-8 border-t border-white/10 text-cream/50 font-sans text-xs gap-4 md:gap-0">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} City Bite Cafe. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors tracking-wide uppercase text-[10px] sm:text-xs">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors tracking-wide uppercase text-[10px] sm:text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
