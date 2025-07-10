
import { CheckCircle, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const features = [
    'خبرة تزيد عن 15 عامًا في مجال الأخشاب والديكورات',
    'فريق عمل متخصص ومدرب على أعلى المستويات',
    'استخدام أجود أنواع الأخشاب المحلية والمستوردة',
    'تصاميم مبتكرة تناسب جميع الأذواق والميزانيات',
    'خدمة ما بعد البيع وضمان على جميع المنتجات',
    'التزام بالمواعيد وجودة التنفيذ'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-[#C49E55] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شركة النشامي هي إحدى الشركات الرائدة في مجال تجارة وتصنيع الأخشاب والديكورات في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">
              رحلتنا في عالم الأخشاب والديكورات
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              بدأت شركة النشامي رحلتها منذ أكثر من 15 عامًا بهدف تقديم أفضل الحلول في مجال تجارة الأخشاب وتصنيع الديكورات الداخلية والخارجية. نحن نفخر بتقديم خدمات متميزة تلبي احتياجات عملائنا من القطاعين السكني والتجاري.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="h-5 w-5 text-[#C49E55] mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/projects/BED ROOM.jpeg"
                alt="غرفة نوم فاخرة"
                className="rounded-lg shadow-lg object-cover h-48 w-full"
              />
              <img
                src="/images/projects/CEILING INDOOR.jpeg"
                alt="سقف داخلي خشبي"
                className="rounded-lg shadow-lg object-cover h-48 w-full mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#8B5E3C] text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">+15</div>
                <div className="text-sm">سنة خبرة</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-[#F5F2EC] rounded-lg">
            <Target className="h-12 w-12 text-[#8B5E3C] mx-auto mb-4" />
            <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">رسالتنا</h4>
            <p className="text-gray-600">
              تقديم أفضل الحلول في مجال الأخشاب والديكورات بجودة عالية وأسعار تنافسية
            </p>
          </div>
          <div className="text-center p-8 bg-[#F5F2EC] rounded-lg">
            <Eye className="h-12 w-12 text-[#8B5E3C] mx-auto mb-4" />
            <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">رؤيتنا</h4>
            <p className="text-gray-600">
              أن نكون الشركة الرائدة في مجال الأخشاب والديكورات في المنطقة
            </p>
          </div>
          <div className="text-center p-8 bg-[#F5F2EC] rounded-lg">
            <Heart className="h-12 w-12 text-[#8B5E3C] mx-auto mb-4" />
            <h4 className="text-xl font-bold text-[#2E2E2E] mb-4">قيمنا</h4>
            <p className="text-gray-600">
              الجودة، الإبداع، الالتزام، وإرضاء العملاء هي أساس عملنا
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;