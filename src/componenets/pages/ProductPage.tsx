import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Package, Hammer, Box, Layers, Grid3x3, Shield, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Hammer,
    title: "انواع مصالح ساختمانی",
    description: "فروش کامل‌ترین انواع مصالح ساختمانی شامل سیمان، آهن‌آلات، آجر، بلوک، ملات و سایر مصالح با کیفیت درجه یک",
    features: ["سیمان و ملات", "آجر و بلوک", "آهن‌آلات ساختمانی", "مصالح با گارانتی کیفیت"],
  },
  {
    icon: Layers,
    title: "انواع مصالح شیروانی",
    description: "تأمین کامل مصالح سقف‌های شیبدار شامل ورق‌های گالوانیزه، رنگی، ساندویچ پانل و عایق‌های حرارتی و صوتی",
    features: ["ورق‌های گالوانیزه و رنگی", "ساندویچ پانل", "عایق حرارتی و صوتی", "اتصالات و یراق‌آلات"],
  },
  {
    icon: Box,
    title: "آبرو جعبه‌ای",
    description: "آبرو جعبه‌ای با کیفیت بالا برای زیبایی و محافظت از لبه‌های سقف در برابر آب و رطوبت با رنگ‌بندی متنوع",
    features: ["رنگ‌بندی متنوع", "ضد زنگ و مقاوم", "نصب آسان", "ضمانت کیفیت"],
  },
  {
    icon: Grid3x3,
    title: "ورق‌های تایل رایکا",
    description: "ورق‌های تایل رایکا با طراحی مدرن، دوام بالا و مقاومت در برابر شرایط جوی سخت، مناسب برای انواع سقف",
    features: ["طراحی مدرن", "دوام بالا", "مقاومت در برابر آب و هوا", "نصب سریع"],
  },
  {
    icon: Package,
    title: "طرح سفال و استندینگ",
    description: "ورق‌های طرح سفال مدرن و استندینگ با ظاهر زیبای سفالی و کیفیت ورق فلزی، ترکیبی از زیبایی و دوام",
    features: ["ظاهر سفالی زیبا", "کیفیت ورق فلزی", "سبک و مقاوم", "تنوع رنگی"],
  },
  {
    icon: Shield,
    title: "توری مرغی و پشم شیشه",
    description: "توری مرغی با کیفیت بالا، پشم شیشه و سایر مصالح عایق‌کاری حرارتی و صوتی برای ساختمان‌های مسکونی و تجاری",
    features: ["توری مرغی گالوانیزه", "پشم شیشه", "عایق‌های حرارتی", "عایق‌های صوتی"],
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              محصولات نماگستر
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "100ms" }}>
              فروش انواع مصالح ساختمانی و شیروانی با بهترین کیفیت و قیمت مناسب
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-elegant transition-smooth border-border/50 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              برای خرید و مشاوره با ما تماس بگیرید
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:09122448523" className="text-white">09122448523</a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:09912326046">09912326046</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
