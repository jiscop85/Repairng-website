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
