import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Funcionalidades', href: '/#features' },
        { name: 'Como Funciona', href: '/#how-it-works' },
        { name: 'Preços', href: '/#pricing' },
        { name: 'FAQ', href: '/#faq' },
    ];

    const isHome = location.pathname === '/';

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-effect shadow-lg' : 'py-6 bg-transparent'}`}>
            <div className="container flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-heading no-underline">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-secondary rotate-3">
                        <Rocket size={24} fill="currentColor" />
                    </div>
                    <span className="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">WP Content AI</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary tracking-wide text-white/70 hover:no-underline"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#cta" className="btn btn-primary">
                        Começar Agora
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass-effect absolute top-full left-0 w-full py-8 px-6 flex flex-col gap-6 animate-fade-in">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-white/90"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#cta" className="btn btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>
                        Começar Agora
                    </a>
                </div>
            )}

            {/* Tailwind Bridge (Manual styles since I'm not using full tailwind setup but utility classes style) */}
            <style dangerouslySetInnerHTML={{
                __html: `
        header .container { display: flex; align-items: center; justify-content: space-between; }
        nav { display: flex; align-items: center; gap: 2rem; }
        @media (max-width: 768px) {
          nav { display: none; }
        }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .justify-between { justify-content: space-between; }
        .gap-2 { gap: 0.5rem; }
        .gap-8 { gap: 2rem; }
        .z-50 { z-index: 50; }
        .fixed { position: fixed; }
        .top-0 { top: 0; }
        .left-0 { left: 0; }
        .w-full { width: 100%; }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-300 { transition-duration: 300ms; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .bg-transparent { background-color: transparent; }
        .text-2xl { font-size: 1.5rem; }
        .font-bold { font-weight: 700; }
        .bg-primary { background-color: var(--primary); }
        .rounded-lg { border-radius: 0.5rem; }
        .text-secondary { color: var(--secondary); }
        .rotate-3 { transform: rotate(3deg); }
        .text-white { color: white; }
        .absolute { position: absolute; }
        .top-full { top: 100%; }
        .flex-col { flex-direction: column; }
        .gap-6 { gap: 1.5rem; }
        .text-lg { font-size: 1.125rem; }
        .font-medium { font-weight: 500; }
        .hidden { display: none; }
        @media (min-width: 768px) {
          .md\\:flex { display: flex; }
          .md\\:hidden { display: none; }
        }
      `}} />
        </header>
    );
};

export default Header;
