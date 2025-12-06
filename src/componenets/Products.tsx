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

const Products = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            محصولات ما
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            فروش انواع مصالح ساختمانی و شیروانی با بهترین کیفیت و قیمت
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {product.description}
                </p>
                <Button
                  onClick={() => navigate('/products')}
                  className="w-full"
                  variant="outline"
                >
                  مشاهده محصولات
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
