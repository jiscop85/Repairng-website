import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <Services />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
