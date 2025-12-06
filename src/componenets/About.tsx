import { Award, Users, CheckCircle2, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "مشتری راضی" },
  { icon: CheckCircle2, value: "800+", label: "پروژه موفق" },
  { icon: Award, value: "10+", label: "سال تجربه" },
  { icon: TrendingUp, value: "95%", label: "رضایت مشتریان" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              درباره نماگستر
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              نماگستر با بیش از یک دهه تجربه در صنعت ساخت و ساز، یکی از پیشگامان ارائه خدمات
              معماری، ساخت آلاچیق، دیزاین داخلی و قیرگونی در سراسر کشور است.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              تیم ما متشکل از متخصصان مجرب و خلاق است که با استفاده از جدیدترین تکنولوژی‌های
              روز دنیا، پروژه‌های شما را با بالاترین کیفیت و در کوتاه‌ترین زمان ممکن اجرا می‌کنند.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                <span className="font-medium">کیفیت تضمین شده</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                <span className="font-medium">قیمت مناسب</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                <span className="font-medium">پشتیبانی ۲۴ساعته</span>
              </div>
            </div>
          </div>

  {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-xl p-6 text-center hover:shadow-card transition-smooth border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
