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
            Where silence speaks louder. Connect anonymously with nearby people, share unspoken thoughts, and make spontaneous connections.
          </p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/home')} className="primary-button">
              Start Now
            </button>
            <button onClick={() => navigate('/about')} className="secondary-button">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Unsaid Stands Out</h2>
        <div className="features-container">
          <div className="feature">
            <h3>Anonymous Conversations</h3>
            <p>Engage in conversations that are free of personal identities—just real thoughts and words.</p>
          </div>
          <div className="feature">
            <h3>5 km Radius Rooms</h3>
            <p>Find people within a 5 km radius and join local conversations based on your location. Let serendipity guide you.</p>
          </div>
          <div className="feature">
            <h3>Instant Connections</h3>
            <p>No long introductions or profiles. Just jump into the conversation and let the words flow.</p>
          </div>
          <div className="feature">
            <h3>Privacy First</h3>
            <p>Your personal information stays private. No profiles, no history—just the present moment.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"Unsaid is the perfect way to connect with strangers without any pressure or expectation. The 5 km radius feature makes it feel so local and real!"</p>
            <h4>- Alex M.</h4>
          </div>
          <div className="testimonial">
            <p>"I love the idea of connecting with people nearby. It’s refreshing to be able to speak my mind without worrying about my identity."</p>
            <h4>- Jamie S.</h4>
          </div>
          <div className="testimonial">
            <p>"This app lets me be unapologetically honest. I feel free to share my thoughts without any judgment."</p>
            <h4>- Taylor L.</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Break Your Silence?</h2>
        <p>Join Unsaid today and experience the freedom of anonymous, location-based conversations.</p>
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
