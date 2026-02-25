import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Reveal only the section title and container — not individual items
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: "O Google penaliza conteúdo gerado por IA?",
      answer: "Absolutamente não. O Google declarou oficialmente que foca na qualidade do conteúdo, não em como ele foi produzido. O WP Content AI gera conteúdo estruturado para humanos, garantindo valor real aos seus leitores."
    },
    {
      question: "Preciso de uma chave da API do OpenAI?",
      answer: "Sim, você precisará da sua própria chave de API para os custos de processamento. No entanto, o WP Content AI é extremamente eficiente, operando com custos mínimos — aproximadamente R$ 0,05 por artigo longo. Você também pode usar Gemini ou Claude como alternativa."
    },
    {
      question: "Funciona em qualquer tema de WordPress?",
      answer: "Sim! O plugin foi testado com os principais temas do mercado (Elementor, Astra, GeneratePress, Divi, Kadence) e segue os padrões nativos do WordPress, garantindo compatibilidade total independente do tema."
    },
    {
      question: "O plugin escreve em Português?",
      answer: "Sim, o foco principal do WP Content AI é o Português do Brasil, mas ele suporta mais de 25 idiomas com perfeição gramatical, incluindo Inglês, Espanhol, Francês, Alemão, Italiano e muito mais."
    },
    {
      question: "O plugin é compatível com Rank Math e Yoast SEO?",
      answer: "Sim! O WP Content AI possui integração nativa com Rank Math SEO e Yoast SEO. Ele preenche automaticamente o título SEO, meta description, palavra-chave primária e configurações de robots meta para garantir o máximo desempenho em ambas as plataformas."
    },
    {
      question: "Posso usar em WordPress Multisite?",
      answer: "Sim, a licença vitalícia permite a instalação em sites ilimitados, incluindo redes WordPress Multisite. Cada subsite pode ter sua própria configuração de feeds, API e personalidade de escrita de forma independente."
    },
    {
      question: "As atualizações futuras estão incluídas?",
      answer: "Sim! Ao adquirir a licença vitalícia, você recebe todas as atualizações futuras do plugin gratuitamente e para sempre. Novas funcionalidades, integrações com novos modelos de IA e melhorias de desempenho são entregues automaticamente."
    },
    {
      question: "É possível personalizar o estilo e o tom dos artigos?",
      answer: "Totalmente. Você pode criar múltiplas 'Personas' com tons de voz diferentes (formal, descontraído, jornalístico, técnico) e personalizar prompts para cada feed separadamente. O plugin também possui humanizador de texto para garantir uma leitura natural e fluida."
    }
  ];

  return (
    <section id="faq" className="faq-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title reveal">
          <span className="subtitle">Dúvidas</span>
          <h2>Dúvidas Frequentes</h2>
          <p>Tudo o que você precisa saber antes de automatizar seu blog.</p>
        </div>

        <div className="faq-container reveal">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="faq-question">
                <div className="faq-num">{String(index + 1).padStart(2, '0')}</div>
                <h3>{faq.question}</h3>
                <div className="faq-chevron">
                  <ChevronDown size={20} />
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .faq-section {
          padding: var(--section-padding);
          background: linear-gradient(180deg, var(--bg-main) 0%, #050d1a 50%, var(--bg-main) 100%);
        }

        .faq-container {
          max-width: 780px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item:hover {
          border-color: rgba(0,200,150,0.2);
          background: var(--bg-card-hover);
        }

        .faq-item.open {
          border-color: rgba(0,200,150,0.3);
          background: linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(8,16,32,0.9) 100%);
          box-shadow: 0 12px 32px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,200,150,0.08);
        }

        .faq-question {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          user-select: none;
        }

        .faq-num {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--primary);
          font-family: var(--font-heading);
          opacity: 0.5;
          flex-shrink: 0;
          letter-spacing: 0.04em;
          transition: opacity 0.25s ease;
        }
        .faq-item.open .faq-num { opacity: 1; }

        .faq-question h3 {
          font-size: 1.05rem;
          font-weight: 600;
          flex: 1;
          color: var(--text-main);
          transition: color 0.25s ease;
          line-height: 1.4;
          font-family: var(--font-main);
          letter-spacing: 0;
        }

        .faq-item.open .faq-question h3,
        .faq-item:hover .faq-question h3 {
          color: var(--primary);
        }

        .faq-chevron {
          flex-shrink: 0;
          color: var(--text-muted);
          transform: rotate(0deg);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s ease;
          display: flex;
          align-items: center;
        }

        .faq-item.open .faq-chevron {
          transform: rotate(180deg);
          color: var(--primary);
        }

        /* Clean, reliable height animation — no transition on reveal */
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.38s ease;
          padding-left: 56px;
          padding-right: 24px;
        }

        .faq-item.open .faq-answer {
          max-height: 500px;
          transition: max-height 0.38s ease;
          padding-bottom: 24px;
        }

        .faq-answer p {
          color: var(--text-muted);
          line-height: 1.8;
          font-size: 0.93rem;
        }

        @media (max-width: 640px) {
          .faq-answer { padding-left: 24px; }
        }
      `}} />
    </section>
  );
};

export default FAQ;
