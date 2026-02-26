import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    // Reveal only the section title and container — not individual items
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const faqsData = t('faq.list');
  const faqs = Array.isArray(faqsData) ? faqsData : [];

  return (
    <section id="faq" className="faq-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <span className="subtitle">{t('faq.subtitle')}</span>
          <h2>{t('faq.title')}</h2>
          <p>{t('faq.description')}</p>
        </div>

        <div className="faq-container reveal">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="faq-question">
                <div className="faq-num">{String(index + 1).padStart(2, '0')}</div>
                <h3>{faq.question}</h3>
                <div className="faq-chevron">
                  <ChevronDown size={20} />
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .faq-section {
          padding: var(--section-padding);
          background: linear-gradient(180deg, var(--bg-main) 0%, #050d1a 50%, var(--bg-main) 100%);
        }

        .faq-container {
          max-width: 780px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(0,200,150,0.2);
          background: var(--bg-card-hover);
        }

        .faq-item.open {
          border-color: rgba(0,200,150,0.3);
          background: linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(8,16,32,0.9) 100%);
          box-shadow: 0 12px 32px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,200,150,0.08);
        }

        .faq-question {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          user-select: none;
        }

        .faq-num {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--primary);
          font-family: var(--font-heading);
          opacity: 0.5;
          flex-shrink: 0;
          letter-spacing: 0.04em;
          transition: opacity 0.25s ease;
        }
        .faq-item.open .faq-num { opacity: 1; }

        .faq-question h3 {
          font-size: 1.05rem;
          font-weight: 600;
          flex: 1;
          color: var(--text-main);
          transition: color 0.25s ease;
          line-height: 1.4;
          font-family: var(--font-main);
          letter-spacing: 0;
        }

        .faq-item.open .faq-question h3,
        .faq-item:hover .faq-question h3 {
          color: var(--primary);
        }

        .faq-chevron {
          flex-shrink: 0;
          color: var(--text-muted);
          transform: rotate(0deg);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s ease;
          display: flex;
          align-items: center;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
          color: var(--primary);
        }

        /* Clean, reliable height animation — no transition on reveal */
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.38s ease;
          padding-left: 56px;
          padding-right: 24px;
        }

        .faq-item.open .faq-answer {
          max-height: 500px;
          transition: max-height 0.38s ease;
          padding-bottom: 24px;
        }

        .faq-answer p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.93rem;
        }

        @media (max-width: 640px) {
          .faq-answer { padding-left: 24px; }
        }
      `}} />
    </section>
  );
};

export default FAQ;
