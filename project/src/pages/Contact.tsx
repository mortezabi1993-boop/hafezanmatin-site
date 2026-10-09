import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle, Navigation } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

// محاسبه وضعیت باز/بسته بودن دفتر بر اساس روز و ساعت فعلی.
function WorkingHours() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
  const hour = now.getHours();

  // In Iran: Sat=open till 16, Sun=open till 16, Mon=open till 16, Tue=open till 16,
  // Wed=open till 16, Thu=open till 13, Fri=closed
  // JS: 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
  const isOpen = (() => {
    if (day === 5) return false; // Friday closed
    if (day === 4) return hour >= 8 && hour < 13; // Thursday till 13
    return hour >= 8 && hour < 16; // Sat-Wed till 16
  })();

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${
      isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
    }`}>
      <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
      {isOpen ? 'اکنون باز' : 'اکنون بسته'}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // اعتبارسنجی فیلدهای فرم قبل از ارسال.
  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'نام الزامی است';
    if (!form.phone.trim()) e.phone = 'شماره تماس الزامی است';
    else if (!/^[0-9۰-۹]{10,11}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'شماره تماس معتبر نیست';
    if (!form.message.trim()) e.message = 'متن پیام الزامی است';
    return e;
  };

  // شبیه‌سازی ارسال فرم با تأخیر کوتاه برای نمایش وضعیت بارگذاری.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <div>
      {/* Page header */}
      <section className="bg-gradient-to-l from-primary-900 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start gap-6">
            <img
              src="/logo500.png"
              alt="لوگوی یگانه حافظان متین"
              className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-accent-400" />
                <span className="text-accent-400 text-sm font-medium">ارتباط با ما</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">تماس با یگانه حافظان متین</h1>
              <p className="text-primary-200 max-w-xl">
                آماده‌ایم تا به سوالات شما پاسخ دهیم و بهترین راهکار امنیتی را برای کسب‌وکارتان ارائه دهیم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick contact bar */}
      <div className="bg-accent-600 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-sm">
            <WorkingHours />
            <span className="text-accent-200 hidden sm:block">|</span>
            <a href="tel:02136223006" className="flex items-center gap-2 hover:underline font-semibold">
              <Phone size={14} />
              <span dir="ltr" className="isolate">021 3622 3006</span>
            </a>
            <span className="text-accent-200 hidden sm:block">|</span>
            <span>شنبه تا چهارشنبه ۸ تا ۱۶ | پنجشنبه ۸ تا ۱۳</span>
          </div>
        </div>
      </div>

      <section className="py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Address */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-2">آدرس دفتر</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      تهران، شهرستان ورامین، بلوار امام رضا، نرسیده به بیمارستان مفتح، روبروی ایران‌خودرو، پلاک ۷۷
                    </p>
                    <a
                      href="https://maps.google.com/?q=35.3240,51.6440"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-primary-700 hover:text-primary-900 text-sm font-medium"
                    >
                      <Navigation size={14} />
                      مسیریابی
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-2">شماره تماس</h3>
                    <a href="tel:02136223006" className="text-2xl font-bold text-primary-800 hover:text-primary-900 transition-colors isolate" dir="ltr">
                      021 3622 3006
                    </a>
                    <p className="text-neutral-500 text-xs mt-1">تماس مستقیم با دفتر</p>
                    <a
                      href="tel:02136223006"
                      className="inline-flex items-center gap-2 mt-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      <Phone size={14} />
                      تماس سریع
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900 mb-2">ایمیل</h3>
                    <a href="mailto:hafezanmatin@gmail.com" className="text-neutral-600 text-sm hover:text-primary-800 transition-colors">hafezanmatin@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-amber-600" />
                  </div>
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-primary-900">ساعت کاری</h3>
                      <WorkingHours />
                    </div>
                    <div className="space-y-2 text-sm">
                      {[
                        { day: 'شنبه تا چهارشنبه', hours: '۸:۰۰ تا ۱۶:۰۰', open: true },
                        { day: 'پنجشنبه', hours: '۸:۰۰ تا ۱۳:۰۰', open: true },
                        { day: 'جمعه', hours: 'تعطیل', open: false },
                      ].map((row) => (
                        <div key={row.day} className="flex items-center justify-between py-1.5 border-b border-neutral-100 last:border-0">
                          <span className="text-neutral-700">{row.day}</span>
                          <span className={`font-medium ${row.open ? 'text-green-600' : 'text-red-500'}`}>{row.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form + Map column */}
            <div className="lg:col-span-3 space-y-6">
              {/* Map */}
              <div className="card overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.1!2d51.6440!3d35.3240!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE5JzI2LjQiTiA1McKwMzgnMzguNCJF!5e0!3m2!1sfa!2sir!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقعیت موسسه حفاظتی یگانه حافظان متین"
                />
              </div>

              {/* Contact form */}
              <div className="card p-6">
                <h2 className="font-bold text-primary-900 text-xl mb-6">ارسال پیام</h2>

                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-bold text-primary-900 text-lg mb-2">پیام شما ارسال شد</h3>
                    <p className="text-neutral-600 text-sm">
                      با تشکر از تماس شما. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', subject: '', message: '' }); }}
                      className="mt-5 btn-outline text-sm py-2"
                    >
                      ارسال پیام جدید
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          نام و نام خانوادگی <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="مثال: علی محمدی"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all ${
                            errors.name ? 'border-red-400 bg-red-50' : 'border-neutral-300 bg-white hover:border-neutral-400'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      {/* Phone */}
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                          شماره تماس <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="مثال: 09123456789"
                          dir="ltr"
                          aria-required="true"
                          aria-invalid={!!errors.phone}
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all text-right ${
                            errors.phone ? 'border-red-400 bg-red-50' : 'border-neutral-300 bg-white hover:border-neutral-400'
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-neutral-700 mb-1.5">موضوع</label>
                      <select
                        id="contact-subject"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className="w-full border border-neutral-300 bg-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 hover:border-neutral-400 transition-all"
                      >
                        <option value="">انتخاب موضوع...</option>
                        <option value="security">خدمات حفاظتی</option>
                        <option value="equipment">تجهیزات دفاع شخصی</option>
                        <option value="hiring">استخدام نگهبان</option>
                        <option value="consultation">مشاوره</option>
                        <option value="other">سایر</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        پیام <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="توضیح دهید چه نوع خدمتی نیاز دارید..."
                        rows={4}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 resize-none transition-all ${
                          errors.message ? 'border-red-400 bg-red-50' : 'border-neutral-300 bg-white hover:border-neutral-400'
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-primary justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          در حال ارسال...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          ارسال پیام
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
