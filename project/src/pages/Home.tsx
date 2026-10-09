import { useEffect, useRef, useState } from 'react';
import {
  Shield, Users, Award, CheckCircle, ArrowLeft,
  Building2, Eye, Lock, Star, ChevronLeft,
  Phone, Zap, Target, Clock
} from 'lucide-react';
import type { Page } from '../App';

interface HomeProps {
  navigate: (page: Page) => void;
}

// انیمیشن شمارش عدد هنگام ظاهر شدن کارت در viewport.
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // IntersectionObserver برای شروع انیمیشن فقط وقتی کارت در صفحه قابل دیدن است.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCard({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count.toLocaleString('fa-IR')}{suffix}
      </div>
      <div className="text-primary-200 text-sm">{label}</div>
    </div>
  );
}

const services = [
  {
    icon: Building2,
    title: 'حفاظت صنعتی',
    desc: 'تامین نیرو و خدمات حفاظتی برای شهرک‌های صنعتی، کارخانه‌ها و مجتمع‌های تولیدی با استانداردهای بالا.',
    color: 'bg-primary-50 text-primary-700',
  },
  {
    icon: Eye,
    title: 'مراقبت ۲۴ ساعته',
    desc: 'نگهبانی شبانه‌روزی با نیروهای آموزش‌دیده و مجهز به تجهیزات پیشرفته ارتباطی.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: Lock,
    title: 'حفاظت از اماکن',
    desc: 'تامین امنیت مراکز تجاری، ادارات، بانک‌ها و مکان‌های عمومی با بالاترین ضریب ایمنی.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: Shield,
    title: 'نگهبانی تخصصی',
    desc: 'نگهبانان آموزش‌دیده با مجوز رسمی از نیروی انتظامی، با سابقه کار در پروژه‌های بزرگ.',
    color: 'bg-red-50 text-red-700',
  },
  {
    icon: Zap,
    title: 'واکنش سریع',
    desc: 'تیم واکنش سریع آماده پاسخگویی در کوتاه‌ترین زمان ممکن به هر نوع حادثه امنیتی.',
    color: 'bg-accent-50 text-accent-800',
  },
  {
    icon: Target,
    title: 'حفاظت پروژه‌ای',
    desc: 'ارائه خدمات حفاظتی برای پروژه‌های ساختمانی بزرگ و رویدادهای خاص در سطح منطقه.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: Shield,
    title: 'تجهیزات دفاع شخصی',
    desc: 'مجهز بودن نگهبانان به تجهیزات دفاع شخصی برای افزایش آمادگی و ایمنی در محل خدمت.',
    color: 'bg-accent-50 text-accent-800',
  },
  {
    icon: Building2,
    title: 'خودروهای گشتی',
    desc: 'مجهز بودن به خودروهای گشتی برای پوشش بهتر مناطق و واکنش سریع‌تر به رویدادها.',
    color: 'bg-primary-50 text-primary-700',
  },
];

const whyUs = [
  { icon: Award, title: 'مجوز رسمی از فراجا', desc: 'دارای مجوز رسمی از نیروی انتظامی جمهوری اسلامی ایران' },
  { icon: Users, title: 'نیروهای متخصص', desc: 'تیمی از نگهبانان آموزش‌دیده با سابقه کار در پروژه‌های بزرگ' },
  { icon: CheckCircle, title: 'سابقه درخشان', desc: 'سال‌ها تجربه در ارائه خدمات حفاظتی در سراسر ایران' },
  { icon: Clock, title: 'پشتیبانی ۲۴/۷', desc: 'در دسترس بودن شبانه‌روزی برای پاسخگویی به نیازهای مشتریان' },
  { icon: Shield, title: 'نیروهای آموزش‌دیده و متخصص', desc: 'نیروهای آموزش دیده و متخصص تحت نظر افسران با سابقه نیروی انتظامی' },
];

