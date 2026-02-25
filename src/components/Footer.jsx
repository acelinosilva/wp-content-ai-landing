import React from 'react';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top gradient border */}
      <div className="footer-top-border" aria-hidden="true"></div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <Zap size={18} fill="currentColor" />
              </div>
              <span className="footer-logo-text">
                <span style={{ color: 'var(--primary)' }}>WP</span> Content AI
              </span>
            </Link>
            <p>
              Liderando a revolução da inteligência artificial aplicada ao WordPress.
              Criado para profissionais que levam SEO e conteúdo a sério.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="GitHub"><Github size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Produto</h4>
            <ul>
              <li><a href="#features">Funcionalidades</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#">Roadmap</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
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
          <p className="footer-made">🇧🇷 Orgulhosamente brasileiro.</p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          padding: 80px 0 40px;
          background: #000;
          position: relative;
        }

        .footer-top-border {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--primary), transparent);
          opacity: 0.25;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 64px;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          margin-bottom: 20px;
        }

        .footer-logo-icon {
          width: 32px; height: 32px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          box-shadow: 0 4px 12px rgba(0,200,150,0.25);
          flex-shrink: 0;
        }

        .footer-brand p {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.7;
          max-width: 300px;
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-links a {
          width: 38px; height: 38px;
          border-radius: 4px;
          background: rgba(30,41,59,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          border: 1px solid var(--border-subtle);
          transition: all 0.25s ease;
        }

        .social-links a:hover {
          color: var(--primary);
          border-color: rgba(0,200,150,0.3);
          background: rgba(0,200,150,0.08);
          transform: translateY(-2px);
        }

        .footer-links h4 {
          color: #fff;
          margin-bottom: 20px;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .footer-links ul li {
          margin-bottom: 10px;
        }

        .footer-links ul li a {
          color: var(--text-muted);
          font-size: 0.88rem;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          position: relative;
        }

        .footer-links ul li a::before {
          content: '';
          display: inline-block;
          width: 0;
          height: 1px;
          background: var(--primary);
          transition: width 0.25s ease;
          flex-shrink: 0;
        }

        .footer-links ul li a:hover {
          color: var(--primary);
        }

        .footer-links ul li a:hover::before {
          width: 12px;
        }

        .footer-bottom {
          padding-top: 32px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--text-muted);
          font-size: 0.82rem;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr; gap: 40px; }
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
          .footer-brand { grid-column: span 2; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand { grid-column: span 1; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
