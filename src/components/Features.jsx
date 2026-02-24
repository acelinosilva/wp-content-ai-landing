import React from 'react';
import {
    FileText, Image as ImageIcon, Search, RefreshCw,
    Settings, Zap, Shield, Mail
} from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <FileText className="text-primary" />,
            title: "Geração de Artigos em Massa",
            description: "Crie centenas de artigos otimizados em minutos usando GPT-4o ou Claude 3.5 Sonnet."
        },
        {
            icon: <ImageIcon className="text-primary" />,
            title: "Imagens com IA",
            description: "Gera imagens realistas e relevantes para seus posts automaticamente via DALL-E 3."
        },
        {
            icon: <Search className="text-primary" />,
            title: "SEO On-Page Automático",
            description: "O plugin cuida de títulos, meta descriptions, alt text e estrutura de headings (H1-H6)."
        },
        {
            icon: <RefreshCw className="text-primary" />,
            title: "Scraper de Conteúdo",
            description: "Importe e reescreva conteúdos de feeds RSS ou URLs específicas com perfeição."
        },
        {
            icon: <Settings className="text-primary" />,
            title: "Automação Total",
            description: "Agende publicações para meses inteiros e deixe o seu blog crescer no piloto automático."
        },
        {
            icon: <Shield className="text-primary" />,
            title: "Humanização de Texto",
            description: "Algoritmos exclusivos para evitar detecção de IA e garantir leitura fluida."
        }
    ];

    return (
        <section id="features" className="features-section">
            <div className="container">
                <div className="section-title animate-fade-in">
                    <h2>Funcionalidades que vão te <br /> colocar no Topo do Google</h2>
                    <p>Tudo o que você precisa para gerenciar um império de conteúdo sem precisar escrever uma única linha.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card glass-effect">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .features-section {
          padding: var(--section-padding);
          background: var(--bg-main);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .feature-card {
          padding: 40px;
          border-radius: 20px;
          transition: var(--transition);
          border: 1px solid var(--border);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          background: var(--bg-card-hover);
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: rgba(0, 200, 150, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          color: #fff;
        }

        .feature-card p {
          color: var(--text-muted);
          font-size: 1rem;
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
        </section>
    );
};

export default Features;
