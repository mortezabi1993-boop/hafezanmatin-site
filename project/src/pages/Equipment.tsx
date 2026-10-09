import { useState } from 'react';
import { Phone, Shield, Zap, Wind, Lightbulb, Radio, Eye, AlertTriangle, CheckCircle } from 'lucide-react';

const categories = ['همه', 'دفاع شخصی', 'ارتباطی', 'نظارتی', 'تجهیزات نگهبانی'];

const equipment = [
  {
    id: 1,
    name: 'شوکر برقی حرفه‌ای',
    category: 'دفاع شخصی',
    icon: Zap,
    badge: 'پرفروش',
    badgeColor: 'bg-red-100 text-red-700',
    desc: 'شوکر برقی چندمنظوره با ولتاژ بالا، مناسب برای دفاع شخصی. دارای چراغ‌قوه تعبیه‌شده و شارژ USB.',
    features: ['ولتاژ بالا', 'چراغ‌قوه داخلی', 'شارژ USB', 'جعبه محافظ'],
    usage: 'دفاع شخصی و نگهبانی',
  },
  {
    id: 2,
    name: 'افشانه فلفل (اسپری دفاعی)',
    category: 'دفاع شخصی',
    icon: Wind,
    badge: 'موجود',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'اسپری فلفل قوی با برد موثر بالا، مناسب برای دفاع شخصی زنان و نگهبانان. کاملاً قانونی.',
    features: ['برد بالا', 'اثر فوری', 'قابل حمل', 'قانونی'],
    usage: 'دفاع شخصی',
  },
  {
    id: 3,
    name: 'باتوم تله‌سکوپی',
    category: 'دفاع شخصی',
    icon: Shield,
    badge: 'موجود',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'باتوم تله‌سکوپی فلزی مقاوم از جنس استیل، مناسب برای نگهبانان حرفه‌ای. قابل حمل و مقاوم.',
    features: ['استیل مقاوم', 'تله‌سکوپی', 'قابل حمل', 'دوام بالا'],
    usage: 'نگهبانی حرفه‌ای',
  },
  {
    id: 4,
    name: 'دستبند بازدارنده (دستبند پلیسی)',
    category: 'تجهیزات نگهبانی',
    icon: Shield,
    badge: 'موجود',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'دستبند فلزی با کیفیت بالا و قفل ایمن، برای استفاده توسط نگهبانان دارای مجوز.',
    features: ['فلز با کیفیت', 'قفل ایمن', 'استاندارد', 'دوام بالا'],
    usage: 'نگهبانی مجاز',
  },
  {
    id: 5,
    name: 'بی‌سیم دستی حرفه‌ای',
    category: 'ارتباطی',
    icon: Radio,
    badge: 'پیشنهادی',
    badgeColor: 'bg-blue-100 text-blue-700',
    desc: 'دستگاه بی‌سیم دوطرفه با برد بالا برای ارتباط تیمی نگهبانان. مقاوم در برابر آب و گرد.',
    features: ['برد بالا', 'ضد آب', 'باطری قوی', 'صدای واضح'],
    usage: 'ارتباطات تیمی',
  },
  {
    id: 6,
    name: 'چراغ‌قوه تاکتیکی LED',
    category: 'تجهیزات نگهبانی',
    icon: Lightbulb,
    badge: 'موجود',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'چراغ‌قوه LED قوی با نور بسیار روشن برای عملیات شبانه. مقاوم در برابر ضربه و آب.',
    features: ['LED قوی', 'ضدضربه', 'ضدآب', 'دوام بالا'],
    usage: 'گشت‌زنی شبانه',
  },
  {
    id: 7,
    name: 'دوربین مداربسته امنیتی',
    category: 'نظارتی',
    icon: Eye,
    badge: 'استعلام',
    badgeColor: 'bg-amber-100 text-amber-700',
    desc: 'دوربین‌های مداربسته با کیفیت تصویر بالا برای نظارت بر محیط. مناسب برای شهرک‌های صنعتی.',
    features: ['HD کیفیت', 'دید در شب', 'دیدزاویه‌عریض', 'ضدآب'],
    usage: 'نظارت و مانیتورینگ',
  },
  {
    id: 8,
    name: 'آژیر هشداردهنده',
    category: 'تجهیزات نگهبانی',
    icon: AlertTriangle,
    badge: 'موجود',
    badgeColor: 'bg-green-100 text-green-700',
    desc: 'آژیر الکترونیکی چندتن با صدای بلند برای هشدار در موارد اضطراری. نصب آسان و باطری داخلی.',
    features: ['صدای بلند', 'نصب آسان', 'باطری داخلی', 'چندتن'],
    usage: 'هشدار اضطراری',
  },
];

// فیلتر کردن تجهیزات بر اساس دسته‌بندی انتخاب‌شده.
export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState('همه');

  const filtered = activeCategory === 'همه'
    ? equipment
    : equipment.filter((e) => e.category === activeCategory);

  return (
    <div>
      {/* Page header */}
      <section className="bg-gradient-to-l from-primary-900 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-accent-400" />
            <span className="text-accent-400 text-sm font-medium">محصولات</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">تجهیزات دفاع شخصی</h1>
          <p className="text-primary-200 max-w-xl">
            خرید و استعلام قیمت انواع تجهیزات دفاع شخصی، نگهبانی و امنیتی با ضمانت اصالت کالا.
          </p>
        </div>
      </section>

      {/* Notice */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-amber-800 text-sm">
            <AlertTriangle size={16} className="flex-shrink-0" />
            <span>
              فروش تجهیزات دفاع شخصی طبق قوانین جمهوری اسلامی ایران انجام می‌شود. برخی محصولات نیاز به ارائه مدرک شناسایی دارند.
            </span>
          </div>
        </div>
      </div>

      {/* Filter */}
      <section className="bg-white border-b border-neutral-200 sticky top-16 md:top-[124px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 py-3 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-800 text-white shadow-sm'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-primary-50 hover:text-primary-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div key={item.id} className="card overflow-hidden flex flex-col group">
                {/* Icon area */}
                <div className="h-36 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-3 right-3 w-16 h-16 border border-white rounded-full" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 border border-white rounded-full" />
                  </div>
                  <item.icon size={52} className="text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-primary-900 leading-tight">{item.name}</h3>
                  </div>
                  <span className="inline-block bg-neutral-100 text-neutral-600 text-xs px-2 py-0.5 rounded-full mb-3">
                    {item.category}
                  </span>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1.5 mb-4">
                    {item.features.map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-neutral-600">
                        <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-neutral-100 pt-3">
                    <div className="text-xs text-neutral-500 mb-2">کاربرد: {item.usage}</div>
                    <a
                      href="tel:02136223006"
                      className="flex items-center justify-center gap-2 w-full bg-primary-800 hover:bg-primary-900 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
                    >
                      <Phone size={14} />
                      استعلام قیمت
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Shield size={40} className="text-primary-700 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary-900 mb-3">نیاز به مشاوره دارید؟</h2>
          <p className="text-neutral-600 mb-6">
            کارشناسان ما آماده‌اند تا بهترین تجهیزات را متناسب با نیاز و بودجه شما پیشنهاد دهند.
          </p>
          <a href="tel:02136223006" className="btn-primary text-base px-8 py-4 mx-auto">
            <Phone size={18} />
            <span dir="ltr" className="isolate">021 3622 3006</span>
            تماس با کارشناس
          </a>
        </div>
      </section>
    </div>
  );
}
