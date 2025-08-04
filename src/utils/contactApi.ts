// utils/contactApi.ts

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

// دالة إرسال الفورم
export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactFormResponse> {
  try {
    // Log the contact form data for verification
    console.log("📧 Contact Form Submission:", {
      to: "info@nshamy.com",
      from: formData.email,
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate a small delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Always return success in this frontend-only implementation
    return {
      success: true,
      message: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً",
    };
  } catch (error: unknown) {
    console.error("API error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "فشل في الاتصال بالخادم",
    };
  }
}
