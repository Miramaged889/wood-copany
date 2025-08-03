// Simple data service for admin dashboard
// Uses localStorage for data persistence

export interface TradeWood {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specifications: string;
}

export interface DesignManufacturingItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface AdminData {
  tradeWoods: TradeWood[];
  designManufacturing: DesignManufacturingItem[];
  projects: Project[];
  categories: {
    tradeWoods: string[];
    designManufacturing: string[];
    projects: string[];
  };
}

// Mock data for development
export const mockData: AdminData = {
  tradeWoods: [
    {
      id: 1,
      name: "أخشاب معالجة حرارياً - Thermowood",
      category: "الأخشاب المعالجة - Thermowood",
      image: "images/woods/wood10.jpg",
      description: "أخشاب معالجة حرارياً عالية الجودة، مقاومة للرطوبة والحشرات",
      specifications: "مقاسات متنوعة، معالجة حرارياً، مقاومة للعوامل الجوية",
    },
    {
      id: 2,
      name: "أخشاب الصنوبر المعالج",
      category: "الأخشاب المعالجة - Thermowood",
      image: "images/woods/wood2.jpg",
      description: "أخشاب صنوبر معالجة مناسبة للاستخدامات الخارجية والداخلية",
      specifications: "مقاسات: 2×4، 2×6، 2×8 بوصة، أطوال متنوعة",
    },
    {
      id: 3,
      name: "أخشاب خرسانية للبناء",
      category: "أخشاب خرسانية ومواد بناء",
      image: "images/woods/wood8.jpg",
      description:
        "أخشاب خرسانية عالية الجودة للاستخدام في أعمال البناء والتشييد",
      specifications: "مقاومة عالية، مناسبة للأحمال الثقيلة، معالجة ضد الرطوبة",
    },
    {
      id: 4,
      name: "ألواح خشبية مضغوطة",
      category: "أخشاب خرسانية ومواد بناء",
      image: "images/woods/wood14.jpg",
      description: "ألواح خشبية مضغوطة عالية الكثافة للاستخدامات المتنوعة",
      specifications: "سماكات: 12مم، 18مم، 25مم، أبعاد قياسية",
    },
  ],
  designManufacturing: [
    {
      id: 1,
      title: "مطبخ خشبي فاخر",
      category: "مطابخ خشبية",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "تصميم وتنفيذ مطبخ خشبي بأحدث التقنيات والتشطيبات",
    },
    {
      id: 2,
      title: "مكتب إداري متميز",
      category: "ديكورات خشبية - مكاتب إدارية",
      image:
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "تصميم مكتب إداري بديكورات خشبية أنيقة",
    },
    {
      id: 3,
      title: "تأثيث غرف فندقية",
      category: "تأثيث فنادق",
      image:
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "تأثيث كامل لغرف فندقية بأثاث خشبي راقي",
    },
    {
      id: 4,
      title: "ديكورات خارجية",
      category: "أعمال خشبية خارجية",
      image:
        "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "تنفيذ ديكورات خشبية خارجية مقاومة للعوامل الجوية",
    },
    {
      id: 5,
      title: "وحدة تلفزيون عصرية",
      category: "وحدات تلفزيون - أثاث - ديكورات داخلية - خزائن",
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "تصميم وتنفيذ وحدة تلفزيون بتصميم عصري",
    },
    {
      id: 6,
      title: "أبواب خشبية فاخرة",
      category: "أبواب خشبية",
      image:
        "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "تصنيع أبواب خشبية بتصاميم كلاسيكية وعصرية",
    },
  ],
  projects: [
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
  ],
  categories: {
    tradeWoods: [
      "جميع المنتجات",
      "الأخشاب المعالجة - Thermowood",
      "أخشاب خرسانية ومواد بناء",
    ],
    designManufacturing: [
      "جميع الأعمال",
      "مطابخ خشبية",
      "ديكورات خشبية - مكاتب إدارية",
      "تأثيث فنادق",
      "أعمال خشبية خارجية",
      "وحدات تلفزيون - أثاث - ديكورات داخلية - خزائن",
      "أبواب خشبية",
    ],
    projects: ["الكل", "سكني", "تجاري"],
  },
};

export const loadData = async (): Promise<AdminData> => {
  try {
    // Try to load from localStorage first
    const storedData = localStorage.getItem("adminData");
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.warn("Could not load from localStorage, using mock data:", error);
  }

  // Fallback to mock data
  return mockData;
};

export const saveData = async (data: AdminData): Promise<void> => {
  try {
    // Save to localStorage
    localStorage.setItem("adminData", JSON.stringify(data));
    console.log("Data saved successfully to localStorage");
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
    throw error;
  }
};
