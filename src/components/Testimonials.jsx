import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Ricardo S.",
            role: "Especialista em SEO",
            content: "O WP Content AI mudou o jogo para meus sites de nicho. O que antes levava horas de pesquisa e escrita, agora resolvo em minutos com uma qualidade que o Google adora. Rankeei 3 novos projetos na primeira página em menos de 20 dias.",
            initial: "R",
            avatarBg: "linear-gradient(135deg, #00C896 0%, #008f6b 100%)",
            stars: 5
        },
        {
            name: "Beatriz M.",
            role: "Redatora Freelancer",
            content: "A integração com YouTube é genial. Ela extrai os melhores pontos e cria um artigo único e rico. Meus clientes de agência estão impressionados com a velocidade de entrega e a estrutura impecável de SEO.",
            initial: "B",
            avatarBg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
            stars: 5
        },
        {
            name: "Gustavo F.",
            role: "Dono de Rede de Afiliados",
            content: "Sinceramente, era cético com plugins de IA, mas o sistema de humanização dele é outro nível. Meus artigos não parecem 'robóticos' e a automação de links internos me economizou semanas de trabalho manual.",
            initial: "G",
            avatarBg: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            stars: 5
        }
    ];

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="section-title animate-fade-in">
                    <span className="subtitle">Depoimentos Reais</span>
                    <h2>Aprovado por quem domina o SEO</h2>
                    <p>Veja os resultados reais de profissionais que já automatizaram seu império de conteúdo.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testi, index) => (
                        <div key={index} className="testimonial-card glass-effect animate-up" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="stars">
                                {[...Array(testi.stars)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--primary)" className="text-primary" />
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
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .testimonial-card {
          padding: 40px;
          border-radius: 28px;
          border: 1px solid var(--border);
          transition: all 0.4s ease;
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          background: rgba(15, 23, 42, 0.6);
        }

        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .testi-content {
          color: var(--text-muted);
          font-style: italic;
          line-height: 1.8;
          font-size: 1.05rem;
          margin-bottom: 30px;
          position: relative;
        }

        .testi-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid var(--border);
          padding-top: 24px;
        }

        .testi-avatar {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 1.2rem;
          box-shadow: 0 10px 20px -5px rgba(0,0,0,0.3);
        }

        .testi-name {
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .verified-icon {
          color: var(--primary);
        }

        .testi-role {
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 640px) {
          .testimonial-card { padding: 30px; }
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}} />
        </section>
    );
};

export default Testimonials;
