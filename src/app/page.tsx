import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Notes } from "@/components/notes";
import { Stack } from "@/components/stack";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Process />
      <Notes />
      <Stack />
      <StaggerTestimonials />
      <Booking />
      <Footer />
      
      {/* Floating Call Option */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="#booking" className="flex items-center justify-center w-14 h-14 bg-primary text-background rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
            <span className="material-symbols-outlined">calendar_month</span>
        </a>
      </div>

    </main>
  );
}
