import React from 'react';
import { Check, Shield, Zap, Infinity, Clock } from 'lucide-react';

const Pricing = () => {
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
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-title">
          <h2>Investimento Único, Resultados Infinitos</h2>
          <p>Elimine mensalidades caras. Tenha o poder da IA no seu WordPress com o melhor custo-benefício do mercado.</p>
        </div>

        <div className="single-pricing-container">
          <div className="pricing-card glass-effect featured">
            <div className="card-badge">Oferta de Lançamento</div>

            <div className="card-header">
              <h3>{plan.name}</h3>
              <p className="description">{plan.description}</p>
            </div>

            <div className="price-box">
              <div className="price-main">
                <span className="currency">R$</span>
                <span className="amount">{plan.price}</span>
              </div>
              <div className="price-tag">Pagamento Único</div>
            </div>

            <div className="divider"></div>

            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  <Check size={20} className="icon-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="cta-area">
              <button className="btn btn-primary btn-huge">
                <Zap size={20} fill="currentColor" />
                Quero Minha Licença Agora
              </button>
              <div className="payment-security">
                <Shield size={16} />
                <span>Compra 100% Segura & Garantia de 7 Dias</span>
              </div>
            </div>
          </div>

          <div className="pricing-extras">
            <div className="extra-item glass-effect">
              <div className="extra-icon"><Infinity size={24} /></div>
              <div className="extra-text">
                <h4>Sites Ilimitados</h4>
                <p>Não limite seu crescimento. Use em quantos projetos quiser.</p>
              </div>
            </div>
            <div className="extra-item glass-effect">
              <div className="extra-icon"><Clock size={24} /></div>
              <div className="extra-text">
                <h4>Vitalício Real</h4>
                <p>Pague uma vez, use para sempre. Esqueça assinaturas.</p>
              </div>
            </div>
            <div className="extra-item glass-effect">
              <div className="extra-icon"><Shield size={24} /></div>
              <div className="extra-text">
                <h4>Garantia Total</h4>
                <p>7 dias para testar ou seu dinheiro de volta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .pricing-section {
          padding: var(--section-padding);
          background: radial-gradient(circle at top right, rgba(0, 200, 150, 0.05) 0%, var(--bg-main) 50%);
        }

        .single-pricing-container {
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 40px;
            max-width: 1000px;
            margin: 40px auto 0;
            align-items: center;
        }

        .pricing-card.featured {
          padding: 60px;
          border-radius: 32px;
          border: 1px solid var(--primary);
          background: rgba(0, 200, 150, 0.03);
          position: relative;
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 200, 150, 0.1);
        }

        .card-badge {
            position: absolute;
            top: -18px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary);
            color: var(--secondary);
            padding: 8px 24px;
            border-radius: 99px;
            font-weight: 800;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 10px 20px rgba(0, 200, 150, 0.3);
        }

        .card-header h3 {
            font-size: 2rem;
            margin-bottom: 12px;
            background: linear-gradient(to right, #fff, var(--primary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .description {
            color: var(--text-muted);
            font-size: 1.1rem;
            margin-bottom: 30px;
        }

        .price-box {
            display: flex;
            align-items: baseline;
            gap: 15px;
            margin-bottom: 30px;
        }

        .price-main {
            display: flex;
            align-items: baseline;
        }

        .price-main .currency {
            font-size: 1.5rem;
            font-weight: 700;
            margin-right: 5px;
            color: var(--primary);
        }

        .price-main .amount {
            font-size: 5rem;
            font-weight: 900;
            line-height: 1;
        }

        .price-tag {
            background: rgba(255, 255, 255, 0.05);
            padding: 10px 20px;
            border-radius: 12px;
            font-weight: 600;
            color: #fff;
            border: 1px solid var(--border);
        }

        .divider {
            height: 1px;
            background: linear-gradient(to right, var(--border), transparent);
            margin-bottom: 30px;
        }

        .features-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 50px;
        }

        .features-list li {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #d1d5db;
        }

        .icon-check {
            color: var(--primary);
            flex-shrink: 0;
        }

        .btn-huge {
            font-size: 1.25rem;
            padding: 24px 48px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            border-radius: 20px;
            position: relative;
            z-index: 1;
            overflow: hidden;
        }

        .btn-huge::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            transform: rotate(45deg);
            animation: shine 3s infinite;
        }

        @keyframes shine {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        .payment-security {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .pricing-extras {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .extra-item {
            padding: 24px;
            border-radius: 20px;
            display: flex;
            gap: 20px;
            align-items: center;
            border: 1px solid var(--border);
        }

        .extra-icon {
            width: 50px;
            height: 50px;
            background: rgba(0, 200, 150, 0.1);
            color: var(--primary);
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .extra-text h4 {
            margin-bottom: 5px;
        }

        .extra-text p {
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        @media (max-width: 1024px) {
            .single-pricing-container {
                grid-template-columns: 1fr;
            }
            .features-list {
                grid-template-columns: 1fr;
            }
            .pricing-card.featured {
                padding: 40px 30px;
            }
        }
      `}} />
    </section>
  );
};

export default Pricing;
