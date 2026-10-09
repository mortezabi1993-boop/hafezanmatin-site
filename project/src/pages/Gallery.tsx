import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, Calendar, Building2, Shield } from 'lucide-react';

const categories = ['همه', 'شهرک صنعتی', 'کارخانه', 'تجاری', 'مراسم'];

const projects = [
  {
    id: 1,
    title: 'افتتاح رسمی دفتر یگانه حافظان متین',
    category: 'مراسم',
    image: '/about1.webp',
    client: 'یگانه حافظان متین',
    year: '۱۴۰۰',
    duration: 'دائمی',
    desc: 'افتتاح رسمی دفتر مرکزی موسسه با حضور مقامات نیروی انتظامی و مسئولین محترم.',
  },
  {
    id: 2,
    title: 'حفاظت از کارخانه صنعتی',
    category: 'کارخانه',
    image: '/assets/images/IMG_0085.png',
    client: 'مجتمع صنعتی ورامین',
    year: '۱۴۰۱',
    duration: '۳ سال+',
    desc: 'تامین نیروی حفاظتی و مراقبتی برای یکی از کارخانه‌های بزرگ صنعتی منطقه ورامین.',
  },
  {
    id: 3,
    title: 'نیروهای حفاظتی در پروژه صنعتی',
    category: 'شهرک صنعتی',
    image: '/assets/images/IMG_0081.JPG',
    client: 'شهرک صنعتی ورامین',
    year: '۱۴۰۲',
    duration: '۵ سال+',
    desc: 'همکاری مستمر با شهرک صنعتی ورامین در تامین نیرو و خدمات حفاظتی تخصصی.',
  },
  {
    id: 4,
    title: 'تیم گشت‌زنی موتوری و خودرویی',
    category: 'شهرک صنعتی',
    image: '/factory2.webp',
    client: 'پروژه‌های منطقه‌ای',
    year: '۱۳۹۹',
    duration: 'مستمر',
    desc: 'تیم گشت‌زنی مجهز به موتورسیکلت و خودرو برای پوشش مناطق وسیع صنعتی و تجاری.',
  },
  {
    id: 5,
    title: 'مدیریت حرفه‌ای موسسه',
    category: 'تجاری',
    image: '/about copy.webp',
    client: 'دفتر مرکزی',
    year: '۱۴۰۲',
    duration: 'دائمی',
    desc: 'مدیریت حرفه‌ای و تخصصی موسسه با تکیه بر تجربه و دانش به‌روز در حوزه امنیت.',
  },
  {
    id: 6,
    title: 'نگهبانی از مراکز صنعتی',
    category: 'کارخانه',
    image: '/factory.webp',
    client: 'مراکز تولیدی ورامین',
    year: '۱۴۰۱',
    duration: '۴ سال+',
    desc: 'ارائه خدمات نگهبانی تخصصی به مراکز تولیدی و صنعتی در منطقه ورامین.',
  },
];

// فیلتر کردن پروژه‌ها بر اساس دسته‌بندی انتخاب‌شده.
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('همه');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // بستن Lightbox با کلید Escape و مدیریت focus.
  const closeLightbox = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [selectedProject, closeLightbox]);

  const filtered = activeCategory === 'همه'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Page header */}
      <section className="bg-gradient-to-l from-primary-900 to-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-accent-400" />
            <span className="text-accent-400 text-sm font-medium">پروژه‌های ما</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">گالری تصاویر و پروژه‌ها</h1>
          <p className="text-primary-200 max-w-xl">
            مشاهده نمونه کارها و پروژه‌های انجام شده توسط یگانه حافظان متین در سراسر ایران.
          </p>
        </div>
      </section>

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
                {cat === 'همه' && (
                  <span className="mr-1.5 bg-primary-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {projects.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedProject(project); }}
                tabIndex={0}
                role="button"
                aria-label={`مشاهده پروژه ${project.title}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-3">
                        <ZoomIn size={20} className="text-primary-800" />
                      </div>
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-primary-800 text-white text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-primary-900 mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-neutral-500 text-sm line-clamp-2 mb-4">{project.desc}</p>
                  <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
                    <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                      <Building2 size={13} />
                      <span className="truncate max-w-[120px]">{project.client}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-accent-600 font-semibold">
                      <Calendar size={13} />
                      {project.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-neutral-400">
              <Shield size={48} className="mx-auto mb-4 opacity-30" />
              <p>پروژه‌ای در این دسته‌بندی یافت نشد.</p>
            </div>
          )}
        </div>
      </section>

      {/* Client logos section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">شرکت‌های طرف قرارداد</h2>
            <p className="section-subtitle">افتخار همکاری با معتبرترین سازمان‌ها و شرکت‌های منطقه، از جمله شرکت شنزار</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'سیمر', logo: '/download_(1).png' },
              { name: 'DATEES', logo: '/download_(2).png' },
              { name: 'Kimia Kala', logo: '/download.png' },
              { name: 'شنزار', logo: '/image.png' },
            ].map((client) => (
              <div
                key={client.name}
                className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col items-center gap-4 hover:border-primary-300 hover:shadow-md transition-all duration-200"
              >
                <div className="h-20 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-20 max-w-[180px] object-contain"
                  />
                </div>
                <span className="text-neutral-600 text-sm text-center font-medium border-t border-neutral-100 pt-3 w-full text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                width={800}
                height={400}
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 left-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="بستن"
              >
                <X size={18} />
              </button>
              <span className="absolute bottom-3 right-3 bg-primary-800 text-white text-xs px-3 py-1 rounded-full">
                {selectedProject.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-primary-900 text-xl mb-2">{selectedProject.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-5">{selectedProject.desc}</p>
              <div className="grid grid-cols-3 gap-4 bg-neutral-50 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-xs text-neutral-500 mb-1">کارفرما</div>
                  <div className="text-sm font-semibold text-primary-900">{selectedProject.client}</div>
                </div>
                <div className="text-center border-x border-neutral-200">
                  <div className="text-xs text-neutral-500 mb-1">سال شروع</div>
                  <div className="text-sm font-semibold text-primary-900">{selectedProject.year}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-neutral-500 mb-1">مدت همکاری</div>
                  <div className="text-sm font-semibold text-accent-600">{selectedProject.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
