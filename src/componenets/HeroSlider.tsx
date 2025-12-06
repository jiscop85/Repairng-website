import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sliderGazebo from "@/assets/slider-gazebo.jpg";
import sliderArchitecture from "@/assets/slider-architecture.jpg";
import sliderInterior from "@/assets/slider-interior.jpg";
import sliderRoofing from "@/assets/slider-roofing.jpg";

const slides = [
  {
    image: sliderGazebo,
    title: "ساخت آلاچیق‌های زیبا و منحصر به فرد",
    subtitle: "طراحی و اجرای آلاچیق با بهترین کیفیت و ماندگاری",
  },
  {
    image: sliderArchitecture,
    title: "خدمات معماری حرفه‌ای",
    subtitle: "طراحی و نظارت بر پروژه‌های ساختمانی با تیمی مجرب",
  },
  {
    image: sliderInterior,
    title: "دیزاین داخلی مدرن و شیک",
    subtitle: "تبدیل فضای شما به یک اثر هنری",
  },
  {
    image: sliderRoofing,
    title: "قیرگونی و عایق‌کاری حرفه‌ای",
    subtitle: "محافظت بی‌نظیر از سازه با بهترین مواد",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

 return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
                {slide.subtitle}
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-elegant hover:scale-105 transition-smooth animate-scale-in"
              >
                درخواست مشاوره رایگان
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-smooth z-10"
        aria-label="Previous slide"
      >
        <ChevronRight size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-smooth z-10"
        aria-label="Next slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
