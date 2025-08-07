import { ArrowDown, Star, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 leading-tight">
            شركة النشامي
          </h1>
          <h2 className="hero-subtitle text-xl md:text-2xl mb-8 text-[#C49E55] font-semibold">
            النخبة في تجارة وتصنيع الأخشاب والديكورات
          </h2>
          <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            نحن نقدم أجود أنواع الأخشاب وأرقى التصاميم الداخلية والخارجية للقصور
            والمكاتب والمشاريع التجارية
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Star className="h-8 w-8 text-[#C49E55] mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">+25</h3>
              <p className="text-sm">سنة من الخبرة</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="h-8 w-8 text-[#C49E55] mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">+200</h3>
              <p className="text-sm">مشروع مكتمل</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="h-8 w-8 text-[#C49E55] mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">+500</h3>
              <p className="text-sm">عميل راضٍ</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="bg-[#C49E55] hover:bg-[#B8924A] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            استعرض مشاريعنا
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white hover:bg-white hover:text-[#2E2E2E] px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            تواصل معنا
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 mx-auto text-[#C49E55]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
