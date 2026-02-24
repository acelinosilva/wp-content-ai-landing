import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import InterfaceShowcase from './components/InterfaceShowcase'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app-container">
            <Header />
            <main>
                <Hero />
                <Features />
                <HowItWorks />
                <InterfaceShowcase />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
        </div>
    )
}

export default App
