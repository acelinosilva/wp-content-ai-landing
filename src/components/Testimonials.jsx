import React, { useEffect, useRef } from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    const handleMouseMove = (e) => {
      sectionRef.current?.querySelectorAll('.testimonial-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => { observer.disconnect(); window.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  const testimonialsList = t('testimonials.list') || [];

  return (
    <section id="testimonials" className="testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <span className="subtitle">{t('testimonials.subtitle')}</span>
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.description')}</p>
        </div>

        <div className="testimonials-grid">
          {Array.isArray(testimonialsList) && testimonialsList.map((testi, index) => (
            <div
              key={index}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="card-mouse-glow"></div>

              {/* Big quote icon */}
              <div className="quote-icon">
                <Quote size={32} />
              </div>

              <div className="stars">
                {[...Array(testi.stars)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--primary)" className="text-primary" />
                ))}
              </div>

              <p className="testi-content">"{testi.content}"</p>

              <div className="testi-footer">
                <div className="testi-avatar" style={{ background: testi.avatarBg }}>
                  {testi.initial}
                </div>
                <div className="testi-info">
                  <div className="testi-name">
                    {testi.name}
                    <CheckCircle size={14} className="verified-icon" />
                  </div>
                  <div className="testi-role">{testi.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .testimonials-section {
          padding: var(--section-padding);
          background: var(--bg-main);
          position: relative;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .testimonial-card {
          padding: 36px;
          border-radius: 6px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .card-mouse-glow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(0,200,150,0.07) 0%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.35s;
          pointer-events: none;
        }
        .testimonial-card:hover .card-mouse-glow { opacity: 1; }

        .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .testimonial-card:hover::before { transform: scaleX(1); }

        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0,200,150,0.25);
          box-shadow: 0 32px 64px -16px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,200,150,0.08);
          background: var(--bg-card-hover);
        }

        .quote-icon {
          color: var(--primary);
          opacity: 0.2;
          margin-bottom: 20px;
          transition: opacity 0.3s;
        }
        .testimonial-card:hover .quote-icon { opacity: 0.4; }

        .stars {
          display: flex;
          gap: 3px;
          margin-bottom: 18px;
        }

        .testi-content {
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.8;
          font-size: 0.95rem;
          margin-bottom: 28px;
          position: relative;
          flex: 1;
        }

        .testi-footer {
          display: flex;
          align-items: center;
          gap: 14px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 22px;
        }

        .testi-avatar {
          width: 46px; height: 46px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          box-shadow: 0 8px 20px -4px rgba(0,0,0,0.4);
          flex-shrink: 0;
        }

        .testi-name {
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .verified-icon { color: var(--primary); }

        .testi-role {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-top: 3px;
        }

        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-card { padding: 28px; }
        }
      `}} />
    </section>
  );
};

export default Testimonials;
