import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import type { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'صفحه اصلی', page: 'home' },
  { label: 'گالری تصاویر', page: 'gallery' },
  { label: 'تجهیزات', page: 'equipment' },
  { label: 'نظرات مشتریان', page: 'reviews' },
  { label: 'تماس با ما', page: 'contact' },
];

export default function Header({ currentPage, navigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تشخیص اسکرول برای تغییر ظاهر هدر (سایه و حاشیه) هنگام پایین آمدن صفحه.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    navigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-950 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:02136223006" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Phone size={14} />
              <span dir="ltr" className="isolate">021 3622 3006</span>
            </a>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-300">شنبه تا چهارشنبه ۸ الی ۱۶ | پنجشنبه ۸ الی ۱۳</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <span>امتیاز گوگل:</span>
            <span className="text-yellow-400">★★★★</span>
            <span className="text-yellow-400/50">★</span>
            <span className="font-semibold text-white">۴.۲</span>
            <span className="text-neutral-400">(۲۵۷ نظر)</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg border-b border-neutral-200'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group"
            >
              <img
                src="/logo100-100.png"
                alt="لوگوی یگانه حافظان متین"
                className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg group-hover:scale-105 transition-transform"
              />
              <div className="text-right leading-tight">
                <div className="font-bold text-primary-900 text-sm md:text-base leading-tight">یگانه حافظان متین</div>
                <div className="text-neutral-500 text-xs hidden sm:block">موسسه حفاظتی مراقبتی</div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="منوی اصلی">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNav(item.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.page
                      ? 'bg-primary-800 text-white shadow-sm'
                      : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA + mobile menu */}
            <div className="flex items-center gap-3">
              <a
                href="tel:02136223006"
                className="hidden sm:flex btn-accent text-sm py-2 px-4"
              >
                <Phone size={16} />
                تماس سریع
              </a>
              <button
                className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="منو"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 border-t border-neutral-200' : 'max-h-0'
          }`}
        >
          <nav className="bg-white px-4 py-3 flex flex-col gap-1" aria-label="منوی موبایل">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === item.page
                    ? 'bg-primary-800 text-white'
                    : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:02136223006"
              className="flex items-center justify-center gap-2 bg-accent-600 text-white font-semibold px-4 py-3 rounded-lg mt-2"
            >
              <Phone size={16} />
              <span dir="ltr" className="isolate">021 3622 3006</span>
              <span>تماس</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
