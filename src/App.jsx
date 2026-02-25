import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import VideoSection from './components/VideoSection'
import InterfaceShowcase from './components/InterfaceShowcase'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

// Legal Pages
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Licensing from './pages/Licensing'

const MainLanding = () => (
    <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VideoSection />
        <InterfaceShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
    </main>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-container">
                <Header />
                <Routes>
                    <Route path="/" element={<MainLanding />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/licensing" element={<Licensing />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App
