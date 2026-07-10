import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Timeline from "@/components/Timeline";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Services />
      <WhyChooseUs />
      <Timeline />
      <TechStack />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
