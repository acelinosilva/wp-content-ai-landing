import React from 'react';
import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo flex items-center gap-2 text-2xl font-bold font-heading mb-6 no-underline">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-secondary rotate-3">
                <Rocket size={24} fill="currentColor" />
              </div>
              <span className="text-white">WP Content AI</span>
            </Link>
            <p>
              Liderando a revolução da inteligência artificial aplicada ao WordPress.
              Criado para profissionais que levam SEO e conteúdo a sério.
            </p>
            <div className="social-links">
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Github size={20} /></a>
              <a href="#"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Produto</h4>
            <ul>
              <li><a href="#features">Funcionalidades</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#">Depoimentos</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Suporte</h4>
            <ul>
              <li><a href="#">Documentação</a></li>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms">Termos de Uso</Link></li>
              <li><Link to="/privacy">Privacidade</Link></li>
              <li><Link to="/licensing">Licenciamento</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} WP Content AI. Todos os direitos reservados.</p>
          <p>Orgulhosamente brasileiro.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          padding: 80px 0 40px;
          border-top: 1px solid var(--border);
          background: #000;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        .footer-brand p {
          color: var(--text-muted);
          max-width: 320px;
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          border: 1px solid var(--border);
        }

        .social-links a:hover {
          color: var(--primary);
          border-color: var(--primary);
        }

        .footer-links h4 {
          color: #fff;
          margin-bottom: 24px;
          font-size: 1.1rem;
        }

        .footer-links ul li {
          margin-bottom: 12px;
        }

        .footer-links ul li a {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .footer-links ul li a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 0.875rem;
        }

        .mb-6 { margin-bottom: 1.5rem; }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand {
            grid-column: span 2;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
