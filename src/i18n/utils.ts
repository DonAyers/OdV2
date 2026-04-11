import { ui, defaultLang, type UIKey } from './ui';

export function getLangFromUrl(url: URL): 'en' | 'it' {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'it') return lang;
  return defaultLang;
}

export function useTranslations(lang: 'en' | 'it') {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: 'en' | 'it', path: string): string {
  return `/${lang}${path.startsWith('/') ? path : '/' + path}`;
}

export function getOtherLang(lang: 'en' | 'it'): 'en' | 'it' {
  return lang === 'en' ? 'it' : 'en';
}
