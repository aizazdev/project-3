import React from 'react';
import Hero from './Hero';
import VegetableSection from './Vegetables'; 
import Navbar from './Navbar';
import './App.css';

function Home() {
    return(
        <>
            <div className="hero-area">
                <Navbar />
                <Hero />
            </div>
            <div className="vegetable-section">
             <VegetableSection />
            </div>
        </>
    )
}
export default Home;