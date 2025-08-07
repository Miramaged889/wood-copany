import { useState, useEffect } from "react";
import {
  Phone,
  MessageCircle,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specifications: string;
}

interface TradeWoodsData {
  categories: string[];
  products: Product[];
}

const TradeWoods = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [data, setData] = useState<TradeWoodsData>({
    categories: [],
    products: [],
  });
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("جميع المنتجات");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData.tradeWoods);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trade woods data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts =
    selectedCategory === "جميع المنتجات"
      ? data.products
      : data.products.filter(
          (product) => product.category === selectedCategory
        );

  const openModal = (product: Product, index: number) => {
    setSelectedProduct(product);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredProducts.length;
    setCurrentImageIndex(nextIndex);
    setSelectedProduct(filteredProducts[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredProducts.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedProduct(filteredProducts[prevIndex]);
  };

  const downloadBrochure = () => {
    const brochureUrl = "/brochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <section id="trade-woods" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5E3C] mx-auto"></div>
            <p className="mt-4 text-gray-600">جاري التحميل...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="trade-woods" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">
            تجارة الأخشاب
          </h2>
          <div className="w-24 h-1 bg-[#C49E55] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نوفر أجود أنواع الأخشاب المعالجة والخرسانية بأعلى معايير الجودة
          </p>
        </div>

        {/* Brochure Download Section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-br from-[#F5F2EC] to-white rounded-lg p-8 shadow-lg border border-[#C49E55]/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#8B5E3C] mb-4">
              تحميل البروشور الكامل
            </h3>
            <p className="text-[#2E2E2E] mb-6">
              احصل على كتالوج شامل لجميع منتجاتنا من الأخشاب المعالجة والمواصفات
              الفنية
            </p>
            <button
              onClick={downloadBrochure}
              className="bg-gradient-to-r from-[#C49E55] to-[#8B5E3C] hover:from-[#8B5E3C] hover:to-[#7A5235] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Download className="h-5 w-5" />
              تحميل البروشور
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {data.categories.map((category) => (
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(product, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
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
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <span className="inline-block bg-[#C49E55] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && (
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
                        {selectedProduct.name}
                      </h3>
                      <h4 className="text-lg font-semibold mb-2">الوصف</h4>
                      <p className="text-gray-600">
                        {selectedProduct.description}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">المواصفات</h4>
                      <p className="text-gray-600">
                        {selectedProduct.specifications}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold">
                        للاستفسار والطلب
                      </h4>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href="https://wa.me/966504400788"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-colors duration-300"
                        >
                          <MessageCircle className="w-4 h-4 ml-2" />
                          واتساب: 0504400788
                        </a>
                        <a
                          href="tel:+966535572598"
                          className="flex items-center justify-center bg-[#8B5E3C] text-white px-4 py-2 rounded-lg hover:bg-[#7A5235] transition-colors duration-300"
                        >
                          <Phone className="w-4 h-4 ml-2" />
                          جوال: 0535572598
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#8B5E3C] to-[#C49E55] rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              هل تحتاج إلى استشارة مجانية؟
            </h3>
            <p className="text-lg mb-6">
              فريقنا المتخصص جاهز لمساعدتك في اختيار الحل الأمثل لمشروعك
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

export default TradeWoods;
