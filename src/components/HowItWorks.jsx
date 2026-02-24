import React from 'react';
import { Settings, Search, Edit3, Send } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Settings size={32} className="text-primary" />,
            title: "1. Configure Suas Chaves",
            description: "Conecte suas APIs do GPT-4, Claude ou Gemini em poucos segundos. Basta colar a chave e salvar."
        },
        {
            icon: <Search size={32} className="text-primary" />,
            title: "2. Escolha Suas Fontes",
            description: "Busque palavras-chave no Google News ou conecte feeds RSS. O plugin monitora tudo em tempo real."
        },
        {
            icon: <Edit3 size={32} className="text-primary" />,
            title: "3. Defina a Personalidade",
            description: "Escolha o tom de voz, idioma e como a IA deve humanizar e estruturar seus novos artigos."
        },
        {
            icon: <Send size={32} className="text-primary" />,
            title: "4. Automatize o Sucesso",
            description: "Agende as postagens. O WP Content AI cuida de tudo: texto, imagens, SEO e publicação."
        }
    ];

    return (
        <section id="how-it-works" className="how-section">
            <div className="container">
                <div className="section-title animate-fade-in">
                    <span className="subtitle">Fluxo Simples</span>
                    <h2>Como o WP Content AI Funciona?</h2>
                    <p>Deixe o trabalho pesado conosco enquanto você foca no que realmente importa: seu negócio.</p>
                </div>

                <div className="steps-container">
                    <div className="steps-line"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="step-item animate-up" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="step-icon-wrapper">
                                <div className="step-icon glass-effect">
                                    {step.icon}
                                </div>
                                <div className="step-number">{index + 1}</div>
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .how-section {
          padding: var(--section-padding);
          background: var(--bg-main);
          position: relative;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          position: relative;
          margin-top: 60px;
        }

        .steps-line {
            position: absolute;
            top: 45px;
            left: 50px;
            right: 50px;
            height: 2px;
            background: linear-gradient(to right, transparent, var(--border), transparent);
            z-index: 1;
        }

        @media (max-width: 991px) {
            .steps-line { display: none; }
        }

        .step-item {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .step-icon-wrapper {
          position: relative;
          width: 90px;
          height: 90px;
          margin: 0 auto 30px;
        }

        .step-icon {
          width: 100%;
          height: 100%;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          background: rgba(15, 23, 42, 0.4);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4);
        }

        .step-number {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 32px;
          height: 32px;
          background: var(--primary);
          color: var(--secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          box-shadow: 0 4px 10px rgba(0, 200, 150, 0.3);
        }

        .step-content h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: #fff;
        }

        .step-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
            .steps-container {
                grid-template-columns: 1fr;
                gap: 60px;
            }
            .step-item {
                display: flex;
                text-align: left;
                gap: 24px;
                align-items: flex-start;
            }
            .step-icon-wrapper {
                margin: 0;
                flex-shrink: 0;
                width: 70px;
                height: 70px;
            }
            .step-icon {
                border-radius: 18px;
            }
            .step-content h3 {
                margin-bottom: 8px;
            }
        }
      `}} />
        </section>
    );
};

export default HowItWorks;
