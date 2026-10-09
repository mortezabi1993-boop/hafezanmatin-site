import { Star, Users, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'علی محمدی',
    role: 'مدیر کارخانه',
    company: 'کارخانه تولیدی ورامین',
    rating: 5,
    date: 'فروردین ۱۴۰۳',
    text: 'چند سال است که از خدمات یگانه حافظان متین استفاده می‌کنیم. نیروها بسیار حرفه‌ای و قابل اعتماد هستند. همکاری با این موسسه بهترین تصمیمی بود که برای امنیت کارخانه‌مان گرفتیم.',
    helpful: 12,
  },
  {
    id: 2,
    name: 'حسین رضایی',
    role: 'مدیر شهرک صنعتی',
    company: 'شهرک صنعتی ورامین',
    rating: 5,
    date: 'اسفند ۱۴۰۲',
    text: 'بهترین موسسه حفاظتی که تا به حال باهاشون کار کردیم. سابقه و تخصص آنها قابل تحسین است. نیروهایشان همیشه به موقع حاضر بوده‌اند و در موارد اضطراری سریع عمل کرده‌اند.',
    helpful: 18,
  },
  {
    id: 3,
    name: 'مهدی کریمی',
    role: 'صاحب مجتمع تجاری',
    company: 'مجتمع تجاری پردیس',
    rating: 4,
    date: 'دی ۱۴۰۲',
    text: 'خدمات بی‌نقص، نیروهای آموزش‌دیده و پاسخگویی سریع. کاملاً راضی هستم. قیمت‌ها هم منصفانه است. فقط گاهی ارتباط با دفتر کمی دشوار است.',
    helpful: 9,
  },
  {
    id: 4,
    name: 'فاطمه احمدی',
    role: 'مدیر اجرایی',
    company: 'شرکت بازرگانی',
    rating: 5,
    date: 'آبان ۱۴۰۲',
    text: 'بسیار حرفه‌ای و مطمئن. نگهبانانشان کاملاً آموزش دیده‌اند و با احترام با مشتریان برخورد می‌کنند. امنیت مجموعه ما از وقتی این موسسه را انتخاب کردیم بسیار بهتر شده.',
    helpful: 14,
  },
  {
    id: 5,
    name: 'رضا تهرانی',
    role: 'صاحب کارگاه تولیدی',
    company: 'کارگاه صنعتی تهران',
    rating: 4,
    date: 'مهر ۱۴۰۲',
    text: 'موسسه خوبی هستند. خدمات باکیفیت ارائه می‌دهند. نیروها منضبط و وقت‌شناس هستند. به همه کسب‌وکارها در سراسر ایران پیشنهاد می‌کنم.',
    helpful: 7,
  },
  {
    id: 6,
    name: 'محمد نجفی',
    role: 'پیمانکار ساختمانی',
    company: 'شرکت ساختمانی نجفی',
    rating: 5,
    date: 'شهریور ۱۴۰۲',
    text: 'برای حفاظت از پروژه‌های ساختمانی‌مان از یگانه حافظان متین استفاده کردیم. کاملاً رضایتمند. سرعت در ارائه خدمات و صداقت در کار از ویژگی‌های بارز آنهاست.',
    helpful: 11,
  },
  {
    id: 7,
    name: 'زهرا موسوی',
    role: 'مدیر داروخانه',
    company: 'داروخانه دکتر موسوی',
    rating: 5,
    date: 'مرداد ۱۴۰۲',
    text: 'خدمات امنیتی عالی برای داروخانه ما. نیروهای آنها کاملاً حرفه‌ای و با ادب هستند. احساس امنیت واقعی در کار داریم.',
    helpful: 16,
  },
  {
    id: 8,
    name: 'ابراهیم صادقی',
    role: 'مدیر انبار',
    company: 'مجتمع لجستیکی تهران',
    rating: 4,
    date: 'تیر ۱۴۰۲',
    text: 'برای انبارهای بزرگ‌مان به نگهبانان قابل اعتماد نیاز داشتیم. یگانه حافظان متین این نیاز را به بهترین شکل برآورده کرد.',
    helpful: 8,
  },
  {
    id: 9,
    name: 'سعید خوشنویس',
    role: 'صاحب رستوران',
    company: 'رستوران سنتی خوشنویس',
    rating: 4,
    date: 'خرداد ۱۴۰۲',
    text: 'برای پوشش رویدادها و مراسم خاص از خدمات این موسسه استفاده کردیم. کارشان خوب بود و با مشتریان محترمانه رفتار کردند.',
    helpful: 5,
  },
];

const ratingDistribution = [
  { stars: 5, count: 147, pct: 57 },
  { stars: 4, count: 72, pct: 28 },
  { stars: 3, count: 26, pct: 10 },
  { stars: 2, count: 8, pct: 3 },
  { stars: 1, count: 4, pct: 2 },
];

function StarRow({ count, rating }: { count: number; rating: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-neutral-600 w-5 text-center">{count}</span>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300 fill-neutral-300'}
          />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-gradient-to-l from-primary-900 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-accent-400" />
            <span className="text-accent-400 text-sm font-medium">نظرات</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">نظرات مشتریان</h1>
          <p className="text-primary-200 max-w-xl">
            تجربه مشتریان راضی از خدمات حفاظتی یگانه حافظان متین در گوگل.
          </p>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
            {/* Overall */}
            <div className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-primary-900 mb-2">۴.۲</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/30 fill-yellow-400/30'}
                  />
                ))}
              </div>
              <div className="text-neutral-500 text-sm">۲۵۷ نظر در گوگل</div>
              <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
                <ThumbsUp size={14} />
                ۸۵٪ تجربه مثبت
              </div>
            </div>

            {/* Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <StarRow count={r.stars} rating={r.stars} />
                  <div className="flex-1 bg-neutral-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-yellow-400 h-full rounded-full transition-all duration-700"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-neutral-500 w-8 text-left">{r.pct}٪</span>
                  <span className="text-xs text-neutral-400 w-8">({r.count})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="card p-6 flex flex-col border border-neutral-100">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users size={18} className="text-primary-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary-900 text-sm">{review.name}</div>
                      <div className="text-neutral-500 text-xs">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300 fill-neutral-300'}
                      />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <p className="text-neutral-700 text-sm leading-relaxed flex-1 mb-4 italic">"{review.text}"</p>

                {/* Footer */}
                <div className="border-t border-neutral-100 pt-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-accent-600 font-medium">{review.company}</div>
                    <div className="text-xs text-neutral-400">{review.date}</div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-neutral-400">
                    <ThumbsUp size={12} />
                    {review.helpful} نفر مفید یافتند
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source note */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-neutral-50 border border-neutral-200 rounded-2xl px-6 py-4">
            <div className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
              <span className="text-sm font-bold text-blue-600">G</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-semibold text-neutral-800">نظرات از Google Business</div>
              <div className="text-xs text-neutral-500">امتیاز ۴.۲ از ۵ | ۲۵۷ نظر تایید شده</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
