import {
  FileText, Image as ImageIcon, Search, RefreshCw,
  Settings, Zap, Shield, Globe, Youtube, Languages
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText className="text-primary" />,
      title: "Artigos em Massa",
      description: "Crie centenas de artigos otimizados em minutos usando GPT-4o ou Claude 3.5 Sonnet."
    },
    {
      icon: <ImageIcon className="text-primary" />,
      title: "Imagens com IA",
      description: "Gera imagens realistas e relevantes para seus posts automaticamente via DALL-E 3."
    },
    {
      icon: <Search className="text-primary" />,
      title: "SEO On-Page",
      description: "Automação completa de títulos, meta descriptions, alt text e estrutura H1-H6."
    },
    {
      icon: <Globe className="text-primary" />,
      title: "SEO Autopilot",
      description: "Links internos inteligentes e marcação schema automática para máximo desempenho."
    },
    {
      icon: <RefreshCw className="text-primary" />,
      title: "Scraper Avançado",
      description: "Importe e reescreva conteúdos de feeds RSS ou URLs específicas com perfeição."
    },
    {
      icon: <Youtube className="text-primary" />,
      title: "Integração YouTube",
      description: "O plugin encontra e incorpora vídeos relevantes para aumentar a retenção do usuário."
    },
    {
      icon: <Settings className="text-primary" />,
      title: "Agendamento Total",
      description: "Defina seu cronograma e deixe o blog crescer no piloto automático por meses."
    },
    {
      icon: <Shield className="text-primary" />,
      title: "Humanização de Texto",
      description: "Algoritmos exclusivos que evitam detecção de IA e garantem leitura fluida."
    },
    {
      icon: <Languages className="text-primary" />,
      title: "Multi-Idioma",
      description: "Geração de conteúdo em mais de 25 idiomas com gramática e contexto impecáveis."
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-title animate-fade-in">
          <span className="subtitle">Poder & Automação</span>
          <h2>Funcionalidades que vão te <br /> colocar no Topo do Google</h2>
          <p>Tudo o que você precisa para gerenciar um império de conteúdo sem esforços manuais.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-effect animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="icon-glow"></div>
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
          position: relative;
          overflow: hidden;
        }

        .subtitle {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.8rem;
            color: var(--primary);
            font-weight: 700;
            margin-bottom: 12px;
            display: block;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .feature-card {
          padding: 40px;
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 200, 150, 0.4);
          background: rgba(15, 23, 42, 0.6);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
        }

        .feature-icon-wrapper {
            position: relative;
            width: fit-content;
            margin-bottom: 24px;
        }

        .feature-icon {
          width: 54px;
          height: 54px;
          background: rgba(0, 200, 150, 0.08);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0, 200, 150, 0.15);
          position: relative;
          z-index: 2;
        }

        .icon-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            background: var(--primary);
            filter: blur(20px);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
        }

        .feature-card:hover .icon-glow {
            opacity: 0.3;
        }

        .feature-card h3 {
          font-size: 1.4rem;
          margin-bottom: 14px;
          color: #fff;
          font-weight: 750;
        }

        .feature-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
          .feature-card { padding: 30px; }
        }
      `}} />
    </section>
  );
};

export default Features;
