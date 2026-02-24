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
                    <span>Máquina de Conteúdo</span> com IA
                </h1>

                <p>
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
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 50% -20%, #1e293b 0%, var(--bg-main) 70%);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300c896' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 0.875rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          color: var(--primary);
        }

        .hero h1 {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 24px;
          font-weight: 800;
        }

        .hero h1 span {
          background: linear-gradient(to right, #fff, var(--primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 800px;
          margin-bottom: 40px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(8px);
          padding: 24px 40px;
          border-radius: 20px;
          border: 1px solid var(--border);
          gap: 40px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
        }

        .stat-item strong {
          display: block;
          font-size: 1.1rem;
          font-family: var(--font-heading);
        }

        .stat-item span {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border);
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 2.5rem; }
          .hero p { font-size: 1.1rem; }
          .hero-btns { flex-direction: column; width: 100%; }
          .hero-stats { flex-direction: column; gap: 24px; width: 100%; }
          .stat-divider { display: none; }
        }
      `}} />
        </section>
    );
};

export default Hero;
