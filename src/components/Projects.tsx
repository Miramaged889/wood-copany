import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "غرفة نوم فاخرة",
      category: "سكني",
      image: "/images/projects/BED ROOM.jpeg",
      description:
        "تصميم وتنفيذ غرفة نوم بأسلوب عصري مع استخدام أجود أنواع الأخشاب",
    },
    {
      id: 2,
      title: "سقف داخلي خشبي",
      category: "سكني",
      image: "/images/projects/CEILING INDOOR.jpeg",
      description: "تصميم سقف داخلي بالخشب الطبيعي مع إضاءة مدمجة",
    },
    {
      id: 3,
      title: "حمام رخامي فاخر",
      category: "سكني",
      image: "/images/projects/BATH ROOM.jpeg",
      description: "تصميم حمام فاخر بالرخام مع لمسات خشبية أنيقة",
    },
    {
      id: 4,
      title: "تصميم قبو فاخر",
      category: "تجاري",
      image: "/images/projects/BASMENT.jpeg",
      description: "تصميم وتنفيذ قبو بتشطيبات خشبية راقية",
    },
    {
      id: 5,
      title: "جدار خشبي مميز",
      category: "تجاري",
      image: "/images/projects/B2.jpeg",
      description: "تغليف جدار بألواح خشبية مع إضاءة خفية",
    },
  ];

  const categories = ["الكل", "سكني", "تجاري"];
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects =
    activeCategory === "الكل"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredProjects.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredProjects[nextIndex].image);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredProjects.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredProjects[prevIndex].image);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2E2E2E] mb-4">
            معرض مشاريعنا
          </h2>
          <div className="w-24 h-1 bg-[#C49E55] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استعرض مجموعة من أفضل مشاريعنا المنجزة في مجال الأخشاب والديكورات
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#8B5E3C] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-[#C49E55] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(project.image, index)}
            >
              <div className="gallery-item relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                    <p className="text-sm">انقر للعرض</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#C49E55] text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-[#C49E55] z-10"
              >
                <X className="h-8 w-8" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#C49E55] z-10"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#C49E55] z-10"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <img
                src={selectedImage}
                alt="Project"
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <h4 className="text-lg font-bold">
                  {filteredProjects[currentImageIndex]?.title}
                </h4>
                <p className="text-sm">
                  {filteredProjects[currentImageIndex]?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">
            هل أعجبتك مشاريعنا؟
          </h3>
          <p className="text-gray-600 mb-8">
            ابدأ مشروعك معنا اليوم واحصل على تصميم مميز
          </p>
          <a
            href="#contact"
            className="bg-[#8B5E3C] hover:bg-[#7A5235] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block transform hover:scale-105"
          >
            ابدأ مشروعك الآن
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
