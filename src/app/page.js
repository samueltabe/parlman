import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SpiritAnnouncement from "../components/SpiritAnnouncement";
import Author from "../components/Author";
import BookSection from "../components/BookSection";
import Testimonials from "../components/Testimonials";
import OrderCta from "../components/OrderCta";
import Footer from "../components/Footer";
import RevealObserver from "../components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <SpiritAnnouncement />
        <Author />
        <BookSection />
        <Testimonials />
        <OrderCta />
      </main>
      <Footer />
    </>
  );
}
