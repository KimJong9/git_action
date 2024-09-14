import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            {/* 중앙 로고 이미지 */}
            <div className="home-logo">
                <img src={require('../assets/logo.png')} alt="logo" className="logo-img" />
            </div>
        </div>
    );
}

export default Home;
