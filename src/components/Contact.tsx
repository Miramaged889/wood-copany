import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { ContactFormData, submitContactForm } from "../utils/contactApi";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../utils/emailjsConfig";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setSubmitStatus("error");
      setStatusMessage("يرجى ملء جميع الحقول المطلوبة");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setStatusMessage("يرجى إدخال بريد إلكتروني صحيح");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        setStatusMessage(result.message || "تم إرسال رسالتك بنجاح!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          result.error || "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى"
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setStatusMessage("حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear status when user starts typing
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setStatusMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#F5F2EC] to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C49E55] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5E3C] opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#2E2E2E] mb-6 relative inline-block">
            تواصل معنا
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C49E55]"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
            نحن هنا لمساعدتك في تحقيق مشروع أحلامك. تواصل معنا الآن للحصول على
            استشارة مجانية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-[#2E2E2E] mb-8 border-b border-[#C49E55] pb-4">
                معلومات التواصل
              </h3>

              <div className="space-y-8">
                <div className="flex items-start space-x-6 space-x-reverse group">
                  <div className="bg-[#8B5E3C] p-4 rounded-xl group-hover:bg-[#C49E55] transition-colors duration-300">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E2E2E] text-xl mb-2">
                      أرقام التواصل
                    </h4>
                    <p className="text-gray-600 text-lg">
                      رقم الجوال : 0535572598
                    </p>
                    <p className="text-gray-600 text-lg">
                      رقم الواتس : 0504400788
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 space-x-reverse group">
                  <div className="bg-[#8B5E3C] p-4 rounded-xl group-hover:bg-[#C49E55] transition-colors duration-300">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E2E2E] text-xl mb-2">
                      البريد الإلكتروني
                    </h4>
                    <p className="text-gray-600 text-lg">
                      info@nashami-wood.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 space-x-reverse group">
                  <div className="bg-[#8B5E3C] p-4 rounded-xl group-hover:bg-[#C49E55] transition-colors duration-300">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2E2E2E] text-xl mb-2">
                      العنوان
                    </h4>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      الرياض، المملكة العربية السعودية
                      <br />
                      حي الملك فهد، شارع الأمير محمد بن عبدالعزيز
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0535572598"
                className="flex-1 bg-[#8B5E3C] hover:bg-[#C49E55] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 space-x-reverse shadow-lg hover:shadow-xl"
              >
                <Phone className="h-6 w-6" />
                <span className="text-lg">اتصل الآن</span>
              </a>
              <a
                href="https://wa.me/966504400788"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 space-x-reverse shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="text-lg">واتساب</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-[#2E2E2E] mb-8 relative">
                أرسل لنا رسالة
                <div className="absolute -bottom-2 right-0 w-16 h-1 bg-[#C49E55]"></div>
              </h3>

              {/* Status Message */}
              {submitStatus !== "idle" && (
                <div
                  className={`mb-6 p-4 rounded-xl flex items-center space-x-3 space-x-reverse ${
                    submitStatus === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : (
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  )}
                  <span className="text-lg font-medium">{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C49E55] focus:border-transparent transition-all text-lg"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C49E55] focus:border-transparent transition-all text-lg"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C49E55] focus:border-transparent transition-all text-lg"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    الرسالة *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C49E55] focus:border-transparent transition-all text-lg resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#C49E55] hover:from-[#C49E55] hover:to-[#8B5E3C] text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 space-x-reverse shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6" />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
