import React, { useState, useEffect } from "react";
import { LogOut, Settings, Image, Package } from "lucide-react";
import Login from "./Login";
import TradeWoodsManager from "./TradeWoodsManager";
import DesignManufacturingManager from "./DesignManufacturingManager";
import ProjectsManager from "./ProjectsManager";
import {
  loadData,
  saveData,
  type AdminData,
  type TradeWood,
  type DesignManufacturingItem,
  type Project,
} from "./dataService";

const Dashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentSection, setCurrentSection] = useState("tradeWoods");
  const [data, setData] = useState<AdminData | null>(null);

  useEffect(() => {
    loadData().then(setData);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLogin = (_username: string, _password: string) => {
    setIsAuthenticated(true);
  };
 
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const handleSaveData = async (newData: AdminData) => {
    try {
      await saveData(newData);
      setData(newData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5E3C] mx-auto"></div>
          <p className="mt-4 text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#2E2E2E]">
                لوحة تحكم الإدارة
              </h1>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>تسجيل الخروج</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <nav className="flex space-x-8 space-x-reverse mb-8 bg-white rounded-lg shadow-sm p-4">
          <button
            onClick={() => setCurrentSection("tradeWoods")}
            className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-all ${
              currentSection === "tradeWoods"
                ? "bg-[#8B5E3C] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Package className="h-5 w-5" />
            <span>تجارة الأخشاب</span>
          </button>
          <button
            onClick={() => setCurrentSection("designManufacturing")}
            className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-all ${
              currentSection === "designManufacturing"
                ? "bg-[#8B5E3C] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>التصميم والتصنيع</span>
          </button>
          <button
            onClick={() => setCurrentSection("projects")}
            className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-lg transition-all ${
              currentSection === "projects"
                ? "bg-[#8B5E3C] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Image className="h-5 w-5" />
            <span>المشاريع</span>
          </button>
        </nav>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {currentSection === "tradeWoods" && (
            <TradeWoodsManager
              data={data.tradeWoods}
              categories={data.categories.tradeWoods}
              onSave={(newData: TradeWood[]) =>
                handleSaveData({ ...data, tradeWoods: newData })
              }
            />
          )}
          {currentSection === "designManufacturing" && (
            <DesignManufacturingManager
              data={data.designManufacturing}
              categories={data.categories.designManufacturing}
              onSave={(newData: DesignManufacturingItem[]) =>
                handleSaveData({ ...data, designManufacturing: newData })
              }
            />
          )}
          {currentSection === "projects" && (
            <ProjectsManager
              data={data.projects}
              categories={data.categories.projects}
              onSave={(newData: Project[]) =>
                handleSaveData({ ...data, projects: newData })
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
