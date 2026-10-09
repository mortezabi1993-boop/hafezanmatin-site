import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { usePageMeta } from './hooks/usePageMeta';

// صفحات غیر اصلی به‌صورت تنبل بارگذاری می‌شوند تا حجم جاوااسکریپت اولیه کاهش یابد.
const Gallery = lazy(() => import('./pages/Gallery'));
const Equipment = lazy(() => import('./pages/Equipment'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Contact = lazy(() => import('./pages/Contact'));

// صفحات قابل پیمایش در سایت — این نوع در Header و Footer نیز استفاده می‌شود.
export type Page = 'home' | 'gallery' | 'equipment' | 'reviews' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  usePageMeta(currentPage);

  // ناوبری بین صفحات با انیمیشن کوتاه محو شدن برای جلوگیری از پرش ناگهانی.
  const navigate = (page: Page) => {
    if (page === currentPage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
  };

  // هش URL را در زمان بارگذاری اولیه می‌خواند تا کاربر مستقیماً به صفحه درست برود.
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as Page;
    const validPages: Page[] = ['home', 'gallery', 'equipment', 'reviews', 'contact'];
    if (validPages.includes(hash)) {
      setCurrentPage(hash);
    }
  }, []);

  useEffect(() => {
    window.location.hash = currentPage === 'home' ? '' : currentPage;
  }, [currentPage]);

  // اسکلتون نمایش داده می‌شود تا زمانی که صفحه تنبل بارگذاری شود.
  const PageSkeleton = () => (
    <div className="flex items-center justify-center py-32">
      <div className="w-10 h-10 border-3 border-primary-200 border-t-primary-700 rounded-full animate-spin" />
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':      return <Home navigate={navigate} />;
      case 'gallery':   return <Suspense fallback={<PageSkeleton />}><Gallery /></Suspense>;
      case 'equipment': return <Suspense fallback={<PageSkeleton />}><Equipment /></Suspense>;
      case 'reviews':   return <Suspense fallback={<PageSkeleton />}><Reviews /></Suspense>;
      case 'contact':   return <Suspense fallback={<PageSkeleton />}><Contact /></Suspense>;
      default:          return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-persian">
      <a href="#main-content" className="skip-link">پرش به محتوای اصلی</a>
      <Header currentPage={currentPage} navigate={navigate} />
      <main
        id="main-content"
        className={`flex-1 transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
