import React from 'react';
import { ArrowRight, Bot, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <div className="badge">
          <Sparkles size={14} className="text-primary" />
          <span>Lançamento: WP Content AI v2.0</span>
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
          <a href="#pricing" className="btn btn-primary">
            Quero Começar Agora <ArrowRight size={20} />
          </a>
          <a href="#features" className="btn btn-secondary">
            Ver Funcionalidades
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <Zap size={24} className="text-primary" />
            <div>
              <strong>10x Mais Rápido</strong>
              <span>Geração de Conteúdo</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <Bot size={24} className="text-primary" />
            <div>
              <strong>Automação Total</strong>
              <span>Agende seus Posts</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero {
          position: relative;
          padding: 180px 0 100px;
          min-height: 95vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 50% -20%, #1e293b 0%, var(--bg-main) 70%),
                      radial-gradient(circle at 100% 100%, rgba(0, 200, 150, 0.05) 0%, transparent 40%);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300c896' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          background: rgba(0, 200, 150, 0.1);
          border: 1px solid rgba(0, 200, 150, 0.2);
          padding: 8px 18px;
          border-radius: 99px;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 28px;
          color: var(--primary);
          box-shadow: 0 0 20px rgba(0, 200, 150, 0.1);
        }

        .hero h1 {
          font-size: 4.5rem;
          line-height: 1.05;
          margin-bottom: 28px;
          font-weight: 850;
          letter-spacing: -2px;
        }

        .text-glow {
          background: linear-gradient(135deg, #fff, var(--primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 15px rgba(0, 200, 150, 0.3));
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 850px;
          margin-bottom: 48px;
          line-height: 1.8;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
          margin-bottom: 80px;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          padding: 24px 48px;
          border-radius: 24px;
          border: 1px solid var(--border);
          gap: 48px;
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.6);
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 20px;
          text-align: left;
        }

        .stat-item strong {
          display: block;
          font-size: 1.2rem;
          font-family: var(--font-heading);
          color: #fff;
        }

        .stat-item span {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .stat-divider {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, var(--border), transparent);
        }

        @media (max-width: 991px) {
          .hero h1 { font-size: 3.5rem; }
        }

        @media (max-width: 768px) {
          .hero { padding-top: 140px; }
          .hero h1 { font-size: 2.75rem; letter-spacing: -1px; }
          .hero-description { font-size: 1.1rem; }
          .hero-btns { flex-direction: column; width: 100%; max-width: 320px; }
          .hero-stats { flex-direction: column; gap: 32px; width: 100%; padding: 32px; }
          .stat-divider { display: none; }
          .stat-item { width: 100%; justify-content: center; }
        }
      `}} />
    </section>
  );
};

export default Hero;
