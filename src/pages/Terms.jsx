import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className="legal-page">
            <div className="container py-20">
                <Link to="/" className="back-link mb-8">
                    <ArrowLeft size={20} />
                    Voltar para Home
                </Link>

                <h1 className="mb-12">Termos de Uso</h1>

                <div className="legal-content glass-effect p-8 md:p-12 rounded-3xl border border-white/5">
                    <section className="mb-8">
                        <h2>1. Aceitação dos Termos</h2>
                        <p>Ao acessar e usar o plugin WP Content AI, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não deve usar nosso produto.</p>
                    </section>

                    <section className="mb-8">
                        <h2>2. Licença de Uso</h2>
                        <p>A licença adquirida permite que você instale e use o plugin em seus sites. A licença vitalícia é pessoal e intransferível, salvo autorização explícita.</p>
                    </section>

                    <section className="mb-8">
                        <h2>3. Uso Responsável de IA</h2>
                        <p>O usuário é inteiramente responsável pelo conteúdo gerado através do plugin. Embora usemos APIs de ponta (GPT-4, Claude), não garantimos a precisão absoluta de todos os textos gerados sem revisão humana.</p>
                    </section>

                    <section className="mb-8">
                        <h2>4. Atualizações e Suporte</h2>
                        <p>Garantimos atualizações contínuas para manter a compatibilidade com as versões mais recentes do WordPress. O suporte é oferecido conforme o plano adquirido.</p>
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
                .mb-8 { margin-bottom: 2rem; }
                .mb-12 { margin-bottom: 3rem; }
            `}} />
        </div>
    );
};

export default Terms;
