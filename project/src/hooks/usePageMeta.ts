import { useEffect } from 'react';
import type { Page } from '../App';

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

const BASE_URL = 'https://hafezanmatin.com';

const pageMeta: Record<Page, PageMeta> = {
  home: {
    title: 'موسسه حفاظتی مراقبتی یگانه حافظان متین | خدمات حفاظتی ورامین',
    description: 'موسسه حفاظتی مراقبتی یگانه حافظان متین ارائه‌دهنده خدمات حفاظتی و مراقبتی در ورامین. نیروهای متخصص، آموزش‌دیده، همکاری با شهرک‌های صنعتی و پروژه‌های بزرگ. استخدام نگهبان، تجهیزات دفاع شخصی.',
    canonical: `${BASE_URL}/`,
    ogTitle: 'موسسه حفاظتی مراقبتی یگانه حافظان متین',
    ogDescription: 'خدمات حفاظتی و مراقبتی با نیروهای متخصص در ورامین و منطقه تهران',
  },
  gallery: {
    title: 'گالری پروژه‌ها و تصاویر | یگانه حافظان متین',
    description: 'مشاهده نمونه کارها و پروژه‌های حفاظتی انجام‌شده توسط موسسه حفاظتی یگانه حافظان متین در شهرک‌های صنعتی، کارخانه‌ها و مراکز تجاری سراسر ایران.',
    canonical: `${BASE_URL}/#gallery`,
    ogTitle: 'گالری پروژه‌های یگانه حافظان متین',
    ogDescription: 'نمونه کارها و پروژه‌های حفاظتی موسسه یگانه حافظان متین',
  },
  equipment: {
    title: 'تجهیزات دفاع شخصی و نگهبانی | یگانه حافظان متین',
    description: 'خرید و استعلام قیمت انواع تجهیزات دفاع شخصی، نگهبانی و امنیتی: شوکر، افشانه فلفل، باتوم، بی‌سیم، چراغ‌قوه تاکتیکی و آژیر هشداردهنده با ضمانت اصالت کالا.',
    canonical: `${BASE_URL}/#equipment`,
    ogTitle: 'تجهیزات دفاع شخصی و نگهبانی',
    ogDescription: 'خرید و استعلام قیمت تجهیزات دفاع شخصی و نگهبانی',
  },
  reviews: {
    title: 'نظرات مشتریان | یگانه حافظان متین - امتیاز ۴.۲ گوگل',
    description: 'نظرات واقعی مشتریان موسسه حفاظتی یگانه حافظان متین در گوگل. امتیاز ۴.۲ از ۵ بر اساس ۲۵۷ نظر. تجربه کارفرمایان از خدمات حفاظتی و نگهبانی.',
    canonical: `${BASE_URL}/#reviews`,
    ogTitle: 'نظرات مشتریان یگانه حافظان متین',
    ogDescription: 'تجربه مشتریان راضی از خدمات حفاظتی یگانه حافظان متین',
  },
  contact: {
    title: 'تماس با یگانه حافظان متین | آدرس و شماره تلفن ورامین',
    description: 'تماس با موسسه حفاظتی مراقبتی یگانه حافظان متین در ورامین. آدرس: بلوار امام رضا، روبروی ایران‌خودرو، پلاک ۷۷. تلفن: ۰۲۱-۳۶۲۲۳۰۰۶. ایمیل: hafezanmatin@gmail.com',
    canonical: `${BASE_URL}/#contact`,
    ogTitle: 'تماس با یگانه حافظان متین',
    ogDescription: 'آدرس و شماره تماس موسسه حفاظتی یگانه حافظان متین در ورامین',
  },
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageMeta(page: Page) {
  useEffect(() => {
    const meta = pageMeta[page];
    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setCanonical(meta.canonical);
    setMeta('property', 'og:title', meta.ogTitle);
    setMeta('property', 'og:description', meta.ogDescription);
    setMeta('property', 'og:url', meta.canonical);
    setMeta('name', 'twitter:title', meta.ogTitle);
    setMeta('name', 'twitter:description', meta.ogDescription);
  }, [page]);
}
