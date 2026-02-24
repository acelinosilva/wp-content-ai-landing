import React from 'react';
import { ArrowLeft, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Licensing = () => {
    return (
        <div className="legal-page">
            <div className="container py-20">
                <Link to="/" className="back-link mb-8">
                    <ArrowLeft size={20} />
                    Voltar para Home
                </Link>

                <h1 className="mb-12">Licenciamento</h1>

                <div className="legal-content glass-effect p-8 md:p-12 rounded-3xl border border-white/5">
                    <section className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-primary" size={32} />
                            <h2 className="m-0">Detalhes da Licença Vitalícia</h2>
                        </div>
                        <p>O WP Content AI opera sob um modelo de licenciamento de software proprietário com foco na liberdade do criador de conteúdo.</p>
                    </section>

                    <section className="mb-8">
                        <h2>1. Sites Ilimitados</h2>
                        <p>Sua licença permite o uso em qualquer site que você possua ou gerencie para clientes, sem custos adicionais por domínio.</p>
                    </section>

                    <section className="mb-8">
                        <h2>2. Código e Modificações</h2>
                        <p>O código do plugin é acessível. Você pode fazer modificações para uso próprio, mas não é permitida a redistribuição ou venda de versões derivadas.</p>
                    </section>

                    <section className="mb-8">
                        <h2>3. Direitos Autorais</h2>
                        <p>O software WP Content AI é protegido por leis de direitos autorais. A marca e o logotipo são de propriedade exclusiva da Acelino Fernandes.</p>
                    </section>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .legal-page { background: var(--bg-main); min-height: 100vh; color: #fff; }
                .back-link { display: flex; align-items: center; gap: 8px; color: var(--primary); font-weight: 600; text-decoration: none; transition: var(--transition); }
                .back-link:hover { transform: translateX(-5px); }
                .legal-content h2 { font-size: 1.5rem; color: var(--primary); margin-bottom: 16px; margin-top: 32px; }
                .legal-content p { color: var(--text-muted); line-height: 1.8; margin-bottom: 16px; }
                h1 { font-size: 3.5rem; font-weight: 850; letter-spacing: -2px; }
            `}} />
        </div>
    );
};

export default Licensing;
