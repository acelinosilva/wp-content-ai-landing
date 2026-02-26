import React, { useEffect, useRef } from 'react';
import { Settings, Search, Edit3, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stepsList = t('howItWorks.steps');
  const icons = [
    <Settings size={28} />,
    <Search size={28} />,
    <Edit3 size={28} />,
    <Send size={28} />
  ];

  const steps = Array.isArray(stepsList) ? stepsList.map((step, i) => ({
    ...step,
    icon: icons[i] || <Settings size={28} />
  })) : [];


  return (
    <section id="how-it-works" className="how-section" ref={sectionRef}>
      {/* Background decoration */}
      <div className="how-bg-decoration" aria-hidden="true"></div>

      <div className="container">
        <div className="section-title reveal">
          <span className="subtitle">{t('howItWorks.subtitle')}</span>
          <h2>{t('howItWorks.title')}</h2>
          <p>{t('howItWorks.description')}</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-item reveal"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">
                  <div className="connector-line"></div>
                  <div className="connector-dot"></div>
                </div>
              )}

              <div className="step-icon-wrapper">
                <div className="step-icon">
                  {step.icon}
                </div>
                <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="step-detail">
                  <span className="step-detail-dot"></span>
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .how-section {
          padding: var(--section-padding);
          background: linear-gradient(180deg, var(--bg-main) 0%, #060e1f 50%, var(--bg-main) 100%);
          position: relative;
          overflow: hidden;
        }

        .how-bg-decoration {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(0,200,150,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
          margin-top: 20px;
        }

        .step-item {
          padding: 0 20px;
          text-align: center;
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }
        .step-item:hover { transform: translateY(-4px); }

        /* Horizontal connector */
        .step-connector {
          position: absolute;
          top: 52px;
          right: -50%;
          width: 100%;
          z-index: 1;
          display: flex;
          align-items: center;
        }
        .connector-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--primary), rgba(0,200,150,0.2));
          opacity: 0.4;
          position: relative;
        }
        .connector-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--primary);
          opacity: 0.6;
          flex-shrink: 0;
        }

        .step-icon-wrapper {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 28px;
        }

        .step-icon {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          background: linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(15,23,42,0.8) 100%);
          border: 1px solid rgba(0,200,150,0.15);
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.5),
                      inset 0 1px 0 rgba(255,255,255,0.04);
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
          overflow: hidden;
        }

        .step-icon::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, rgba(0,200,150,0.12) 0%, transparent 60%);
        }

        .step-item:hover .step-icon {
          border-color: rgba(0,200,150,0.5);
          box-shadow: 0 20px 50px -10px rgba(0,0,0,0.5),
                      0 0 30px rgba(0,200,150,0.15),
                      inset 0 1px 0 rgba(255,255,255,0.08);
          transform: scale(1.04);
        }

        .step-number {
          position: absolute;
          bottom: -8px;
          right: -8px;
          width: 34px;
          height: 34px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 0.75rem;
          font-family: var(--font-heading);
          letter-spacing: 0;
          box-shadow: 0 4px 12px rgba(0, 200, 150, 0.35);
          z-index: 3;
        }

        .step-content h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: #fff;
          font-weight: 700;
        }

        .step-content p {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.65;
          margin-bottom: 14px;
        }

        .step-detail {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--primary);
          font-weight: 600;
          letter-spacing: 0.02em;
          opacity: 0.8;
        }
        .step-detail-dot {
          width: 4px; height: 4px;
          background: var(--primary);
          border-radius: 50%;
        }

        @media (max-width: 1024px) {
          .steps-container { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .step-connector { display: none; }
        }
        @media (max-width: 640px) {
          .steps-container { grid-template-columns: 1fr; gap: 48px; }
          .step-item { display: flex; text-align: left; gap: 20px; align-items: flex-start; }
          .step-icon-wrapper { margin: 0; flex-shrink: 0; width: 76px; height: 76px; }
        }
      `}} />
    </section>
  );
};

export default HowItWorks;
