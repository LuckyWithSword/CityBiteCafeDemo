import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 md:px-12 bg-charcoal relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-32">
        
        <div>
          <span className="micro-label block mb-3 md:mb-4">Visit Us</span>
          <h2 className="editorial-title text-4xl sm:text-5xl md:text-6xl text-cream mb-10 md:mb-12">Drop by for a Bite.</h2>
          
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-olive shrink-0 mt-1" />
              <div>
                <h4 className="micro-label mb-1.5 md:mb-2">Location</h4>
                <p className="text-cream/70 font-sans text-[13px] md:text-sm leading-relaxed">
                  City Center, Phase 2<br />
                  Durgapur, West Bengal 713216
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-olive shrink-0 mt-1" />
              <div>
                <h4 className="micro-label mb-1.5 md:mb-2">Hours</h4>
                <p className="text-cream/70 font-sans text-[13px] md:text-sm leading-relaxed">
                  Mon - Sun: 11:00 AM - 10:30 PM<br />
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-olive shrink-0 mt-1" />
              <div>
                <h4 className="micro-label mb-1.5 md:mb-2">Social / Contact</h4>
                <p className="text-cream/70 font-sans text-[13px] md:text-sm leading-relaxed whitespace-pre-wrap break-all sm:break-normal">
                  <a href="https://www.instagram.com/citybitecafe_dgp/" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">@citybitecafe_dgp</a><br />
                  <a href="mailto:hello@citybitecafe.in" className="hover:text-cream transition-colors">hello@citybitecafe.in</a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-14 pr-0 lg:pr-32">
            <div className="glassmorphism p-6 sm:p-8 w-full flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden rounded-[2rem]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cream/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
               
               <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-6 w-full relative z-10">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
                    <a href="https://www.instagram.com/citybitecafe_dgp/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 border border-white/20 rounded-full text-cream hover:bg-olive hover:border-olive transition-all duration-300 flex items-center justify-center shrink-0 hover:scale-105 active:scale-95 shadow-sm" aria-label="Follow us on Instagram">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                    <div className="w-full sm:w-px h-px sm:h-12 bg-white/10 hidden sm:block"></div>
                    <div className="text-center sm:text-left w-full sm:w-auto">
                      <div className="editorial-title text-2xl sm:text-3xl lg:text-4xl text-cream mb-1">Order Online</div>
                      <div className="text-[10px] sm:text-[11px] text-cream/50 uppercase tracking-[0.2em] font-sans font-semibold">Delivery & Pickup</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end shrink-0">
                    <a href="https://www.swiggy.com/city/durgapur" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden flex items-center justify-center px-6 sm:px-8 py-0 h-12 sm:h-14 bg-[#fc8019] text-white rounded-full font-sans font-extrabold uppercase tracking-widest text-xs sm:text-sm lg:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(252,128,25,0.25)] hover:shadow-[0_0_30px_rgba(252,128,25,0.4)] whitespace-nowrap flex-1 sm:flex-none">
                      <span className="relative z-10 drop-shadow-sm">Swiggy</span>
                      <svg className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-70 transition-opacity duration-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,100 C20,0 50,100 100,0 L100,100 Z" fill="rgba(255,255,255,0.15)" />
                        <path d="M0,100 C15,30 40,90 100,20 L100,100 Z" fill="rgba(255,255,255,0.1)" />
                      </svg>
                    </a>
                    <a href="https://www.zomato.com/durgapur" target="_blank" rel="noopener noreferrer" className="relative group overflow-hidden flex items-center justify-center px-6 sm:px-8 py-0 h-12 sm:h-14 bg-[#cb202d] text-white rounded-full font-sans font-extrabold uppercase tracking-widest text-xs sm:text-sm lg:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(203,32,45,0.25)] hover:shadow-[0_0_30px_rgba(203,32,45,0.4)] whitespace-nowrap flex-1 sm:flex-none">
                      <span className="relative z-10 drop-shadow-sm">Zomato</span>
                      <svg className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-70 transition-opacity duration-500" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,100 C20,0 50,100 100,0 L100,100 Z" fill="rgba(255,255,255,0.15)" />
                        <path d="M0,100 C15,30 40,90 100,20 L100,100 Z" fill="rgba(255,255,255,0.1)" />
                      </svg>
                    </a>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="h-[300px] sm:h-[400px] lg:h-full lg:min-h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden relative group z-0">
          <MapContainer 
            center={[23.5447, 87.2981]} 
            zoom={15} 
            scrollWheelZoom={false} 
            className="absolute inset-0 h-full w-full z-0"
            style={{ filter: "brightness(0.9) contrast(1.1)" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <Marker position={[23.5447, 87.2981]}>
              <Popup>
                <strong>City Bite Cafe</strong><br />
                City Center, Phase 2<br />
                Durgapur, WB
              </Popup>
            </Marker>
          </MapContainer>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[400] pointer-events-none">
            <span className="tag border border-white/10 backdrop-blur-md bg-black/50 text-cream shadow-xl">Get Directions</span>
          </div>
        </div>

      </div>
    </section>
  );
}
