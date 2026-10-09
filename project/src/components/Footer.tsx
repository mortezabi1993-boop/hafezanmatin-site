import { Phone, MapPin, Clock, Mail, ChevronLeft } from 'lucide-react';
import type { Page } from '../App';

interface FooterProps {
  navigate: (page: Page) => void;
}

const quickLinks: { label: string; page: Page }[] = [
  { label: 'صفحه اصلی', page: 'home' },
  { label: 'گالری پروژه‌ها', page: 'gallery' },
  { label: 'تجهیزات دفاعی', page: 'equipment' },
  { label: 'نظرات مشتریان', page: 'reviews' },
  { label: 'تماس با ما', page: 'contact' },
];

export default function Footer({ navigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo100-100.png"
                alt="لوگوی یگانه حافظان متین"
                className="w-11 h-11 object-contain rounded-lg bg-white/10 p-0.5"
              />
              <div>
                <div className="font-bold text-white">یگانه حافظان متین</div>
                <div className="text-primary-300 text-xs">موسسه حفاظتی مراقبتی</div>
              </div>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed mb-5">
              ارائه‌دهنده خدمات حفاظتی و مراقبتی با نیروهای متخصص و آموزش‌دیده در سراسر ایران. همکار شهرک‌های صنعتی و پروژه‌های بزرگ کشور.
            </p>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400 text-lg">★★★★</span>
              <span className="text-yellow-400/40 text-lg">★</span>
              <span className="text-white font-bold mr-1">۴.۲</span>
              <span className="text-primary-300 text-sm">از ۵</span>
            </div>
            <p className="text-primary-400 text-xs">بر اساس ۲۵۷ نظر گوگل</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base border-b border-primary-800 pb-2">دسترسی سریع</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="flex items-center gap-2 text-primary-200 hover:text-accent-400 transition-colors text-sm group"
                  >
                    <ChevronLeft size={14} className="text-accent-500 group-hover:translate-x-[-2px] transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base border-b border-primary-800 pb-2">خدمات ما</h3>
            <ul className="space-y-3 text-sm text-primary-200">
              {[
                'حفاظت از شهرک‌های صنعتی',
                'نگهبانی از کارخانه‌ها',
                'حفاظت از مراکز تجاری',
                'خدمات نگهبانی شبانه‌روزی',
                'فروش تجهیزات دفاع شخصی',
                'استخدام نگهبان حرفه‌ای',
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-5 text-base border-b border-primary-800 pb-2">اطلاعات تماس</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-primary-200">
                <MapPin size={16} className="text-accent-400 flex-shrink-0 mt-0.5" />
                <span>تهران، ورامین، بلوار امام رضا، نرسیده به بیمارستان مفتح، روبروی ایران‌خودرو، پلاک ۷۷</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-accent-400 flex-shrink-0" />
                <a href="tel:02136223006" className="text-primary-200 hover:text-white transition-colors isolate" dir="ltr">
                  021 3622 3006
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-accent-400 flex-shrink-0" />
                <a href="mailto:hafezanmatin@gmail.com" className="text-primary-200 hover:text-white transition-colors">hafezanmatin@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-accent-400 flex-shrink-0 mt-0.5" />
                <div className="text-primary-200 space-y-1">
                  <div>شنبه تا چهارشنبه: ۸ تا ۱۶</div>
                  <div>پنجشنبه: ۸ تا ۱۳</div>
                  <div className="text-red-400">جمعه: تعطیل</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-900 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-400">
          <span>© {currentYear} موسسه حفاظتی مراقبتی یگانه حافظان متین — تمامی حقوق محفوظ است</span>
          <span>طراحی و توسعه وب‌سایت حرفه‌ای</span>
        </div>
      </div>
    </footer>
  );
}
