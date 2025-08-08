import {
  TreePine,
  Hammer,
  Palette,
  Home,
  Building,
  Coffee,
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const services = [
    {
      icon: TreePine,
      title: "تجارة الأخشاب",
      description:
        "نوفر أجود أنواع الأخشاب المحلية والمستوردة للاستخدامات المختلفة",
      features: [
        "ألواح خرسانية",
        "أخشاب ديكورية",
        "أخشاب للأسقف",
        "أخشاب للأرضيات",
      ],
      images: [
        "images/woods/1.jpg",
        "images/woods/2.jpg",
        "images/woods/3.jpg",
        "images/woods/4.jpg",
        "images/woods/5.jpg",
      ],
    },
    {
      icon: Hammer,
      title: "التصنيع والتركيب",
      description: "تصنيع وتركيب الأثاث والديكورات الخشبية حسب الطلب",
      features: ["أثاث مخصص", "ديكورات داخلية", "أبواب ونوافذ", "خزائن وأرفف"],
      images: [
        "images/workofwods/1.jpeg",
        "images/workofwods/2.jpeg",
        "images/disk/img1.jpg",
        "images/disk/img2.jpg",
        "images/disk/img3.jpg",
        "images/decoor/2.jpeg",
        "images/decoor/3.jpeg",
      ],
    },
    {
      icon: Palette,
      title: "التصميم الداخلي",
      description: "تصميم وتنفيذ الديكورات الداخلية للمنازل والمكاتب",
      features: [
        "تصميم ثلاثي الأبعاد",
        "اختيار الألوان",
        "تنسيق الأثاث",
        "الإضاءة",
      ],
      images: [
        "images/decoor/5.jpg",
        "images/decoor/6.jpeg",
        "images/decoor/1.jpg",
        "images/decoor/2.jpeg",
        "images/decoor/3.jpeg",
        "images/decoor/7.jpeg",
        "images/decoor/8.jpeg",
        "images/decoor/9.jpg",
      ],
    },
    {
      icon: Home,
      title: "المشاريع السكنية",
      description: "تنفيذ مشاريع الديكور للفلل والشقق والقصور",
      features: ["غرف النوم", "المجالس", "المطابخ", "الحمامات"],
      images: [
        "images/projects/BED ROOM.jpeg",
        "images/projects/BATH ROOM.jpeg",
        "images/ketchin/img1.jpg",
        "images/ketchin/img2.jpg",
        "images/ketchin/img4.jpg",
        "images/hotel/3.jpg",
        "images/hotel/2.jpg",
        "images/hotel/8.jpg",
      ],
    },
    {
      icon: Building,
      title: "المشاريع التجارية",
      description: "تصميم وتنفيذ ديكورات المكاتب والمحلات التجارية",
      features: ["مكاتب إدارية", "محلات تجارية", "مطاعم", "فنادق"],
      images: [
        "images/disk/img1.jpg",
        "images/disk/img2.jpg",
        "images/disk/img3.jpg",
        "images/hotel/2.jpg",
        "images/hotel/3.jpg",
      ],
    },
    {
      icon: Coffee,
      title: "تجهيز المعارض",
      description: "تصميم وتنفيذ تجهيزات المعارض والعروض التجارية",
      features: ["تصميم عصري", "خامات فاخرة", "إضاءة مميزة", "تشطيبات راقية"],
      images: [
        "images/exhibition/1.jpg",
        "images/exhibition/2.jpg",
        "images/exhibition/3.jpg",
        "images/exhibition/4.jpg",
        "images/exhibition/5.jpg",
        "images/exhibition/6.jpg",
        "images/exhibition/7.jpg",
        "images/exhibition/8.jpg",
        "images/exhibition/9.jpg",
        "images/exhibition/10.jpg",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F5F2EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">خدماتنا</h2>
          <div className="w-24 h-1 bg-[#C49E55] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات في مجال الأخشاب والديكورات لتلبية جميع
            احتياجاتكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-white rounded-lg p-8 shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedService(service.title)}
              >
                <div className="bg-[#8B5E3C] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-2 space-x-reverse text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-[#C49E55] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  <span className="text-[#C49E55] text-sm font-semibold">
                    انقر لعرض الصور
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Images Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full bg-white rounded-lg p-6">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-[#C49E55] z-10"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#2E2E2E]">
                  {selectedService}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                {services
                  .find((s) => s.title === selectedService)
                  ?.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`${selectedService} - ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg"></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-[#8B5E3C] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              هل تحتاج إلى استشارة مجانية؟
            </h3>
            <p className="text-lg mb-6">
              فريقنا المتخصص جاهز لمساعدتك في اختيار الحل الأمثل لمشروعك
            </p>
            <a
              href="#contact"
              className="bg-[#C49E55] hover:bg-[#B8924A] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              احصل على استشارة مجانية
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
