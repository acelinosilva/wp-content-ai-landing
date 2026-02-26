import React, { useEffect, useRef } from 'react';
import { Check, Shield, Zap, Infinity, Clock, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const plan = {
    name: "Licença Vitalícia Ultra",
    price: "95",
    description: "Acesso completo e ilimitado para sempre. Sem pegadinhas, sem mensalidades.",
    features: [
      "Instale em Sites Ilimitados",
      "Pagamento Único (Vitalício)",
      "Sem Taxas Mensais ou Anuais",
      "Atualizações Automáticas pra Sempre",
      "Acesso a GPT-4o, Gemini e Claude",
      "Humanizador de Texto Integrado",
      "Extração de Conteúdo de Alta Qualidade",
      "Suporte Técnico Prioritário"
    ]
  };

  return (
    <section id="pricing" className="pricing-section" ref={sectionRef}>
      <div className="pricing-bg-glow" aria-hidden="true"></div>

      <div className="container">
        <div className="section-title reveal">
          <span className="subtitle">Preço Justo</span>
          <h2>Investimento Único, Resultados Infinitos</h2>
          <p>Elimine mensalidades caras. Tenha o poder da IA no seu WordPress com o melhor custo-benefício do mercado.</p>
        </div>

        <div className="single-pricing-container">
          <div className="pricing-card reveal">
            {/* Glow border effect */}
            <div className="pricing-glow" aria-hidden="true"></div>

            <div className="card-badge">
              <Zap size={12} fill="currentColor" />
              Oferta de Lançamento
            </div>

            <div className="card-header">
              <h3>{plan.name}</h3>
              <p className="description">{plan.description}</p>
            </div>

            <div className="price-box">
              <div className="price-main">
                <span className="currency">R$</span>
                <span className="amount">{plan.price}</span>
              </div>
              <div className="price-right">
                <div className="price-tag">Pagamento Único</div>
                <div className="price-forever">para sempre</div>
              </div>
            </div>

            <div className="divider"></div>

            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="check-icon"><Check size={14} /></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="cta-area">
              <a href="https://pay.kiwify.com.br/aoO4x6M" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-huge">
                <Zap size={18} fill="currentColor" />
                Quero Minha Licença Agora
                <ArrowRight size={18} />
              </a>
              <div className="payment-security">
                <Shield size={14} />
                <span>Compra 100% Segura &amp; Garantia de 7 Dias</span>
              </div>
            </div>
          </div>

          <div className="pricing-extras reveal" style={{ transitionDelay: '0.2s' }}>
            {[
              { icon: <Infinity size={22} />, title: 'Sites Ilimitados', desc: 'Não limite seu crescimento. Use em quantos projetos quiser.' },
              { icon: <Clock size={22} />, title: 'Vitalício Real', desc: 'Pague uma vez, use para sempre. Esqueça assinaturas.' },
              { icon: <Shield size={22} />, title: 'Garantia Total', desc: '7 dias para testar ou seu dinheiro de volta.' }
            ].map((item, i) => (
              <div key={i} className="extra-item">
                <div className="extra-icon">{item.icon}</div>
                <div className="extra-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .pricing-section {
          padding: var(--section-padding);
          background: var(--bg-main);
          position: relative;
          overflow: hidden;
        }

        .pricing-bg-glow {
          position: absolute;
          top: 50%; left: 30%;
          transform: translate(-50%, -50%);
          width: 800px; height: 600px;
          background: radial-gradient(ellipse, rgba(0,200,150,0.06) 0%, transparent 65%);
          pointer-events: none;
        }

        .single-pricing-container {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 32px;
          max-width: 1000px;
          margin: 0 auto;
          align-items: start;
        }

        .pricing-card {
          padding: 54px;
          border-radius: 6px;
          background: linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(8,16,32,0.9) 100%);
          border: 1px solid rgba(0,200,150,0.25);
          position: relative;
          overflow: hidden;
          box-shadow: 0 50px 100px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,200,150,0.08);
        }

        /* Animated glow border */
        .pricing-glow {
          position: absolute;
          inset: -1px;
          border-radius: 7px;
          background: linear-gradient(135deg, rgba(0,200,150,0.3), transparent 40%, rgba(0,200,150,0.1), transparent 60%, rgba(0,200,150,0.2));
          opacity: 0.5;
          pointer-events: none;
          animation: spin-slow 8s linear infinite;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          padding: 1px;
        }

        /* Shimmer on card */
        .pricing-card::after {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 30%; height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.03), transparent);
          transform: rotate(20deg);
          animation: shimmer 6s infinite 2s;
        }

        .card-badge {
          position: absolute;
          top: -1px;
          left: 40px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--secondary);
          padding: 7px 20px;
          border-radius: 0 0 12px 12px;
          font-weight: 800;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 8px 24px rgba(0,200,150,0.35);
        }

        .card-header h3 {
          font-size: 1.9rem;
          margin-bottom: 10px;
          margin-top: 28px;
          background: linear-gradient(to right, #fff, rgba(255,255,255,0.85));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          color: var(--text-muted);
          font-size: 1rem;
          margin-bottom: 32px;
          line-height: 1.65;
        }

        .price-box {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
        }

        .price-main {
          display: flex;
          align-items: baseline;
          gap: 2px;
        }

        .currency {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-heading);
        }

        .amount {
          font-size: 6rem;
          font-weight: 900;
          line-height: 1;
          color: #fff;
          font-family: var(--font-heading);
          letter-spacing: -0.04em;
        }

        .price-right {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .price-tag {
          background: rgba(0,200,150,0.08);
          border: 1px solid rgba(0,200,150,0.2);
          padding: 6px 14px;
          border-radius: 8px;
          font-weight: 700;
          color: var(--primary);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .price-forever {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-align: center;
          font-style: italic;
        }

        .divider {
          height: 1px;
          background: linear-gradient(to right, rgba(0,200,150,0.3), var(--border), transparent);
          margin-bottom: 28px;
        }

        .features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 40px;
        }

        .features-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(248,250,252,0.9);
          font-size: 0.88rem;
          font-weight: 500;
        }

        .check-icon {
          width: 22px; height: 22px;
          background: rgba(0,200,150,0.12);
          border: 1px solid rgba(0,200,150,0.25);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }

        .btn-huge {
          font-size: 1.1rem;
          padding: 20px 40px;
          width: 100%;
          border-radius: 14px;
          gap: 12px;
          font-weight: 700;
          letter-spacing: 0.01em;
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .btn-huge:hover {
          animation: none;
          box-shadow: 0 16px 40px rgba(0,200,150,0.5) !important;
        }

        .payment-security {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
          color: var(--text-muted);
          font-size: 0.82rem;
        }

        /* Extra items */
        .pricing-extras {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .extra-item {
          padding: 22px;
          border-radius: 6px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          gap: 18px;
          align-items: flex-start;
          transition: all 0.35s ease;
        }

        .extra-item:hover {
          border-color: rgba(0,200,150,0.2);
          background: var(--bg-card-hover);
          transform: translateX(4px);
        }

        .extra-icon {
          width: 46px; height: 46px;
          background: radial-gradient(circle, rgba(0,200,150,0.12) 0%, rgba(0,200,150,0.04) 100%);
          color: var(--primary);
          border-radius: 12px;
          border: 1px solid rgba(0,200,150,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .extra-text h4 {
          margin-bottom: 5px;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
        }

        .extra-text p {
          font-size: 0.83rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .single-pricing-container { grid-template-columns: 1fr; }
          .pricing-card { padding: 36px 28px; }
          .features-list { grid-template-columns: 1fr; }
        }
      `}} />
    </section>
  );
};

export default Pricing;
