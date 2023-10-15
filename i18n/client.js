"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslation = void 0;
var react_1 = require("react");
var i18next_1 = require("i18next");
var react_i18next_1 = require("react-i18next");
var i18next_resources_to_backend_1 = require("i18next-resources-to-backend");
var i18next_browser_languagedetector_1 = require("i18next-browser-languagedetector");
var settings_1 = require("./settings");
var runsOnServerSide = window == 'undefined';
i18next_1.default
    .use(react_i18next_1.initReactI18next)
    .use(i18next_browser_languagedetector_1.default)
    .use((0, i18next_resources_to_backend_1.default)(function (language, namespace) {
    return Promise.resolve().then(function () { return require('./locales/${language}/${namespace}.json'); });
}))
    .init(__assign(__assign({}, (0, settings_1.getOptions)()), { lng: undefined, detection: {
        order: ['path', 'htmlTag'],
    }, preload: runsOnServerSide ? settings_1.locales : [] }));
function useTranslation(lng, ns) {
    var translator = useTransAlias(ns);
    var i18n = translator.i18n;
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
    }
    else {
        // Use our custom implementation when running on client side
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useCustomTranslationImplem(i18n, lng);
    }
    return translator;
}
exports.useTranslation = useTranslation;
function useCustomTranslationImplem(i18n, lng) {
    var _a = (0, react_1.useState)(i18n.resolvedLanguage), activeLng = _a[0], setActiveLng = _a[1];
    // This effect updates the active language state variable when the resolved language changes,
    (0, react_1.useEffect)(function () {
        if (activeLng === i18n.resolvedLanguage)
            return;
        setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    // This effect changes the language of the application when the lng prop changes.
    (0, react_1.useEffect)(function () {
        if (!lng || i18n.resolvedLanguage === lng)
            return;
        i18n.changeLanguage(lng);
    }, [lng, i18n]);
}
