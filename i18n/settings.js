"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptions = exports.defaultNS = exports.locales = exports.fallbackLng = void 0;
exports.fallbackLng = 'en';
exports.locales = [exports.fallbackLng, 'zh-CN', 'sv'];
exports.defaultNS = 'common';
function getOptions(lang, ns) {
    if (lang === void 0) { lang = exports.fallbackLng; }
    if (ns === void 0) { ns = exports.defaultNS; }
    return {
        // debug: true, // Set to true to see console logs
        supportedLngs: exports.locales,
        fallbackLng: exports.fallbackLng,
        lng: lang,
        fallbackNS: exports.defaultNS,
        defaultNS: exports.defaultNS,
        ns: ns,
    };
}
exports.getOptions = getOptions;