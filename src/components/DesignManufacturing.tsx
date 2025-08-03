import  { useState } from "react";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

const DesignManufacturing = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("جميع الأعمال");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    "جميع الأعمال",
    "مطابخ خشبية",
    "ديكورات خشبية - مكاتب إدارية",
    "تأثيث فنادق",
    "أعمال خشبية خارجية",
    "وحدات تلفزيون - أثاث - ديكورات داخلية - خزائن",
    "أبواب خشبية",
  ];

  const gallery = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "مطابخ خشبية",
      title: "مطبخ خشبي فاخر",
      description: "تصميم وتنفيذ مطبخ خشبي بأحدث التقنيات والتشطيبات",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "ديكورات خشبية - مكاتب إدارية",
      title: "مكتب إداري متميز",
      description: "تصميم مكتب إداري بديكورات خشبية أنيقة",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "تأثيث فنادق",
      title: "تأثيث غرف فندقية",
      description: "تأثيث كامل لغرف فندقية بأثاث خشبي راقي",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "أعمال خشبية خارجية",
      title: "ديكورات خارجية",
      description: "تنفيذ ديكورات خشبية خارجية مقاومة للعوامل الجوية",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "وحدات تلفزيون - أثاث - ديكورات داخلية - خزائن",
      title: "وحدة تلفزيون عصرية",
      description: "تصميم وتنفيذ وحدة تلفزيون بتصميم عصري",
    },
    {
      id: 6,
      image:
        "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "أبواب خشبية",
      title: "أبواب خشبية فاخرة",
      description: "تصنيع أبواب خشبية بتصاميم كلاسيكية وعصرية",
    },
  ];

  const filteredGallery =
    selectedCategory === "جميع الأعمال"
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredGallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredGallery[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredGallery.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredGallery[prevIndex]);
  };

  return (
    <section id="design-manufacturing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">
            التصميم والتصنيع
          </h2>
          <div className="w-24 h-1 bg-[#C49E55] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحول أفكاركم إلى واقع من خلال التصميم المبتكر والتصنيع الدقيق
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#8B5E3C] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-[#C49E55] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(item, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white text-[#2E2E2E] px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center">
                    <Eye className="w-4 h-4 ml-2" />
                    عرض التفاصيل
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <span className="inline-block bg-[#C49E55] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-[#C49E55] z-10 bg-black/50 p-2 rounded-full"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#C49E55] z-10 bg-black/50 p-2 rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#C49E55] z-10 bg-black/50 p-2 rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="p-8">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 object-cover rounded-lg mb-6"
                />
                <div>
                  <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedImage.description}
                  </p>
                  <span className="inline-block bg-[#C49E55] text-white px-4 py-2 rounded-full font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#8B5E3C] to-[#C49E55] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">هل لديك فكرة مشروع؟</h3>
            <p className="text-lg mb-6">
              تواصل معنا لتحويل أفكارك إلى واقع بأعلى معايير الجودة والحرفية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966504400788"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                تواصل عبر الواتساب
              </a>
              <a
                href="tel:+966535572598"
                className="bg-white text-[#8B5E3C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                اتصل بنا مباشرة
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignManufacturing;
