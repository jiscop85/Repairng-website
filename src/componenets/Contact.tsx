import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.", {
      duration: 5000,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            تماس با ما
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            همین حالا با ما تماس بگیرید و مشاوره رایگان دریافت کنید
          </p>
        </div>

 <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card border border-border/50 hover:border-primary/50 transition-smooth">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">شماره تماس</h3>
                <a
                  href="tel:09122448523"
                  className="text-lg text-muted-foreground hover:text-primary transition-smooth block mb-1"
                  dir="ltr"
                >
                  09122448523
                </a>
                <a
                  href="tel:09912326046"
                  className="text-lg text-muted-foreground hover:text-primary transition-smooth block"
                  dir="ltr"
                >
                  09912326046
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card border border-border/50 hover:border-primary/50 transition-smooth">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">ایمیل</h3>
                <a
                  href="mailto:info@nemagostar.com"
                  className="text-lg text-muted-foreground hover:text-primary transition-smooth"
                  dir="ltr"
                >
                  info@nemagostar.com
                </a>
              </div>
            </div>

 <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-card border border-border/50 hover:border-primary/50 transition-smooth">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">آدرس دفتر</h3>
                <p className="text-lg text-muted-foreground">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                نام و نام خانوادگی
              </label>
              <Input
                id="name"
                type="text"
                placeholder="نام خود را وارد کنید"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="text-right"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                ایمیل
              </label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                dir="ltr"
                className="text-left"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                پیام شما
              </label>
              <Textarea
                id="message"
                placeholder="پیام خود را بنویسید..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="text-right"
              />
            </div>

            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground shadow-elegant hover:scale-105 transition-smooth"
              size="lg"
            >
              <Send className="ml-2 w-5 h-5" />
              ارسال پیام
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
