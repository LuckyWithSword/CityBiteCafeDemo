import { Hero } from "../components/Hero";
import { Categories } from "../components/Categories";
import { About } from "../components/About";
import { SignatureDishes } from "../components/SignatureDishes";
import { Ambience } from "../components/Ambience";
import { Reviews } from "../components/Reviews";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <main className="relative z-10 w-full overflow-hidden">
      <Hero />
      <Categories />
      <About />
      <SignatureDishes />
      <Ambience />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
