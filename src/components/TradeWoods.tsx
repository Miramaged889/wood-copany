import { TreePine, Eye, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const TradeWoods = () => {
  const [popupWood, setPopupWood] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});
  const [popupImageIndex, setPopupImageIndex] = useState<number>(0);

  const woodTypes = [
    {
      id: 1,
      name: "ألواح خرسانية",
      englishName: "Concrete Boards",
      images: [
        "images/woods/wood10.jpg",
        "images/woods/wood2.jpg",
        "images/woods/wood8.jpg",
      ],
      description:
        "ألواح خرسانية عالية الجودة مناسبة للبناء والإنشاءات المختلفة",
      features: [
        "مقاوم للرطوبة",
        "قوة تحمل عالية",
        "مقاوم للحريق",
        "سهل التركيب",
      ],
      uses: [
        "البناء والإنشاءات",
        "الجدران الخارجية",
        "الأساسات",
        "المشاريع الكبيرة",
      ],
      origin: "محلي",
      rating: 5,
    },
    {
      id: 2,
      name: "أخشاب ديكورية",
      englishName: "Decorative Wood",
      images: [
        "images/woods/dec1.jpg",
        "images/woods/dec2.jpg",
        "images/woods/dec3.jpg",
        "images/woods/dec4.jpg",
      ],
      price: "200 ريال / م²",
      description:
        "أخشاب ديكورية فاخرة لإضفاء لمسة جمالية راقية على المساحات الداخلية",
      features: [
        "تصاميم فنية راقية",
        "ألوان متنوعة",
        "سهل التشكيل",
        "جودة عالية",
      ],
      uses: [
        "الديكورات الداخلية",
        "الجدران المميزة",
        "الأثاث المخصص",
        "التحف الفنية",
      ],
      origin: "مستورد",
      rating: 5,
    },
    {
      id: 3,
      name: "أخشاب للأسقف",
      englishName: "Ceiling Wood",
      images: [
        "images/woods/top1.jpeg",
        "images/woods/top2.jpg",
        "images/woods/top3.jpg",
      ],

      description:
        "أخشاب عالية الجودة مخصصة للأسقف والتغطيات الداخلية والخارجية",
      features: ["مقاوم للرطوبة", "عزل حراري", "خفيف الوزن", "سهل التركيب"],
      uses: [
        "الأسقف المعلقة",
        "التغطيات الخارجية",
        "العزل الحراري",
        "الديكورات",
      ],
      origin: "محلي ومستورد",
      rating: 4,
    },
    {
      id: 4,
      name: "أخشاب للأرضيات",
      englishName: "Flooring Wood",
      images: [
        "images/woods/wood2 (2).jpg",
        "images/woods/wood14.jpg",
        "images/woods/wood3.jpg",
      ],

      description:
        "أخشاب أرضيات فاخرة ومتينة تتحمل الاستخدام اليومي مع الحفاظ على الجمال",
      features: ["مقاوم للخدش", "سهل التنظيف", "متانة عالية", "عزل صوتي"],
      uses: [
        "أرضيات المنازل",
        "المكاتب التجارية",
        "الفنادق والمطاعم",
        "المراكز التجارية",
      ],
      origin: "مستورد من أوروبا",
      rating: 5,
    },
  ];

  const nextImage = (woodId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [woodId]: ((prev[woodId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (woodId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [woodId]: ((prev[woodId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const nextPopupImage = (totalImages: number) => {
    setPopupImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevPopupImage = (totalImages: number) => {
    setPopupImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const openPopup = (woodId: number) => {
    setPopupWood(woodId);
    setPopupImageIndex(0);
  };

  const closePopup = () => {
    setPopupWood(null);
    setPopupImageIndex(0);
  };

  return (
    <section id="trade-woods" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">
            تجارة الأخشاب
          </h2>
          <div className="w-24 h-1 bg-[#C49E55] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نوفر أجود أنواع الأخشاب المحلية والمستوردة للاستخدامات المختلفة
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto text-sm text-[#8B5E3C] font-semibold">
            <div>• ألواح خرسانية</div>
            <div>• أخشاب ديكورية</div>
            <div>• أخشاب للأسقف</div>
            <div>• أخشاب للأرضيات</div>
          </div>
        </div>

        {/* Wood Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {woodTypes.map((wood) => (
            <div
              key={wood.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Slider */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={wood.images[currentImageIndex[wood.id] || 0]}
                  alt={wood.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={() => prevImage(wood.id, wood.images.length)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => nextImage(wood.id, wood.images.length)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Image Dots Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  {wood.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        setCurrentImageIndex((prev) => ({
                          ...prev,
                          [wood.id]: index,
                        }))
                      }
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        (currentImageIndex[wood.id] || 0) === index
                          ? "bg-white"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">
                    {wood.name}
                  </h3>
                  <p className="text-base text-gray-500 mb-1">
                    {wood.englishName}
                  </p>
                  <p className="text-sm text-[#C49E55] font-semibold">
                    المنشأ: {wood.origin}
                  </p>
                </div>

                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {wood.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-base font-semibold text-[#2E2E2E] mb-3">
                    المميزات:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {wood.features.slice(0, 4).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-[#C49E55] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <button
                    onClick={() => openPopup(wood.id)}
                    className="w-full bg-[#8B5E3C] hover:bg-[#7A5235] text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#8B5E3C] to-[#A0704C] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">تسوق بثقة معنا</h3>
          <p className="text-lg mb-6 opacity-90">
            احصل على أفضل أنواع الأخشاب بأسعار تنافسية وجودة مضمونة مع خدمة
            توصيل سريعة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-[#8B5E3C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              طلب عرض سعر
            </a>
            <a
              href="tel:0535572598"
              className="bg-[#C49E55] hover:bg-[#B8924A] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              اتصل بنا الآن
            </a>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-[#8B5E3C] mb-2">500+</div>
            <div className="text-gray-600">عميل راضي</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#8B5E3C] mb-2">50+</div>
            <div className="text-gray-600">نوع خشب</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#8B5E3C] mb-2">15</div>
            <div className="text-gray-600">سنة خبرة</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[#8B5E3C] mb-2">24/7</div>
            <div className="text-gray-600">خدمة العملاء</div>
          </div>
        </div>

        {/* Popup Modal */}
        {popupWood && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
              {(() => {
                const wood = woodTypes.find((w) => w.id === popupWood);
                if (!wood) return null;

                return (
                  <div className="relative">
                    {/* Close Button */}
                    <button
                      onClick={closePopup}
                      className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    {/* Image Section */}
                    <div className="relative h-96 overflow-hidden rounded-t-lg">
                      <img
                        src={wood.images[popupImageIndex]}
                        alt={wood.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Navigation Arrows */}
                      <button
                        onClick={() => prevPopupImage(wood.images.length)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => nextPopupImage(wood.images.length)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-300"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Image Dots */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {wood.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setPopupImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                              popupImageIndex === index
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-[#2E2E2E] mb-2">
                          {wood.name}
                        </h2>
                        <p className="text-xl text-gray-500 mb-2">
                          {wood.englishName}
                        </p>
                        <p className="text-lg text-[#C49E55] font-semibold">
                          المنشأ: {wood.origin}
                        </p>
                      </div>

                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {wood.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4">
                            المميزات:
                          </h3>
                          <div className="space-y-3">
                            {wood.features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center text-base text-gray-600"
                              >
                                <div className="w-3 h-3 bg-[#C49E55] rounded-full mr-3"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Uses */}
                        <div>
                          <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4">
                            الاستخدامات:
                          </h3>
                          <div className="space-y-3">
                            {wood.uses.map((use, index) => (
                              <div
                                key={index}
                                className="flex items-center text-base text-gray-600"
                              >
                                <TreePine className="w-5 h-5 text-[#C49E55] mr-3" />
                                {use}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => {
                            closePopup();
                            setTimeout(() => {
                              document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }, 100);
                          }}
                          className="flex-1 bg-[#8B5E3C] hover:bg-[#7A5235] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                        >
                          طلب عرض سعر
                        </button>
                        <a
                          href="https://wa.me/966504400788"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#C49E55] hover:bg-[#B8924A] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                        >
                          اتصل بنا واتساب
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TradeWoods;
