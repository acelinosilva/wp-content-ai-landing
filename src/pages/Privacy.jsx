import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="legal-page">
            <div className="container py-20">
                <Link to="/" className="back-link mb-8">
                    <ArrowLeft size={20} />
                    Voltar para Home
                </Link>

                <h1 className="mb-12">Política de Privacidade</h1>

                <div className="legal-content glass-effect p-8 md:p-12 rounded-3xl border border-white/5">
                    <section className="mb-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="text-primary" size={32} />
                            <h2 className="m-0">Sua privacidade é nossa prioridade</h2>
                        </div>
                        <p>O WP Content AI leva a segurança dos seus dados a sério. Esta política descreve como tratamos as informações coletadas durante o uso do nosso plugin e site.</p>
                    </section>

                    <section className="mb-8">
                        <h2>1. Chaves de API</h2>
                        <p>Suas chaves de API do OpenAI, Anthropic ou Google são armazenadas localmente no SEU banco de dados WordPress. Nós NUNCA temos acesso às suas chaves ou ao conteúdo gerado por elas.</p>
                    </section>

                    <section className="mb-8">
                        <h2>2. Dados Coletados</h2>
                        <p>Coletamos apenas informações básicas para validação de licença e estatísticas de uso anônimas para melhoraria do produto. Não vendemos seus dados para terceiros.</p>
                    </section>

                    <section className="mb-8">
                        <h2>3. Cookies</h2>
                        <p>Usamos cookies apenas para garantir a funcionalidade do site e analisar o tráfego de forma agregada.</p>
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
                .m-0 { margin: 0; }
                .flex { display: flex; }
                .items-center { align-items: center; }
                .gap-3 { gap: 0.75rem; }
            `}} />
        </div>
    );
};

export default Privacy;
