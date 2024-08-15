import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}

export function getCurrentPageLang(url: URL,lang: keyof typeof ui) {
    const currentPath = url.pathname;

    if (currentPath === '/') return lang;

    const [,currentLang,...slug] = currentPath.split('/');

    const slugPath = slug.join('/');


    return "/" + lang + "/" + slugPath;
}