const clients = [
  { name: 'شهرک صنعتی ورامین', type: 'شهرک صنعتی', years: '۵+ سال' },
  { name: 'ایران‌خودرو منطقه', type: 'صنعتی', years: '۳+ سال' },
  { name: 'مجتمع‌های تجاری', type: 'تجاری', years: '۴+ سال' },
  { name: 'مراکز درمانی', type: 'بهداشتی', years: '۲+ سال' },
  { name: 'پروژه‌های ساختمانی', type: 'عمرانی', years: '۶+ سال' },
  { name: 'انبارها و گمرک', type: 'لجستیک', years: '۳+ سال' },
];

export default function Home({ navigate }: HomeProps) {
  const [heroVisible, setHeroVisible] = useState(false);

  // انیمیشن ظاهر شدن تدریجی بخش قهرمان پس از بارگذاری صفحه.
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/IMG_0115.png"
            alt="نیروهای حفاظتی و خودروهای گشتی یگانه حافظان متین"
            className="w-full h-full object-cover"
            loading="eager"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div
            className={`max-w-2xl transition-all duration-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="mb-6 flex items-center gap-4">
              <img
                src="/logo500.png"
                alt="لوگوی یگانه حافظان متین"
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
              />
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full">
                <Shield size={14} className="text-accent-400" />
                <span>موسسه حفاظتی مراقبتی دارای مجوز رسمی</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              یگانه حافظان متین
              <br />
              <span className="text-accent-400">امنیت پایدار</span>
              {' '}برای کسب‌وکارها
            </h1>

            <p className="text-primary-100 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
              بیش از یک دهه تجربه در ارائه خدمات حفاظتی و مراقبتی با نیروهای متخصص و آموزش‌دیده در سراسر ایران.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('contact')}
                className="btn-accent text-base px-8 py-4"
              >
                <Phone size={18} />
                مشاوره رایگانه
              </button>
              <button
                onClick={() => navigate('gallery')}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                <ArrowLeft size={18} />
                مشاهده پروژه‌ها
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { val: '۴.۲', label: 'امتیاز گوگل' },
                { val: '۲۵۷+', label: 'نظر مشتری' },
                { val: '۱۰+', label: 'سال سابقه' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <div className="w-1 h-8 bg-accent-400 rounded-full" />
                  <div>
                    <div className="text-white font-bold text-lg">{s.val}</div>
                    <div className="text-primary-300 text-xs">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary-800 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-x-reverse divide-primary-700">
            <StatCard value={50} label="پروژه فعال" suffix="+" />
            <StatCard value={200} label="مشتری راضی" suffix="+" />
            <StatCard value={10} label="سال سابقه" suffix="+" />
            <StatCard value={100} label="نیروی متخصص" suffix="+" />
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <article className="card border border-primary-100 p-6 sm:p-8 md:p-10 text-center">
            <div className="badge mx-auto mb-4">معرفی</div>
            <h2 className="section-title text-2xl md:text-3xl">معرفی یگانه حافظان متین</h2>
            <p className="text-neutral-600 text-base md:text-lg leading-loose text-right md:text-center">
              مؤسسه خدمات حفاظتی مراقبتی یگانه حافظان متین، با حدود ۱۱ سال فعالیت مستمر و برخورداری از ساختار مدیریتی و عملیاتی منسجم، در حوزه حفاظت، مراقبت و تأمین امنیت مجموعه‌ها فعالیت می‌کند. این مجموعه با ۱۵۰ نیروی حفاظتی فعال، بیش از ۳۰ پروژه فعال و بیش از ۵۰ پروژه و قرارداد مستقل، خدمات خود را با تکیه بر نیروی انسانی، نظارت مستمر، تجهیزات و فناوری‌های حفاظتی ارائه می‌دهد.
            </p>
          </article>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-4">خدمات ما</div>
            <h2 className="section-title">خدمات حفاظتی و مراقبتی</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              ما طیف گسترده‌ای از خدمات حفاظتی و مراقبتی را با بالاترین استانداردهای کیفی ارائه می‌دهیم.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card p-6 group hover:border-primary-200 border border-transparent">
                <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <s.icon size={22} />
                </div>
                <h3 className="font-bold text-primary-900 text-lg mb-2">{s.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="badge mb-4">چرا ما؟</div>
              <h2 className="section-title">بهترین انتخاب برای امنیت کسب‌وکار شما</h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                موسسه حفاظتی مراقبتی یگانه حافظان متین با سال‌ها تجربه، یکی از شناخته‌شده‌ترین و معتمدترین موسسات حفاظتی کشور است. همکاری با شهرک‌های صنعتی و پروژه‌های بزرگ در سراسر ایران نشان‌دهنده اعتماد مشتریان به ماست.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {whyUs.map((w) => (
                  <div key={w.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <w.icon size={18} className="text-primary-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary-900 text-sm mb-0.5">{w.title}</div>
                      <div className="text-neutral-500 text-xs leading-relaxed">{w.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('contact')}
                className="btn-primary"
              >
                <Phone size={16} />
                با ما تماس بگیرید
              </button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/about copy.webp"
                  alt="تیم یگانه حافظان متین"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                  width={940}
                  height={627}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-900 text-sm">مجوز رسمی فراجا</div>
                    <div className="text-neutral-500 text-xs">تایید شده توسط نیروی انتظامی</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -left-5 bg-primary-800 rounded-2xl shadow-xl p-5 text-white">
                <div className="text-3xl font-bold">۱۰+</div>
                <div className="text-primary-200 text-xs">سال تجربه</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients / Projects */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-4">مشتریان و همکاران</div>
            <h2 className="section-title">کاتالوگ پروژه‌ها و مشتریان</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              افتخار همکاری با صدها کسب‌وکار و سازمان در سراسر ایران را داریم.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clients.map((c) => (
              <div key={c.name} className="card p-5 flex items-center gap-4 hover:border-primary-200 border border-transparent">
                <div className="w-12 h-12 bg-primary-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-primary-900 text-sm truncate">{c.name}</div>
                  <div className="text-neutral-500 text-xs">{c.type}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-accent-600 font-bold text-sm">{c.years}</div>
                  <div className="text-neutral-400 text-xs">همکاری</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('gallery')}
              className="btn-outline"
            >
              <ArrowLeft size={16} />
              مشاهده همه پروژه‌ها
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="badge mx-auto mb-4">نظرات مشتریان</div>
            <h2 className="section-title">مشتریان راضی از خدمات ما</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="text-yellow-400 text-2xl">★★★★</span>
              <span className="text-yellow-400/40 text-2xl">★</span>
              <span className="text-2xl font-bold text-primary-900 mr-1">۴.۲</span>
              <span className="text-neutral-500">از ۵ | ۲۵۷ نظر در گوگل</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'علی محمدی',
                role: 'مدیر کارخانه',
                text: 'چند سال است که از خدمات یگانه حافظان متین استفاده می‌کنیم. نیروها بسیار حرفه‌ای و قابل اعتماد هستند.',
                rating: 5,
              },
              {
                name: 'حسین رضایی',
                role: 'مدیر شهرک صنعتی',
                text: 'بهترین موسسه حفاظتی که تا به حال باهاشون کار کردیم. سابقه و تخصص آنها قابل تحسین است.',
                rating: 5,
              },
              {
                name: 'مهدی کریمی',
                role: 'صاحب مجتمع تجاری',
                text: 'خدمات بی‌نقص، نیروهای آموزش‌دیده و پاسخگویی سریع. کاملاً راضی هستم.',
                rating: 4,
              },
            ].map((review) => (
              <div key={review.name} className="card p-6 border border-neutral-100">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300 fill-neutral-300'}
                    />
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-5 italic">"{review.text}"</p>
                <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
                  <div className="w-9 h-9 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users size={16} className="text-primary-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900 text-sm">{review.name}</div>
                    <div className="text-neutral-500 text-xs">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => navigate('reviews')} className="btn-outline">
              <ChevronLeft size={16} />
              مشاهده همه نظرات
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            آماده همکاری با شما هستیم
          </h2>
          <p className="text-primary-200 text-lg mb-8">
            برای دریافت مشاوره رایگانه و استعلام قیمت خدمات حفاظتی همین امروز با ما تماس بگیرید.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="tel:02136223006" className="btn-accent text-base px-8 py-4">
              <Phone size={18} />
              <span dir="ltr" className="isolate">021 3622 3006</span>
              تماس الان
            </a>
            <button onClick={() => navigate('contact')} className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-all">
              <ArrowLeft size={18} />
              فرم تماس
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
