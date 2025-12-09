import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const serviceDetails = {
  "roofing": {
    title: "اجرای انواع سقف شیبدار",
    description: "اجرای حرفه‌ای انواع سقف شیبدار، کاذب، ویلایی، صنعتی و دکوری با بهترین متریال و تیم متخصص",
    features: [
      "اجرای سقف شیبدار با انواع ورق و پوشش",
      "سقف‌های کاذب مدرن و دکوراتیو",
      "سقف‌های ویلایی با طراحی منحصر به فرد",
      "سقف‌های صنعتی و سوله‌ای",
      "طراحی و اجرای سقف‌های دکوری",
      "عایق‌کاری کامل حرارتی و صوتی",
      "نصب ناودان و آبرو",
      "ضمانت کتبی اجرا و مصالح",
    ],
  },
  "sandwich-panel": {
    title: "ساندویچ پانل و دیوارهای کاذب",
    description: "اجرای ساندویچ پانل دیواری و سقفی، دیوارهای کاذب و پارتیشن‌بندی با استانداردهای روز",
    features: [
      "ساندویچ پانل دیواری با انواع رویه",
      "ساندویچ پانل سقفی با عایق حرارتی",
      "دیوارهای کاذب و پارتیشن اداری",
      "پارتیشن‌بندی صنعتی و مسکونی",
      "نصب سریع و بدون نیاز به ساخت و ساز سنگین",
      "عایق صوتی و حرارتی عالی",
      "تنوع رنگ و طرح",
      "مقاومت در برابر آتش و رطوبت",
    ],
  },
  "gazebo": {
    title: "ساخت آلاچیق مدرن و سنتی",
    description: "طراحی و ساخت آلاچیق‌های چوبی، فلزی، مدرن و سنتی با طراحی‌های منحصر به فرد و ماندگار",
    features: [
      "آلاچیق چوبی سنتی با طراحی اصیل",
      "آلاچیق‌های مدرن فلزی و ترکیبی",
      "طراحی سفارشی بر اساس سلیقه شما",
      "استفاده از چوب‌های مرغوب و عایق‌کاری شده",
      "سقف‌های شیروانی با پوشش مقاوم",
      "رنگ‌آمیزی و محافظت در برابر آب و هوا",
      "نصب کامل با تجهیزات جانبی",
      "ضمانت کیفیت و دوام",
    ],
  },
  "roof-decoration": {
    title: "زیبا‌سازی دور سقف‌های شیروانی",
    description: "زیبا‌سازی و نماسازی دور سقف‌های شیروانی و سوله با جدیدترین متدها و طراحی‌های زیبا",
    features: [
      "نماسازی لبه سقف‌های شیروانی",
      "زیبا‌سازی دور سوله‌ها",
      "نصب ورق‌های دکوراتیو",
      "آبرو و ناودان‌های مدرن",
      "رنگ‌بندی و طراحی سفارشی",
      "مقاوم در برابر شرایط جوی",
      "هماهنگی با نمای ساختمان",
      "اجرای سریع و تمیز",
    ],
  },
  "modern-sheets": {
    title: "ورق‌های مدرن و دکوراتیو",
    description: "اجرا و فروش ورق‌های مدرن شامل طرح سفال مدرن، استندینگ و سایر پوشش‌های نوین",
    features: [
      "ورق‌های طرح سفال مدرن با ظاهر زیبا",
      "ورق‌های استندینگ با نصب سریع",
      "ورق‌های دکوراتیو با طرح‌های متنوع",
      "مقاومت بالا در برابر زنگ‌زدگی",
      "عایق حرارتی مناسب",
      "سبک و قابل اجرا روی اسکلت سبک",
      "تنوع رنگی فراوان",
      "قیمت مناسب و کیفیت بالا",
    ],
  },
  "prefab-villa": {
    title: "ویلاهای سبک و کانکس",
    description: "طراحی و ساخت ویلاهای سبک و کانکس با انواع ورق‌های ساندویچ پانل و دکوراتیو",
    features: [
      "ویلاهای سبک با اسکلت فلزی",
      "کانکس‌های مسکونی و اداری",
      "پوشش با ساندویچ پانل",
      "ورق‌های دکوراتیو با طرح‌های مدرن",
      "ساخت سریع و قابل جابجایی",
      "عایق‌کاری کامل",
      "طراحی داخلی مدرن",
      "هزینه مقرون به صرفه",
    ],
  },
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = slug ? serviceDetails[slug as keyof typeof serviceDetails] : null;

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">سرویس یافت نشد</h1>
            <p className="text-muted-foreground">متأسفانه این سرویس موجود نیست.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed animate-fade-in" style={{ animationDelay: "100ms" }}>
              {service.description}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">
                  ویژگی‌ها و خدمات
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              برای دریافت مشاوره و سفارش با ما تماس بگیرید
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

export default ServiceDetailPage;
