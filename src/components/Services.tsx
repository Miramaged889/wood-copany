
import { TreePine, Hammer, Palette, Home, Building, Coffee } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TreePine,
      title: 'تجارة الأخشاب',
      description: 'نوفر أجود أنواع الأخشاب المحلية والمستوردة للاستخدامات المختلفة',
      features: ['ألواح خرسانية', 'أخشاب ديكورية', 'أخشاب للأسقف', 'أخشاب للأرضيات']
    },
    {
      icon: Hammer,
      title: 'التصنيع والتركيب',
      description: 'تصنيع وتركيب الأثاث والديكورات الخشبية حسب الطلب',
      features: ['أثاث مخصص', 'ديكورات داخلية', 'أبواب ونوافذ', 'خزائن وأرفف']
    },
    {
      icon: Palette,
      title: 'التصميم الداخلي',
      description: 'تصميم وتنفيذ الديكورات الداخلية للمنازل والمكاتب',
      features: ['تصميم ثلاثي الأبعاد', 'اختيار الألوان', 'تنسيق الأثاث', 'الإضاءة']
    },
    {
      icon: Home,
      title: 'المشاريع السكنية',
      description: 'تنفيذ مشاريع الديكور للفلل والشقق والقصور',
      features: ['غرف النوم', 'المجالس', 'المطابخ', 'الحمامات']
    },
    {
      icon: Building,
      title: 'المشاريع التجارية',
      description: 'تصميم وتنفيذ ديكورات المكاتب والمحلات التجارية',
      features: ['مكاتب إدارية', 'محلات تجارية', 'مطاعم', 'فنادق']
    },
    {
      icon: Coffee,
      title: 'كوفي كورنر',
      description: 'تصميم وتنفيذ أركان القهوة العصرية والأنيقة',
      features: ['تصميم عصري', 'خامات فاخرة', 'إضاءة مميزة', 'تشطيبات راقية']
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#F5F2EC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">خدماتنا</h2>
          <div className="w-24 h-1 bg-[#C49E55] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات في مجال الأخشاب والديكورات لتلبية جميع احتياجاتكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="service-card bg-white rounded-lg p-8 shadow-lg hover:shadow-xl"
              >
                <div className="bg-[#8B5E3C] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 space-x-reverse text-sm text-gray-700">
                      <div className="w-2 h-2 bg-[#C49E55] rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-[#8B5E3C] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">هل تحتاج إلى استشارة مجانية؟</h3>
            <p className="text-lg mb-6">فريقنا المتخصص جاهز لمساعدتك في اختيار الحل الأمثل لمشروعك</p>
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