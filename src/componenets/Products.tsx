import { Package, Hammer, Box, Layers, Grid3x3, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const products = [
  {
    icon: Hammer,
    title: "انواع مصالح ساختمانی",
    description: "فروش انواع مصالح ساختمانی با بالاترین کیفیت و قیمت مناسب",
  },
  {
    icon: Layers,
    title: "انواع مصالح شیروانی",
    description: "ورق‌های شیروانی، عایق و سایر مصالح مورد نیاز سقف‌های شیبدار",
  },
  {
    icon: Box,
    title: "آبرو جعبه‌ای",
    description: "آبرو جعبه‌ای با کیفیت بالا برای زیبایی و محافظت سقف",
  },
  {
    icon: Grid3x3,
    title: "ورق‌های تایل رایکا",
    description: "ورق‌های تایل رایکا با طراحی مدرن و دوام بالا",
  },
  {
    icon: Package,
    title: "طرح سفال و استندینگ",
    description: "ورق‌های طرح سفال مدرن و استندینگ با ظاهر زیبا",
  },
  {
    icon: Shield,
    title: "توری مرغی و پشم شیشه",
    description: "توری مرغی، پشم شیشه و سایر مصالح عایق‌کاری",
  },
];
