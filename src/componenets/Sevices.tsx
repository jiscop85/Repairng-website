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

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            خدمات ما
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نماگستر با بیش از ۱۰ سال تجربه، آماده ارائه بهترین خدمات در حوزه ساخت و ساز است
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/50 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/services/${service.slug}`)}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/services/${service.slug}`);
                  }}
                >
                  اطلاعات بیشتر
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
