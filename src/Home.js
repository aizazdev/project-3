import React from 'react';
import Hero from './Hero';
import VegetableSection from './Vegetables'; 
import Navbar from './Navbar';
import WhySmartIrrigation from './WhySmartIrrigation';
import './App.css';

function Home() {
    return(
        <>
            <div className="hero-section">
                <Navbar />
                <Hero />
            </div>
            <div className="vegetable-section">
             <VegetableSection />
            </div>
            <div className="whysmartirrigation-section">
                <WhySmartIrrigation />
            </div>
        </>
    )
}
export default Home;