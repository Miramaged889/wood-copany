import React, { useState } from "react";
import { Plus, Edit, Trash2, Eye, X, Save, ArrowLeft } from "lucide-react";
import { TradeWood } from "./dataService";

interface TradeWoodsManagerProps {
  data: TradeWood[];
  categories: string[];
  onSave: (data: TradeWood[]) => void;
}

const TradeWoodsManager: React.FC<TradeWoodsManagerProps> = ({
  data,
  categories,
  onSave,
}) => {
  const [items, setItems] = useState<TradeWood[]>(data);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<TradeWood | null>(null);
  const [selectedItem, setSelectedItem] = useState<TradeWood | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
    specifications: "",
  });

  const handleAdd = () => {
    setEditingItem(null);
    setFormData({
      name: "",
      category: "",
      image: "",
      description: "",
      specifications: "",
    });
    setShowForm(true);
  };

  const handleEdit = (item: TradeWood) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      image: item.image,
      description: item.description,
      specifications: item.specifications,
    });
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("هل أنت متأكد من حذف هذا العنصر؟")) {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
      onSave(newItems);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingItem) {
      // Edit existing item
      const newItems = items.map((item) =>
        item.id === editingItem.id ? { ...item, ...formData } : item
      );
      setItems(newItems);
      onSave(newItems);
    } else {
      // Add new item
      const newItem: TradeWood = {
        id: Math.max(...items.map((item) => item.id), 0) + 1,
        ...formData,
      };
      const newItems = [...items, newItem];
      setItems(newItems);
      onSave(newItems);
    }

    setShowForm(false);
    setEditingItem(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#2E2E2E]">
          إدارة تجارة الأخشاب
        </h2>
        <button
          onClick={handleAdd}
          className="flex items-center space-x-2 space-x-reverse bg-[#8B5E3C] text-white px-4 py-2 rounded-lg hover:bg-[#7A5235] transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>إضافة منتج جديد</span>
        </button>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="bg-white text-gray-800 px-3 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1 space-x-reverse"
                >
                  <Eye className="h-4 w-4" />
                  <span>عرض</span>
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.category}</p>
              <div className="flex space-x-2 space-x-reverse">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 flex items-center justify-center space-x-1 space-x-reverse bg-blue-500 text-white px-3 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
                >
                  <Edit className="h-4 w-4" />
                  <span>تعديل</span>
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="flex-1 flex items-center justify-center space-x-1 space-x-reverse bg-red-500 text-white px-3 py-2 rounded text-sm hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>حذف</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">
                  {editingItem ? "تعديل المنتج" : "إضافة منتج جديد"}
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    اسم المنتج
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C49E55] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    الفئة
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C49E55] focus:border-transparent"
                    required
                  >
                    <option value="">اختر الفئة</option>
                    {categories.slice(1).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    رابط الصورة
                  </label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C49E55] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    الوصف
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C49E55] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    المواصفات
                  </label>
                  <textarea
                    value={formData.specifications}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specifications: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C49E55] focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex space-x-4 space-x-reverse pt-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 space-x-reverse bg-[#8B5E3C] text-white px-4 py-2 rounded-lg hover:bg-[#7A5235] transition-colors"
                  >
                    <Save className="h-5 w-5" />
                    <span>
                      {editingItem ? "حفظ التعديلات" : "إضافة المنتج"}
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 flex items-center justify-center space-x-2 space-x-reverse bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    <span>إلغاء</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">تفاصيل المنتج</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-lg">{selectedItem.name}</h4>
                  <p className="text-gray-600">{selectedItem.category}</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">الوصف:</h5>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">المواصفات:</h5>
                  <p className="text-gray-600">{selectedItem.specifications}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeWoodsManager;
