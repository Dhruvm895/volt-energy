import Navigation from "./components/layout/Navigation";
import HeroSection from "./components/sections/Hero";
import ParallaxSection from "./components/sections/Parallax";
import ProductShowcase from "./components/sections/Products";
import FeaturesSection from "./components/sections/Testimonials";
import CTASection from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ParallaxSection />
      <ProductShowcase />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  );
}
