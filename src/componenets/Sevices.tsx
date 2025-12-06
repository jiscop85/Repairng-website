import { Building2, Home, Layers, Droplet, Hammer, Trees } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Building2,
    title: "اجرای انواع سقف شیبدار",
    description: "اجرای سقف شیبدار، کاذب، ویلایی، صنعتی و دکوری با بهترین کیفیت",
    slug: "roofing",
  },
  {
    icon: Layers,
    title: "ساندویچ پانل و دیوارهای کاذب",
    description: "ساندویچ پانل (دیواری و سقفی) & اجرای دیوارهای کاذب و پارتیشن‌بندی",
    slug: "sandwich-panel",
  },
  {
    icon: Home,
    title: "آلاچیق (مدرن و سنتی)",
    description: "طراحی و ساخت آلاچیق‌های چوبی و فلزی با طراحی‌های منحصر به فرد",
    slug: "gazebo",
  },
  {
    icon: Droplet,
    title: "زیبا‌سازی دور سقف‌ها",
    description: "زیبا‌سازی دور سقف‌های شیروانی و سوله (نما و لبه)",
    slug: "roof-decoration",
  },
  {
    icon: Hammer,
    title: "ورق‌های مدرن",
    description: "ورق‌های مدرن (طرح سفال مدرن و استندینگ)",
    slug: "modern-sheets",
  },
  {
    icon: Trees,
    title: "ویلاهای سبک و کانکس",
    description: "ویلاهای سبک و کانکس با انواع ورق‌های ساندویچ پانل و دکوراتیو",
    slug: "prefab-villa",
  },
];
