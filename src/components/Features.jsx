import React, { useEffect, useRef } from 'react';
import {
  FileText, Image as ImageIcon, Search, RefreshCw,
  Settings, Zap, Shield, Globe, Youtube, Languages
} from 'lucide-react';

const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach(el => observer.observe(el));

    // Mouse glow on cards
    const handleMouseMove = (e) => {
      sectionRef.current?.querySelectorAll('.feature-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => { observer.disconnect(); window.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  const features = [
    {
      icon: <FileText size={24} />,
      title: "Artigos em Massa",
      description: "Crie centenas de artigos otimizados em minutos usando GPT-4o ou Claude 3.5 Sonnet.",
      tag: "Criação"
    },
    {
      icon: <ImageIcon size={24} />,
      title: "Imagens com IA",
      description: "Gera imagens realistas e relevantes para seus posts automaticamente via DALL-E 3.",
      tag: "Mídia"
    },
    {
      icon: <Search size={24} />,
      title: "SEO On-Page",
      description: "Automação completa de títulos, meta descriptions, alt text e estrutura H1-H6.",
      tag: "SEO"
    },
    {
      icon: <Globe size={24} />,
      title: "SEO Autopilot",
      description: "Links internos inteligentes e marcação schema automática para máximo desempenho.",
      tag: "SEO"
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Scraper Avançado",
      description: "Importe e reescreva conteúdos de feeds RSS ou URLs específicas com perfeição.",
      tag: "Importação"
    },
    {
      icon: <Youtube size={24} />,
      title: "Integração YouTube",
      description: "O plugin encontra e incorpora vídeos relevantes para aumentar a retenção do usuário.",
      tag: "Mídia"
    },
    {
      icon: <Settings size={24} />,
      title: "Agendamento Total",
      description: "Defina seu cronograma e deixe o blog crescer no piloto automático por meses.",
      tag: "Automação"
    },
    {
      icon: <Shield size={24} />,
      title: "Humanização de Texto",
      description: "Algoritmos exclusivos que evitam detecção de IA e garantem leitura fluida.",
      tag: "Qualidade"
    },
    {
      icon: <Languages size={24} />,
      title: "Multi-Idioma",
      description: "Geração de conteúdo em mais de 25 idiomas com gramática e contexto impecáveis.",
      tag: "Global"
    }
  ];

  return (
    <section id="features" className="features-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <span className="subtitle">Poder & Automação</span>
          <h2>Funcionalidades que vão te <br /> colocar no Topo do Google</h2>
          <p>Tudo o que você precisa para gerenciar um império de conteúdo sem esforços manuais.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card reveal"
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              {/* Radial mouse-follow glow */}
              <div className="card-glow"></div>

              <div className="feature-header">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="icon-pulse"></div>
                </div>
                <span className="feature-tag">{feature.tag}</span>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>

              {/* Bottom accent line */}
              <div className="card-accent-line"></div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .features-section {
          padding: var(--section-padding);
          background: var(--bg-main);
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--primary), transparent);
          opacity: 0.2;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .feature-card {
          padding: 36px;
          border-radius: 6px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: default;
        }

        /* Mouse-follow radial glow */
        .card-glow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(0, 200, 150, 0.07) 0%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .feature-card:hover .card-glow {
          opacity: 1;
        }

        .feature-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0, 200, 150, 0.3);
          box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.6),
                      0 0 0 1px rgba(0, 200, 150, 0.1),
                      inset 0 1px 0 rgba(255,255,255,0.04);
          background: var(--bg-card-hover);
        }

        /* Top border reveal on hover */
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }
        .feature-card:hover::before { transform: scaleX(1); }

        .feature-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .feature-icon-wrapper {
          position: relative;
        }

        .feature-icon {
          width: 52px;
          height: 52px;
          background: radial-gradient(circle at 30% 30%, rgba(0,200,150,0.12) 0%, rgba(0,200,150,0.04) 100%);
          border-radius: 14px;
          border: 1px solid rgba(0, 200, 150, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          background: rgba(0,200,150,0.15);
          border-color: rgba(0,200,150,0.35);
          box-shadow: 0 8px 24px rgba(0,200,150,0.15);
          transform: scale(1.06);
        }

        .icon-pulse {
          position: absolute;
          inset: -4px;
          border-radius: 16px;
          border: 1px solid rgba(0,200,150,0.2);
          opacity: 0;
          transition: opacity 0.3s;
          animation: pulse-ring 2s ease-out infinite;
        }
        .feature-card:hover .icon-pulse { opacity: 1; }

        .feature-tag {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--primary);
          background: rgba(0,200,150,0.08);
          border: 1px solid rgba(0,200,150,0.15);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .feature-card h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: #fff;
          font-weight: 700;
          transition: color 0.3s;
        }
        .feature-card:hover h3 { color: #fff; }

        .feature-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.65;
        }

        /* Bottom accent line */
        .card-accent-line {
          position: absolute;
          bottom: 0; left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(to right, var(--primary), transparent);
          transition: width 0.4s ease;
          border-radius: 0 0 0 18px;
        }
        .feature-card:hover .card-accent-line { width: 60%; }

        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr; }
          .feature-card { padding: 28px; }
        }
      `}} />
    </section>
  );
};

export default Features;
