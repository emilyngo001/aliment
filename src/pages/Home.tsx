import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import kitchenImage from '../cookinggirl.png'; // Image for the main section
import homeCookImage from '../homecook.webp';   // Image for the "home cook" block
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        <div className="left-container">
          <h1 className="main-title">Leftover Items in the Pantry?</h1>
          <h2 className="main-subtitle">Share your ingredients, and we’ll do the rest!</h2>
          <Link to="/aliment/recipes">
            <button className="start-button">Start</button>
          </Link>
        </div>
        <div className="right-container">
          <img src={kitchenImage} alt="Person in kitchen" className="kitchen-image" />
        </div>
      </div>
      <div className="about-aliment">
        <h2 className="about-title">What is Aliment?</h2>
        <div className="about-content">
          <div className="about-card first-card">
            <h3>Objectives</h3>
            <p>Solve a daily problem for many people – “What’s for dinner”</p>
            <p>Help reduce food waste</p>
          </div>
          <div className="about-card second-card">
            <h3>Target Users</h3>
            <img src={homeCookImage} alt="Home cook" className="home-cook-image" />
            <p>Home cooks!</p>
          </div>
          <div className="about-card third-card">
            <h3>Our Solution</h3>
            <p>A recipe generator website allowing users to find recipes that use up ingredients they already have.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
