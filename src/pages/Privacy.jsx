import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy = () => {
    const { t } = useLanguage();
    const sections = t('privacy.sections') || [];

    return (
        <div className="legal-page">
            <div className="container py-20">
                <Link to="/" className="back-link mb-8">
                    <ArrowLeft size={20} />
                    {t('common.backToHome')}
                </Link>

                <h1 className="mb-12">{t('privacy.title')}</h1>

                <div className="legal-content glass-effect p-8 md:p-12 rounded-3xl border border-white/5">
                    <section className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="text-primary" size={32} />
                            <h2 className="m-0">{t('privacy.subtitle')}</h2>
                        </div>
                        <p>{t('privacy.description')}</p>
                    </section>

                    {Array.isArray(sections) && sections.map((s, i) => (
                        <section className="mb-8" key={i}>
                            <h2>{s.title}</h2>
                            <p>{s.content}</p>
                        </section>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .legal-page { background: var(--bg-main); min-height: 100vh; color: #fff; }
                .back-link { display: flex; align-items: center; gap: 8px; color: var(--primary); font-weight: 600; text-decoration: none; transition: var(--transition); }
                .back-link:hover { transform: translateX(-5px); }
                .legal-content h2 { font-size: 1.5rem; color: var(--primary); margin-bottom: 16px; margin-top: 32px; }
                .legal-content p { color: var(--text-muted); line-height: 1.8; margin-bottom: 16px; }
                h1 { font-size: 3.5rem; font-weight: 850; letter-spacing: -2px; }
                .m-0 { margin: 0; }
                .flex { display: flex; }
                .items-center { align-items: center; }
                .gap-3 { gap: 0.75rem; }
            `}} />
        </div>
    );
};

export default Privacy;
