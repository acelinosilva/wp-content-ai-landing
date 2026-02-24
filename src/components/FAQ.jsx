import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "O Google penaliza conteúdo gerado por IA?",
            answer: "Absolutamente não. O Google declarou oficialmente que foca na qualidade do conteúdo, não em como ele foi produzido. O WP Content AI gera conteúdo estruturado para humanos, garantindo valor real aos seus leitores."
        },
        {
            question: "Preciso de uma chave da API do OpenAI?",
            answer: "Sim, você precisará da sua própria chave para custos de processamento. No entanto, o WP Content AI é extremamente eficiente, operando com custos mínimos (aprox. R$ 0,05 por artigo longo)."
        },
        {
            question: "Funciona em qualquer tema de WordPress?",
            answer: "Sim! O plugin foi testado com os principais temas (Elementor, Astra, GeneratePress, Divi) e segue os padrões nativos do WordPress."
        },
        {
            question: "O plugin escreve em Português?",
            answer: "Sim, o foco principal do WP Content AI é o Português do Brasil, mas ele suporta mais de 25 idiomas com perfeição gramatical."
        }
    ];

    return (
        <section id="faq" className="faq-section">
            <div className="container">
                <div className="section-title">
                    <h2>Dúvidas Frequentes</h2>
                    <p>Tudo o que você precisa saber antes de automatizar seu blog.</p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
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
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid var(--border);
          cursor: pointer;
        }

        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px 0;
          transition: var(--transition);
        }

        .faq-item:hover .faq-question h3 {
          color: var(--primary);
        }

        .faq-question h3 {
          font-size: 1.25rem;
          font-weight: 600;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0, 1, 0, 1);
        }

        .faq-item.open .faq-answer {
          max-height: 1000px;
          transition: all 0.4s cubic-bezier(1, 0, 1, 0);
          padding-bottom: 30px;
        }

        .faq-answer p {
          color: var(--text-muted);
          line-height: 1.8;
        }
      `}} />
        </section>
    );
};

export default FAQ;
