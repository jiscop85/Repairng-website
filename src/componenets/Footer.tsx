import { Instagram, Send, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-xl font-bold text-white">ن</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                نماگستر
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              ارائه‌دهنده خدمات تخصصی ساخت و ساز، معماری و دیزاین داخلی با بالاترین کیفیت
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-card-foreground">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  صفحه اصلی
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  خدمات
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  درباره ما
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  تماس با ما
                </button>
              </li>
            </ul>
          </div>

  {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-card-foreground">اطلاعات تماس</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:09122448523" className="hover:text-primary transition-smooth" dir="ltr">
                  09122448523
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:09912326046" className="hover:text-primary transition-smooth" dir="ltr">
                  09912326046
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-card-foreground">شبکه‌های اجتماعی</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-smooth flex items-center justify-center group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-smooth flex items-center justify-center group"
                  aria-label="Telegram"
                >
                  <Send className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} نماگستر. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
