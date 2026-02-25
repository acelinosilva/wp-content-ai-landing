import React, { useEffect, useRef } from 'react';
import { ArrowRight, Bot, Sparkles, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    // Mouse-tracking radial highlight for section background
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.card-base');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      {/* Background grid */}
      <div className="hero-grid-bg" aria-hidden="true"></div>
      {/* Radial glow blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true"></div>
      <div className="hero-blob hero-blob-2" aria-hidden="true"></div>

      <div className="container hero-content animate-fade-in">
        <div className="badge">
          <Sparkles size={13} className="text-primary" />
          <span>Lançamento: WP Content AI v2.0</span>
          <span className="badge-dot"></span>
          <span className="badge-live">NOVO</span>
        </div>

        <h1>
          Transforme seu WordPress em uma <br />
          <span className="text-glow">Máquina de Conteúdo</span> com IA
        </h1>

        <p className="hero-description">
          O primeiro plugin brasileiro que automatiza a criação de artigos, imagens e
          otimização SEO completa usando as melhores IAs do mercado. Economize 20+ horas
          semanais e domine o Google.
        </p>

        <div className="hero-btns">
          <a href="#pricing" className="btn btn-primary btn-lg">
            Quero Começar Agora <ArrowRight size={20} />
          </a>
          <a href="#features" className="btn btn-secondary btn-lg">
            Ver Funcionalidades
          </a>
        </div>

        {/* Stats strip */}
        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-icon">
              <Zap size={22} />
            </div>
            <div>
              <strong>10x</strong>
              <span>Mais Rápido</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon">
              <Bot size={22} />
            </div>
            <div>
              <strong>100%</strong>
              <span>Automação</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-icon">
              <TrendingUp size={22} />
            </div>
            <div>
              <strong>20h+</strong>
              <span>Economizadas/Semana</span>
            </div>
          </div>
        </div>

        {/* Floating trust badges */}
        <div className="hero-trust">
          <span className="trust-item"><span className="trust-dot"></span>GPT-4o</span>
          <span className="trust-item"><span className="trust-dot"></span>Claude 3.5</span>
          <span className="trust-item"><span className="trust-dot"></span>Gemini Pro</span>
          <span className="trust-item"><span className="trust-dot"></span>DALL-E 3</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          position: relative;
          padding: 190px 0 110px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: var(--bg-main);
          overflow: hidden;
        }

        /* Grid pattern overlay */
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,200,150,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,200,150,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 40%, black 30%, transparent 75%);
        }

        /* Glow blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .hero-blob-1 {
          width: 600px; height: 600px;
          top: -150px; left: -100px;
          background: radial-gradient(circle, rgba(0,200,150,0.12) 0%, transparent 70%);
          animation: float 8s ease-in-out infinite;
        }
        .hero-blob-2 {
          width: 500px; height: 500px;
          bottom: -100px; right: -100px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          animation: float 10s ease-in-out infinite reverse;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Badge */
        .badge {
          background: rgba(0, 200, 150, 0.07);
          border: 1px solid rgba(0, 200, 150, 0.25);
          padding: 7px 18px;
          border-radius: 4px;
          font-size: 0.82rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 32px;
          color: var(--primary);
          position: relative;
          overflow: hidden;
        }
        .badge::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0,200,150,0.15), transparent);
          animation: shimmer 3s infinite 1s;
        }
        .badge-dot {
          width: 6px; height: 6px;
          background: var(--primary);
          border-radius: 50%;
          animation: glow-pulse 1.5s infinite;
        }
        .badge-live {
          background: var(--primary);
          color: var(--secondary);
          font-size: 0.7rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 99px;
          letter-spacing: 0.05em;
        }

        /* Headline */
        .hero h1 {
          font-size: clamp(2.8rem, 5vw, 5rem);
          line-height: 1.06;
          margin-bottom: 28px;
          font-weight: 900;
          letter-spacing: -0.03em;
          max-width: 840px;
        }

        .text-glow {
          background: linear-gradient(135deg, #fff 20%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 20px rgba(0, 200, 150, 0.3));
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 780px;
          margin-bottom: 48px;
          line-height: 1.8;
          text-align: center;
        }

        /* CTA buttons */
        .hero-btns {
          display: flex;
          gap: 16px;
          margin-bottom: 72px;
        }
        .btn-lg {
          padding: 15px 34px;
          font-size: 1rem;
          border-radius: 12px;
        }

        /* Stats */
        .hero-stats {
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(10,22,40,0.9) 0%, rgba(15,23,42,0.8) 100%);
          backdrop-filter: blur(20px);
          padding: 24px 52px;
          border-radius: 6px;
          border: 1px solid rgba(0,200,150,0.15);
          gap: 52px;
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.7);
          margin-bottom: 32px;
          position: relative;
          overflow: hidden;
        }
        .hero-stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,200,150,0.04) 0%, transparent 60%);
          border-radius: inherit;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 18px;
          text-align: left;
          position: relative;
          z-index: 1;
        }
        .stat-icon {
          width: 48px; height: 48px;
          background: radial-gradient(circle at center, rgba(0,200,150,0.15) 0%, rgba(0,200,150,0.04) 100%);
          border: 1px solid rgba(0,200,150,0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }
        .stat-item strong {
          display: block;
          font-size: 1.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-item span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .stat-divider {
          width: 1px;
          height: 52px;
          background: linear-gradient(to bottom, transparent, rgba(30,41,59,0.8), transparent);
        }

        /* Trust bar */
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 4px;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .trust-dot {
          width: 6px; height: 6px;
          background: var(--primary);
          border-radius: 50%;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .hero { padding-top: 140px; }
          .hero-btns { flex-direction: column; width: 100%; max-width: 340px; }
          .hero-stats { flex-direction: column; gap: 28px; width: 100%; padding: 28px; }
          .stat-divider { width: 100%; height: 1px; }
          .stat-item { width: 100%; justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default Hero;
