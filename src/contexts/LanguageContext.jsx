import React, { createContext, useState, useContext, useEffect } from 'react';
import pt from '../locales/pt.json';
import en from '../locales/en.json';

const translations = {
    pt,
    en
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        const langParam = params.get('lang');
        if (langParam === 'en' || langParam === 'pt') {
            return langParam;
        }
        const saved = localStorage.getItem('language');
        return saved || 'pt'; // default to portuguese
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';

        // Update URL
        const url = new URL(window.location);
        url.searchParams.set('lang', language);
        window.history.replaceState({}, '', url);

        // Update SEO Tags
        const title = language === 'pt'
            ? 'WP Content AI: Melhor Plugin IA para WordPress - Automação Total e SEO'
            : 'WP Content AI: Best AI Plugin for WordPress - Total Automation and SEO';

        const description = language === 'pt'
            ? 'Automatize seu WordPress com GPT-4o e Claude. O WP Content AI gera artigos em massa, humaniza textos e cria imagens realistas. Economize 20h/semana e domine o Google!'
            : 'Automate your WordPress with GPT-4o and Claude. WP Content AI generates bulk articles, humanizes texts, and creates realistic images. Save 20h/week and dominate Google!';

        document.title = title;

        const metaTags = {
            'meta[name="description"]': description,
            'meta[property="og:title"]': title,
            'meta[property="og:description"]': description,
            'meta[property="twitter:title"]': title,
            'meta[property="twitter:description"]': description
        };

        for (const [selector, content] of Object.entries(metaTags)) {
            const el = document.querySelector(selector);
            if (el) el.setAttribute('content', content);
        }
    }, [language]);

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key; // fallback to key
            }
        }
        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
