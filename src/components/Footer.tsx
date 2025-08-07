import { TreePine, Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#projects", label: "مشاريعنا" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  const services = [
    "تجارة الأخشاب",
    "التصنيع والتركيب",
    "التصميم الداخلي",
    "المشاريع السكنية",
    "المشاريع التجارية",
    "تجهيز المعارض",
  ];

  return (
    <footer className="bg-[#2E2E2E] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <div className="bg-[#8B5E3C] p-2 rounded-lg">
                <TreePine className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">شركة النشامي</h3>
                <p className="text-sm text-gray-400">تجارة وتصنيع الأخشاب</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              شركة رائدة في مجال تجارة وتصنيع الأخشاب والديكورات، نقدم أفضل
              الحلول للمشاريع السكنية والتجارية بجودة عالية وأسعار تنافسية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a
                href="tel:0535572598"
                className="hover:text-[#C49E55] transition-colors duration-300 inline-flex items-center space-x-2 space-x-reverse"
              >
                <Phone className="h-5 w-5" />
                <span>0535572598</span>
              </a>
              <a
                href="mailto:info@nashami-wood.com"
                className="bg-[#8B5E3C] hover:bg-[#C49E55] p-2 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#C49E55] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-[#C49E55] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+966 50 123 4567</p>
                  <p className="text-gray-400">+966 11 234 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-[#C49E55] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">info@nashami-wood.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-[#C49E55] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} شركة النشامي. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1 space-x-reverse">
              <span>صُنع بـ</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>في المملكة العربية السعودية</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
