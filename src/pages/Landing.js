import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Unsaid</h1>
          <p className="tagline">
            Where silence speaks louder. Chat anonymously, share unspoken thoughts, and make unexpected connections.
          </p>
          <div className="hero-buttons">
            {/* <button onClick={() => navigate('/login')} className="primary-button">
              Login
            </button>
            <button onClick={() => navigate('/signup')} className="secondary-button">
              Sign Up
            </button> */}
            <button onClick={() => navigate('/home')} className="secondary-button">
              join
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Unsaid?</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Unspoken Connections</h3>
            <p>Conversations that happen without names. Only words that matter.</p>
          </div>
          <div className="feature">
            <h3>Nearby Rooms</h3>
            <p>Let fate guide you to people nearby. Rooms based on location, conversations on impulse.</p>
          </div>
          <div className="feature">
            <h3>Privacy First</h3>
            <p>In a world of oversharing, we value your silence. Your privacy is sacred.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"Unsaid gave me a place to talk without the weight of expectations. It's liberating."</p>
            <h4>- Noah B.</h4>
          </div>
          <div className="testimonial">
            <p>"The anonymity lets you be unapologetically real. No masks, no judgments."</p>
            <h4>- Emily R.</h4>
          </div>
          <div className="testimonial">
            <p>"Conversations with strangers feel like a breath of fresh air—just pure connection."</p>
            <h4>- Mark T.</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Say What You’ve Never Said?</h2>
        <button onClick={() => navigate('/home')} className="primary-button">
          Get Started
        </button>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>© 2024 Unsaid. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
