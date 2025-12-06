import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">ن</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              نماگستر
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              صفحه اصلی
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              خدمات
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              درباره ما
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              تماس با ما
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-smooth"
            >
              دریافت مشاوره رایگان
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-right text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                صفحه اصلی
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-right text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                خدمات
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-right text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                درباره ما
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-right text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                تماس با ما
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="gradient-primary text-primary-foreground"
              >
                دریافت مشاوره رایگان
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
