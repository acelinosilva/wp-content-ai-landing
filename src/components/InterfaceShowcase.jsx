import React, { useState } from 'react';
import { Eye, Layout, Settings, MessageSquare, Users, Zap, Wand2, Maximize2, X } from 'lucide-react';

const InterfaceShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const screens = [
    {
      id: 0,
      title: "Painel de Feeds",
      description: "Gerencie todas as suas fontes de conteúdo em um só lugar. Monitore feeds RSS e Google News em tempo real.",
      image: "/screenshots/feeds.jpg",
      icon: <Layout size={20} />
    },
    {
      id: 1,
      title: "Assistente de Configuração",
      description: "Configuração guiada passo a passo para conectar suas APIs e definir suas preferências iniciais.",
      image: "/screenshots/wizard.jpg",
      icon: <Wand2 size={20} />
    },
    {
      id: 2,
      title: "Motor de Inteligência",
      description: "Escolha entre Gemini, GPT-4 ou Claude. Flexibilidade total para usar o melhor modelo para cada nicho.",
      image: "/screenshots/settings.jpg",
      icon: <Zap size={20} />
    },
    {
      id: 3,
      title: "Personalização de Prompts",
      description: "Controle total sobre o tom de voz, estrutura e SEO através de modelos de prompts customizáveis.",
      image: "/screenshots/prompts.jpg",
      icon: <MessageSquare size={20} />
    },
    {
      id: 4,
      title: "Estilos de Escrita (Personas)",
      description: "Crie personas únicas com tons de voz variados. O plugin se adapta à personalidade da sua marca automaticamente.",
      image: "/screenshots/personas_list.jpg",
      icon: <Users size={20} />
    },
    {
      id: 5,
      title: "Configurações Avançadas",
      description: "Controle total sobre limites de processamento, intervalos de cron, humanização de texto e links automáticos.",
      image: "/screenshots/full_settings.jpg",
      icon: <Settings size={20} />
    }
  ];

  return (
    <section id="interface" className="interface-section">
      <div className="container">
        <div className="section-title">
          <h2>Qualidade e Controle Total</h2>
          <p>Interface de alta definição projetada para máxima produtividade e clareza nos detalhes.</p>
        </div>

        <div className="interface-tabs">
          <div className="tabs-list">
            {screens.map((screen) => (
              <button
                key={screen.id}
                className={`tab-item ${activeTab === screen.id ? 'active' : ''}`}
                onClick={() => setActiveTab(screen.id)}
              >
                <div className="tab-icon">{screen.icon}</div>
                <div className="tab-text">
                  <h4>{screen.title}</h4>
                </div>
              </button>
            ))}
          </div>

          <div className="tab-content glass-effect">
            <div className="screen-header">
              <div className="screen-info">
                <h3>{screens[activeTab].title}</h3>
                <p>{screens[activeTab].description}</p>
              </div>
              <button
                className="btn-zoom"
                onClick={() => setIsLightboxOpen(true)}
                title="Ver em tamanho real"
              >
                <Maximize2 size={20} /> Ampliar
              </button>
            </div>

            <div className="screen-preview" onClick={() => setIsLightboxOpen(true)}>
              <img
                src={screens[activeTab].image}
                alt={screens[activeTab].title}
                className="animate-fade-in high-quality"
                key={screens[activeTab].id}
              />
              <div className="screen-overlay">
                <Maximize2 size={32} />
                <span>Clique para ver em alta definição</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
          <button className="close-lightbox"><X size={32} /></button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={screens[activeTab].image}
              alt={screens[activeTab].title}
              className="high-quality"
            />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        .interface-section {
          padding: var(--section-padding);
          background: linear-gradient(to bottom, var(--bg-main), #000);
        }

        .interface-tabs {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 40px;
          margin-top: 40px;
        }

        .tabs-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tab-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: var(--text-muted);
          position: relative;
          overflow: hidden;
        }

        .tab-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--primary);
          transform: scaleY(0);
          transition: transform 0.3s ease;
          border-radius: 0 2px 2px 0;
        }

        .tab-item:hover {
          border-color: rgba(0, 200, 150, 0.2);
          background: var(--bg-card-hover);
          color: rgba(248,250,252,0.8);
          transform: translateX(3px);
        }

        .tab-item.active {
          border-color: rgba(0,200,150,0.35);
          background: linear-gradient(135deg, rgba(0,200,150,0.08) 0%, var(--bg-card) 100%);
          color: #fff;
          box-shadow: 0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04);
        }
        .tab-item.active::before { transform: scaleY(1); }

        .tab-icon {
          width: 40px;
          height: 40px;
          background: rgba(0,200,150,0.06);
          border: 1px solid rgba(0,200,150,0.12);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .tab-item.active .tab-icon {
          background: var(--primary);
          color: var(--secondary);
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(0,200,150,0.3);
        }

        .tab-content {
          padding: 36px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          gap: 28px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          box-shadow: 0 24px 48px -12px rgba(0,0,0,0.5);
        }

        .screen-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .btn-zoom {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border);
            color: #fff;
            padding: 8px 16px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: var(--transition);
            font-size: 0.875rem;
        }

        .btn-zoom:hover {
            border-color: var(--primary);
            background: rgba(0, 200, 150, 0.1);
        }

        .screen-info h3 {
          font-size: 1.75rem;
          margin-bottom: 12px;
        }

        .screen-info p {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 500px;
        }

        .screen-preview {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--border-subtle);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6),
                      0 0 0 1px rgba(0,200,150,0.06);
          cursor: zoom-in;
        }

        .screen-preview img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .screen-preview:hover img {
            transform: scale(1.02);
        }

        .screen-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: var(--transition);
            gap: 12px;
        }

        .screen-preview:hover .screen-overlay {
            opacity: 1;
        }

        /* Rendering Optimization */
        .high-quality {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
            -ms-interpolation-mode: bicubic;
        }

        /* Lightbox Styles */
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            cursor: zoom-out;
        }

        .lightbox-content {
            max-width: 95%;
            max-height: 95%;
            border-radius: 8px;
            overflow: auto;
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        }

        .lightbox-content img {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 4px;
        }

        .close-lightbox {
            position: absolute;
            top: 30px;
            right: 30px;
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
            opacity: 0.7;
            transition: var(--transition);
        }

        .close-lightbox:hover {
            opacity: 1;
            transform: rotate(90deg);
        }

        @media (max-width: 1024px) {
          .interface-tabs {
            grid-template-columns: 1fr;
          }
          .tabs-list {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 20px;
          }
          .tab-item {
            min-width: 250px;
          }
          .screen-header {
              flex-direction: column;
              gap: 20px;
          }
        }
      `}} />
    </section>
  );
};

export default InterfaceShowcase;
