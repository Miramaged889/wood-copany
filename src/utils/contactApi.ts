// utils/contactApi.ts
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "./emailjsConfig";

// تحديد نوع البيانات اللي الفورم بيرسلها
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// تحديد نوع النتيجة الراجعة من الـ API
export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

// دالة إرسال الفورم باستخدام EmailJS
export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactFormResponse> {
  try {
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      to_email: "info@nshamy.com",
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log("📧 EmailJS Response:", response);

    if (response.status === 200) {
      return {
        success: true,
        message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً",
      };
    } else {
      return {
        success: false,
        error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى",
      };
    }
  } catch (error: unknown) {
    console.error("EmailJS error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "فشل في الاتصال بالخادم",
    };
  }
}
