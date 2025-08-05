# EmailJS Setup Guide / دليل إعداد EmailJS

## English Instructions / التعليمات باللغة الإنجليزية

### 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission - {{from_name}} Name: {{from_name}} Email:
{{from_email}} Phone: {{from_phone}} Message: {{message}} This message was sent
from your website contact form.
```

4. Note down your **Template ID**

### 4. Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Configuration

1. Open `src/utils/emailjsConfig.ts`
2. Replace the placeholder values:
   ```typescript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: "your_service_id_here",
     TEMPLATE_ID: "your_template_id_here",
     PUBLIC_KEY: "your_public_key_here",
   };
   ```

### 6. Test the Form

1. Start your development server
2. Fill out the contact form
3. Submit and check if you receive the email

---

## تعليمات باللغة العربية

### 1. إنشاء حساب EmailJS

1. اذهب إلى [EmailJS.com](https://www.emailjs.com/)
2. سجل حساب مجاني
3. تحقق من بريدك الإلكتروني

### 2. إنشاء خدمة البريد الإلكتروني

1. في لوحة تحكم EmailJS، اذهب إلى "Email Services"
2. اضغط "Add New Service"
3. اختر مزود البريد الإلكتروني (Gmail، Outlook، إلخ)
4. اتبع خطوات المصادقة
5. سجل **Service ID** الخاص بك

### 3. إنشاء قالب البريد الإلكتروني

1. اذهب إلى "Email Templates" في لوحة التحكم
2. اضغط "Create New Template"
3. استخدم هذا الهيكل للقالب:

```html
Subject: رسالة جديدة من نموذج التواصل - {{from_name}} الاسم: {{from_name}}
البريد الإلكتروني: {{from_email}} رقم الهاتف: {{from_phone}} الرسالة:
{{message}} تم إرسال هذه الرسالة من نموذج التواصل في موقعك.
```

4. سجل **Template ID** الخاص بك

### 4. الحصول على المفتاح العام

1. اذهب إلى "Account" → "API Keys"
2. انسخ **Public Key** الخاص بك

### 5. تحديث الإعدادات

1. افتح `src/utils/emailjsConfig.ts`
2. استبدل القيم المؤقتة:
   ```typescript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: "your_service_id_here",
     TEMPLATE_ID: "your_template_id_here",
     PUBLIC_KEY: "your_public_key_here",
   };
   ```

### 6. اختبار النموذج

1. ابدأ خادم التطوير
2. املأ نموذج التواصل
3. أرسل وتحقق من استلام البريد الإلكتروني

---

## Features Added / الميزات المضافة

✅ **EmailJS Integration** - تكامل EmailJS
✅ **Form Validation** - التحقق من صحة النموذج  
✅ **Success/Error Messages** - رسائل النجاح والخطأ
✅ **Loading States** - حالات التحميل
✅ **Email Format Validation** - التحقق من صحة البريد الإلكتروني
✅ **Required Field Validation** - التحقق من الحقول المطلوبة
✅ **User-Friendly Feedback** - تغذية راجعة سهلة للمستخدم
