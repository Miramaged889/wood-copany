import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <>
      {/* WhatsApp Button with Ripple Effect */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* Ripple Animation */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-50"></div>

        {/* Main Button */}
        <a
          href="https://wa.me/966504400788"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center group"
          aria-label="تواصل معنا عبر الواتساب"
        >
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-4 bg-white rounded-lg px-4 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="text-gray-800 whitespace-nowrap text-sm font-medium">
              تواصل معنا عبر الواتساب
            </div>
            {/* Tooltip Arrow */}
            <div className="absolute bottom-0 right-6 transform translate-y-full">
              <div className="w-2 h-2 bg-white rotate-45 transform origin-center"></div>
            </div>
          </div>

          {/* Button Container */}
          <div className="bg-[#25D366] hover:bg-[#128C7E] p-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
