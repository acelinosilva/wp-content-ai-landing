import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Funcionalidades', href: '/#features' },
    { name: 'Como Funciona', href: '/#how-it-works' },
    { name: 'Preços', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Zap size={18} fill="currentColor" />
            </div>
            <span className="logo-text">
              <span className="logo-wp">WP</span>
              <span className="logo-rest"> Content AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href="https://pay.kiwify.com.br/aoO4x6M" target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
              Começar Agora
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="https://pay.kiwify.com.br/aoO4x6M" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setMobileMenuOpen(false)}>
              Começar Agora
            </a>
          </div>
        )}
      </header>

      <style dangerouslySetInnerHTML={{
        __html: `
        .site-header {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .site-header.scrolled {
          padding: 12px 0;
          background: rgba(2, 6, 23, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,200,150,0.12);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }

        .header-container {
          max-width: var(--container-width);
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          text-decoration: none;
          color: #fff;
          transition: opacity 0.2s;
        }
        .logo:hover { opacity: 0.85; }

        .logo-icon {
          width: 34px; height: 34px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          box-shadow: 0 4px 12px rgba(0,200,150,0.3);
          flex-shrink: 0;
        }

        .logo-wp { color: var(--primary); }
        .logo-rest { color: #fff; }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link {
          font-size: 0.88rem;
          font-weight: 500;
          color: rgba(248,250,252,0.65);
          letter-spacing: 0.02em;
          position: relative;
          padding-bottom: 3px;
          transition: color 0.25s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0%; height: 1px;
          background: var(--primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #fff;
        }
        .nav-link:hover::after { width: 100%; }

        .nav-cta {
          padding: 10px 22px;
          font-size: 0.88rem;
          border-radius: 4px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 4px;
        }

        .mobile-menu {
          position: absolute;
          top: 100%; left: 0;
          width: 100%;
          background: rgba(2, 6, 23, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,200,150,0.12);
          padding: 20px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-link {
          padding: 12px 16px;
          font-size: 1rem;
          font-weight: 500;
          color: rgba(248,250,252,0.8);
          border-radius: 4px;
          transition: all 0.2s;
        }
        .mobile-link:hover {
          background: rgba(0,200,150,0.07);
          color: #fff;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
        }
      `}} />
    </>
  );
};

export default Header;
